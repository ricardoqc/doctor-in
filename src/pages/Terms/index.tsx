import React from 'react';
import { GeoHead } from '@/seo/GeoHead';
import { ShieldCheck, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-surface-alt pt-28 pb-20 px-6 lg:px-20 relative overflow-hidden">
      <GeoHead
        title="Terms and Conditions | Doctor In"
        description="Review the terms and conditions for medical consultation coordination services across South America."
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
            <FileText size={32} />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">Terms & Conditions</h1>
            <p className="text-white/60 font-body text-sm">Last updated: May 18, 2026</p>
          </div>
        </div>

        {/* Terms Content Card */}
        <div className="bg-white p-8 lg:p-12 rounded-b-[32px] shadow-premium border-x border-b border-surface-alt space-y-8 font-body text-[#4A5568] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the services coordinated by <strong>Doctor In</strong>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              2. Medical Coordination Service
            </h2>
            <p>
              <strong>Doctor In</strong> operates exclusively as an intermediary coordinator. We facilitate connection between international travelers/expats and independent, certified, licensed local doctors and medical specialists in South America.
            </p>
            <p className="bg-surface-alt p-4 rounded-2xl border-l-4 border-accent text-sm italic">
              <strong>Emergency Warning:</strong> If you are experiencing a life-threatening medical situation, please contact local public emergency numbers (like 911 or regional equivalents) immediately in addition to requesting our coordination support.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              3. Fees and Billing
            </h2>
            <p>
              Consultation fees are coordinated transparently during booking. Payment terms, including invoice issuance for travel insurance reimbursement purposes, will be provided clearly by our team or the dispatched professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-secondary flex items-center gap-2">
              <ShieldCheck size={20} className="text-accent shrink-0" />
              4. Travel Insurance Coordination
            </h2>
            <p>
              While we provide all medical reports and invoices necessary for reimbursement, it is the patient's responsibility to confirm coverage limits and conditions with their specific travel insurance provider.
            </p>
          </div>

          <div className="pt-6 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-sm font-medium">
              Have questions? Contact our support.
            </div>
            <Link to="/contact">
              <Button variant="primary" className="!rounded-full px-8">Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
