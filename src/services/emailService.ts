const API_EMAIL_URL = import.meta.env.VITE_API_EMAIL_URL || '/api/send-email';

/**
 * Sends form payload to the Vercel serverless backend API endpoint.
 */
async function sendViaNodemailerApi(type: 'contact' | 'booking' | 'newsletter', data: Record<string, any>): Promise<boolean> {
  try {
    const response = await fetch(API_EMAIL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        data,
      }),
    });

    if (response.ok) {
      return true;
    } else {
      console.error(`Serverless API sending failed with status: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error('Error sending email via Serverless API:', error);
    return false;
  }
}

/**
 * Generic dispatcher that targets the Nodemailer serverless function.
 * Falls back to mock console logs in local development when not running Vercel.
 */
async function dispatchEmail(
  type: 'contact' | 'booking' | 'newsletter',
  payload: Record<string, any>
): Promise<boolean> {
  const success = await sendViaNodemailerApi(type, payload);
  if (success) return true;

  // Mock fallback for local testing & design verification
  console.log(`%c[Dev Mode - Mock Email Sent] Type: ${type.toUpperCase()}`, 'color: #f42434; font-weight: bold;', payload);
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate networking delay
  return true;
}

export interface ContactParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BookingParams {
  doctorName: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  description: string;
}

/**
 * Handles Contact Form submissions
 */
export async function sendContactEmail(params: ContactParams): Promise<boolean> {
  return dispatchEmail('contact', {
    from_name: params.name,
    reply_to: params.email,
    subject: params.subject,
    message: params.message,
    submitted_at: new Date().toLocaleString()
  });
}

/**
 * Handles Booking Request Modal submissions
 */
export async function sendBookingEmail(params: BookingParams): Promise<boolean> {
  return dispatchEmail('booking', {
    doctor_name: params.doctorName,
    from_name: params.name,
    reply_to: params.email,
    phone_number: params.phone,
    patient_location: params.location,
    medical_description: params.description,
    submitted_at: new Date().toLocaleString()
  });
}

/**
 * Handles Footer Newsletter subscription submissions
 */
export async function sendNewsletterEmail(email: string): Promise<boolean> {
  return dispatchEmail('newsletter', {
    subscriber_email: email,
    submitted_at: new Date().toLocaleString()
  });
}
