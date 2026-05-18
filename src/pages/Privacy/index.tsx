import React from 'react';
import { GeoHead } from '@/seo/GeoHead';
import { ShieldCheck, ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-surface-alt pt-28 pb-20 px-6 lg:px-20 relative overflow-hidden">
      <GeoHead
        title="Privacy Policy | Doctor In"
        description="Learn how Doctor In protects and handles your personal medical data under absolute privacy standards."
      />

      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto relative z-10">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold font-body mb-8 hover:text-secondary transition-colors group">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="bg-secondary text-surface p-8 lg:p-12 rounded-t-[32px] shadow-premium flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
            <Lock size={32} />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">Privacy Policy</h1>
            <p className="text-white/60 font-body text-sm">Last updated: May 18, 2026</p>
          </div>
        </div>

        {/* Privacy Content Card */}
        <div className="bg-white p-8 lg:p-12 rounded-b-[32px] shadow-premium border-x border-b border-surface-alt space-y-8 font-body text-[#4A5568] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              1. Information We Collect
            </h2>
            <p>
              To coordinate professional medical attention, we collect the necessary personal data: full name, email address, telephone/WhatsApp number, current physical location (hotel, Airbnb, home), and a brief description of the medical symptoms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              2. How We Use Your Data
            </h2>
            <p>
              Your data is processed strictly for coordinating medical consultations. We share your contact details and location details exclusively with the specific medical practitioner or diagnostic team dispatched to consult you. We do not sell or lease your personal information to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              3. Security and Protection
            </h2>
            <p>
              We implement industry-standard encryption protocols (SSL/TLS) for data transmission. Medical descriptions are treated as sensitive, high-protection biological parameters under medical confidentiality principles.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              4. Cookies and Web Analytics
            </h2>
            <p>
              We use minimal functional and analytic cookies to enhance browsing experiences and track dynamic usage indices. These cookies do not collect any personal medical parameters.
            </p>
          </div>

          <div className="pt-6 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-sm font-medium">
              Want to request data deletion?
            </div>
            <Link to="/contact">
              <Button variant="primary" className="!rounded-full px-8">Request Deletion</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
