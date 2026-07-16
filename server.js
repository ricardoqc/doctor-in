import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { type, data } = req.body || {};

  if (!type || !data) {
    return res.status(400).json({ error: 'Missing type or data in request body' });
  }

  const SMTP_HOST = process.env.SMTP_HOST || 'mail.doctorcusco.com';
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
  const SMTP_USER = process.env.SMTP_USER || 'info@doctorcusco.com';
  const SMTP_PASS = process.env.SMTP_PASS || '';

  if (!SMTP_PASS) {
    console.error('SMTP Password is not configured in environment variables.');
    return res.status(500).json({ error: 'Mail server credentials are not fully configured.' });
  }

  try {
    // In production, use the direct URL for the logo since it's served by Nginx on HestiaCP
    const logoSrc = 'https://doctor-in.com/images/brands/doctor-in-logo-1.png';
    const attachments = [];

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let subject = '';
    let htmlBodyContent = '';
    const timestamp = data.submitted_at || new Date().toLocaleString();

    if (type === 'contact') {
      const formSubject = data.subject || 'General Inquiry';
      subject = `[Doctor In] Contact Form: ${formSubject}`;
      htmlBodyContent = `
        <h2 style="color: #071f5d; font-size: 22px; font-weight: bold; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f0f4f8; padding-bottom: 12px;">New Contact Message Received</h2>
        <p style="color: #4A5568; font-size: 15px; margin-bottom: 25px;">You have received a new contact inquiry through the Doctor In website portal.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px;">
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; background-color: #f8fafc; border-bottom: 1px solid #edf2f7; width: 130px; border-radius: 6px 0 0 6px;">Sender Name</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7; background-color: #f8fafc; border-radius: 0 6px 6px 0;">${data.from_name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; border-bottom: 1px solid #edf2f7;">Email Address</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7;"><a href="mailto:${data.reply_to}" style="color: #f42434; text-decoration: none; font-weight: bold;">${data.reply_to || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; background-color: #f8fafc; border-bottom: 1px solid #edf2f7; border-radius: 6px 0 0 6px;">Subject</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7; background-color: #f8fafc; border-radius: 0 6px 6px 0;">${formSubject}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; border-bottom: 1px solid #edf2f7;">Submitted At</td>
            <td style="padding: 10px 12px; color: #718096; border-bottom: 1px solid #edf2f7; font-size: 13px;">${timestamp}</td>
          </tr>
        </table>
        
        <div style="margin-bottom: 30px; padding: 20px; background-color: #f0f4f8; border-radius: 12px; border-left: 4px solid #f42434;">
          <h4 style="color: #071f5d; margin-top: 0; margin-bottom: 8px; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Message Details</h4>
          <p style="color: #2D3748; white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${data.message || 'N/A'}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${data.reply_to}?subject=Re: ${formSubject}" style="background-color: #f42434; color: #ffffff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(244, 36, 52, 0.25);">Reply to Patient via Email</a>
        </div>
      `;
    } else if (type === 'booking') {
      const doctor = data.doctor_name || 'General Practitioner';
      subject = `[Doctor In] Booking: Request for ${doctor}`;

      const rawPhone = data.phone_number || '';
      const cleanPhone = rawPhone.replace(/\+/g, '').replace(/\s+/g, '');
      const waLink = cleanPhone ? `https://wa.me/${cleanPhone}` : '';

      htmlBodyContent = `
        <h2 style="color: #071f5d; font-size: 22px; font-weight: bold; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f0f4f8; padding-bottom: 12px;">New Booking Request</h2>
        <p style="color: #4A5568; font-size: 15px; margin-bottom: 25px;">A new appointment request for <strong>${doctor}</strong> has been received through the Doctor In booking portal.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px;">
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; background-color: #f8fafc; border-bottom: 1px solid #edf2f7; width: 140px; border-radius: 6px 0 0 6px;">Patient Name</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7; background-color: #f8fafc; border-radius: 0 6px 6px 0;">${data.from_name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; border-bottom: 1px solid #edf2f7;">Email Address</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7;"><a href="mailto:${data.reply_to}" style="color: #f42434; text-decoration: none; font-weight: bold;">${data.reply_to || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; background-color: #f8fafc; border-bottom: 1px solid #edf2f7; border-radius: 6px 0 0 6px;">Phone/WhatsApp</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7; background-color: #f8fafc; border-radius: 0 6px 6px 0;">
              <strong>${rawPhone}</strong>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; border-bottom: 1px solid #edf2f7;">Location/Country</td>
            <td style="padding: 10px 12px; color: #2D3748; border-bottom: 1px solid #edf2f7;">${data.patient_location || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; background-color: #f8fafc; border-bottom: 1px solid #edf2f7; border-radius: 6px 0 0 6px;">Request Date</td>
            <td style="padding: 10px 12px; color: #718096; border-bottom: 1px solid #edf2f7; background-color: #f8fafc; border-radius: 0 6px 6px 0; font-size: 13px;">${timestamp}</td>
          </tr>
        </table>
        
        <div style="margin-bottom: 30px; padding: 20px; background-color: #f0f4f8; border-radius: 12px; border-left: 4px solid #f42434;">
          <h4 style="color: #071f5d; margin-top: 0; margin-bottom: 8px; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Symptom Description</h4>
          <p style="color: #2D3748; white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${data.medical_description || 'N/A'}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          ${waLink ? `<a href="${waLink}" target="_blank" style="background-color: #25D366; color: #ffffff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block; margin: 5px; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);">Chat via WhatsApp 💬</a>` : ''}
          <a href="mailto:${data.reply_to}?subject=Re: Booking Request - Doctor In" style="background-color: #f42434; color: #ffffff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block; margin: 5px; box-shadow: 0 4px 12px rgba(244, 36, 52, 0.25);">Reply via Email</a>
        </div>
      `;
    } else if (type === 'newsletter') {
      subject = `[Doctor In] New Newsletter Subscription`;
      htmlBodyContent = `
        <h2 style="color: #071f5d; font-size: 22px; font-weight: bold; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f0f4f8; padding-bottom: 12px;">New Newsletter Subscription</h2>
        <p style="color: #4A5568; font-size: 15px; margin-bottom: 25px;">A new reader has signed up to receive updates from the Doctor In health newsletter.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px;">
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #071f5d; background-color: #f8fafc; border-bottom: 1px solid #edf2f7; width: 120px; border-radius: 6px 0 0 6px;">Subscriber Email</td>
            <td style="padding: 12px; color: #2D3748; border-bottom: 1px solid #edf2f7; background-color: #f8fafc; border-radius: 0 6px 6px 0; font-size: 16px;"><strong><a href="mailto:${data.subscriber_email}" style="color: #f42434; text-decoration: none;">${data.subscriber_email || 'N/A'}</a></strong></td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #071f5d; border-bottom: 1px solid #edf2f7;">Registered On</td>
            <td style="padding: 10px 12px; color: #718096; border-bottom: 1px solid #edf2f7; font-size: 13px;">${timestamp}</td>
          </tr>
        </table>

        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${data.subscriber_email}?subject=Welcome to Doctor In!" style="background-color: #f42434; color: #ffffff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(244, 36, 52, 0.25);">Send Welcome Email</a>
        </div>
      `;
    }

    const completeHtmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
        </head>
        <body style="background-color: #f0f4f8; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="background-color: #f0f4f8; padding: 40px 10px; min-width: 320px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(7, 31, 93, 0.08); border: 1px solid #e2e8f0;">
              
              <!-- Brand Banner Header -->
              <div style="background-color: #071f5d; padding: 30px; text-align: center; border-bottom: 4px solid #f42434;">
                <img src="${logoSrc}" alt="Doctor In Logo" style="max-height: 50px; width: auto; display: inline-block;" />
              </div>
              
              <!-- Message Box Panel -->
              <div style="padding: 40px 30px; background-color: #ffffff;">
                ${htmlBodyContent}
              </div>
              
              <!-- Footer Contact & Credentials -->
              <div style="background-color: #071f5d; padding: 35px 30px; text-align: center; color: #ffffff; font-size: 13px;">
                <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 15px; letter-spacing: 0.5px;">Need Medical Assistance?</p>
                <p style="margin: 0 0 20px 0; color: #94a3b8; font-size: 13px;">Our medical network coordinates visits 24/7/365</p>
                <div style="margin-bottom: 25px;">
                  <a href="https://wa.me/51941667151" style="background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 12px; display: inline-block; margin: 5px; box-shadow: 0 4px 8px rgba(37, 211, 102, 0.2);">WhatsApp Priority</a>
                  <a href="mailto:doctorin.health@gmail.com" style="background-color: #f42434; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 12px; display: inline-block; margin: 5px; box-shadow: 0 4px 8px rgba(244, 36, 52, 0.2);">Email Coordinator</a>
                </div>
                <p style="margin: 0 0 5px 0; font-size: 11px; color: #64748b;">This email was dispatched securely via Doctor In Mail Server.</p>
                <p style="margin: 0; font-size: 11px; color: #64748b;">&copy; ${new Date().getFullYear()} Doctor In. All rights reserved.</p>
              </div>

            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: \`"\${data.from_name || 'Doctor In Form'}" <\${SMTP_USER}>\`,
      to: 'info@doctorcusco.com',
      replyTo: data.reply_to || data.subscriber_email || undefined,
      subject: subject,
      html: completeHtmlTemplate,
      attachments: attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Nodemailer SMTP sent message: %s', info.messageId);

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('SMTP server mail send error:', error);
    return res.status(500).json({ error: 'Mail Server failed during dispatch.', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Backend server listening on port \${PORT}\`);
});
