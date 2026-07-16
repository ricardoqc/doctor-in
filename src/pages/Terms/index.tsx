import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { ShieldCheck, ArrowLeft, FileText, Scale, Info, CheckCircle, HelpCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const TermsPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('en') ? 'en' : 'es';

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://doctor-in.com/terms/#webpage",
        "url": "https://doctor-in.com/terms",
        "name": currentLang === 'es' ? "Términos de Uso | Doctor In" : "Terms of Use | Doctor In",
        "description": currentLang === 'es' 
          ? "Términos de uso que regulan el acceso y uso de los servicios de coordinación médica de Doctor In." 
          : "Terms of use governing your access to and use of the medical coordination services provided by Doctor In."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://doctor-in.com/terms/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://doctor-in.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": currentLang === 'es' ? "Términos de Uso" : "Terms of Use",
            "item": "https://doctor-in.com/terms"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-surface-alt pt-28 pb-20 px-6 lg:px-20 relative overflow-hidden">
      <GeoHead
        title={currentLang === 'es' ? "Términos de Uso | Doctor In" : "Terms of Use | Doctor In"}
        description={
          currentLang === 'es'
            ? "Términos de uso que regulan el acceso y uso de los servicios de coordinación médica de Doctor In en América Latina."
            : "Terms of use governing your access to and use of the medical coordination services provided by Doctor In in Latin America."
        }
        jsonLd={jsonLd}
      />

      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[850px] mx-auto relative z-10">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold font-body mb-8 hover:text-secondary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          {currentLang === 'es' ? 'Volver al Inicio' : 'Back to Home'}
        </Link>

        {/* Page Header */}
        <div className="bg-secondary text-surface p-8 lg:p-12 rounded-t-[32px] shadow-premium flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
            <FileText size={32} />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
              {currentLang === 'es' ? 'Términos de Uso' : 'Terms of Use'}
            </h1>
            <p className="text-white/60 font-body text-sm">
              {currentLang === 'es' ? 'Última actualización: Junio 2026' : 'Last updated: June 2026'}
            </p>
          </div>
        </div>

        {/* Page Content Card */}
        <div className="bg-white p-8 lg:p-12 rounded-b-[32px] shadow-premium border-x border-b border-surface-alt space-y-10 font-body text-[#4A5568] leading-relaxed">
          {currentLang === 'es' ? (
            // SPANISH CONTENT
            <>
              <p className="text-base text-dark-alt font-medium">
                Estos Términos de Uso regulan su acceso y uso de los servicios de coordinación médica proporcionados por <strong>Doctor In</strong>. Al solicitar o utilizar nuestros servicios, usted acepta cumplir con estos términos.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Info size={20} />
                  </div>
                  1. Alcance de los Servicios
                </h2>
                <p>
                  <strong>Doctor In</strong> proporciona acceso coordinado a servicios de atención médica para viajeros, expatriados y residentes en Cusco, Perú y en toda América Latina, incluyendo:
                </p>
                <ul className="space-y-3 pl-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Consultas de telemedicina</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Visitas médicas en persona (en hoteles, domicilios o clínicas locales)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Medicina preventiva y de viaje</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Coordinación de servicios de diagnóstico y soporte terapéutico</li>
                </ul>
                <p>
                  Todos los servicios de salud son brindados por profesionales autorizados e independientes, de acuerdo con las regulaciones de cada país.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Scale size={20} />
                  </div>
                  2. Naturaleza del Servicio
                </h2>
                <p>
                  <strong>Doctor In</strong> actúa exclusivamente como una plataforma de coordinación y facilitación médica. Conectamos de manera eficiente a los pacientes con médicos locales colegiados, bilingües y clínicas acreditadas de nuestra red premium.
                </p>
                <p>
                  Cada profesional médico o clínica proveedora es el único y exclusivo responsable del diagnóstico, tratamiento y atención médica que brinde de forma directa. <strong>Doctor In</strong> no asume responsabilidad civil ni médica por las decisiones clínicas individuales del personal de salud.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  3. Cumplimiento Regulatorio
                </h2>
                <p>
                  Operamos con los estándares más exigentes y en pleno cumplimiento de las leyes locales, incluyendo en el Perú:
                </p>
                <ul className="space-y-3 pl-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> <strong>Ley N° 29733</strong> – Ley de Protección de Datos Personales.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Normas y supervisión de <strong>SUSALUD</strong> (Superintendencia Nacional de Salud) y entes reguladores regionales de Latam.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Normas de protección al consumidor fiscalizadas por <strong>INDECOPI</strong>.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <span className="text-lg">🚨</span>
                  </div>
                  4. No es un Servicio de Emergencia de Vida o Muerte
                </h2>
                <p>
                  <strong>Doctor In</strong> no reemplaza los servicios públicos de atención de emergencias graves o desastres.
                </p>
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 text-red-700 font-bold text-sm">
                  En caso de peligro inminente para la vida o situaciones de extrema urgencia traumática, el paciente debe llamar de inmediato a los servicios de rescate públicos locales (como el 911, 116 o 105 según corresponda) o acudir al hospital más cercano.
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  5. Responsabilidades del Usuario
                </h2>
                <p>Al utilizar nuestros servicios de coordinación, usted se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Proporcionar información médica e identificativa veraz, precisa y completa.</li>
                  <li>Seguir las instrucciones y recomendaciones brindadas por el médico tratante.</li>
                  <li>Informar oportunamente al profesional de salud sobre cualquier cambio adverso en sus síntomas.</li>
                  <li>Hacer uso de la plataforma en buena fe y para fines estrictamente lícitos y asistenciales.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Calendar size={20} />
                  </div>
                  6. Agendamiento y Citas
                </h2>
                <p>
                  Nos esforzamos por garantizar tiempos de respuesta rápidos (usualmente en minutos). Sin embargo, los tiempos de llegada de los médicos a domicilio u hoteles están sujetos a la disponibilidad geográfica, complejidad de la consulta, tráfico local y demanda horaria. Las decisiones sobre tratamientos médicos se toman basándose exclusivamente en el criterio clínico del profesional asignado.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Scale size={20} />
                  </div>
                  7. Tarifas y Facturación
                </h2>
                <p>
                  Los costos de los servicios médicos se informan con total transparencia antes de confirmar la atención. El pago puede ser directo por el paciente o coordinado a través de su compañía de seguros o asistencia al viajero.
                </p>
                <p>
                  <strong>Doctor In</strong> y los médicos adscritos proporcionan informes médicos detallados, recetas con denominación común internacional y facturas válidas para facilitar el reembolso ante cualquier seguro de viaje internacional.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  8. Coordinación de Seguros de Viaje
                </h2>
                <p>
                  Colaboramos con múltiples seguros de viaje facilitando la documentación médica estándar. No obstante, las decisiones finales de cobertura, deducibles o reembolsos competen únicamente a su aseguradora. <strong>Doctor In</strong> no garantiza que su compañía de seguros reembolse la totalidad de la tarifa del servicio médico si usted no ha pre-autorizado la consulta directamente con ellos.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  9. Protección de Datos y Privacidad
                </h2>
                <p>
                  El procesamiento de sus datos se rige bajo la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) y políticas internacionales HIPAA/GDPR para historiales clínicos. Para más detalles, por favor revise nuestra <Link to="/privacy" className="text-primary font-bold hover:underline">Política de Privacidad</Link>.
                </p>
              </div>

              <div className="pt-8 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-secondary">¿Tienes preguntas sobre estos Términos?</div>
                  <p className="text-xs text-dark-alt/50 font-medium">Contáctanos a doctorin.health@gmail.com o vía WhatsApp al +51 941 667 151</p>
                </div>
                <Link to="/contact" className="shrink-0 w-full sm:w-auto">
                  <Button variant="primary" className="!rounded-full px-8 w-full sm:w-auto flex items-center justify-center gap-2">
                    Contacto y Soporte
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            // ENGLISH CONTENT
            <>
              <p className="text-base text-dark-alt font-medium">
                These Terms of Use govern your access to and use of the medical coordination services provided by <strong>Doctor In</strong>. By requesting or using our services, you agree to comply with and be bound by these terms.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Info size={20} />
                  </div>
                  1. Scope of Services
                </h2>
                <p>
                  <strong>Doctor In</strong> provides coordinated access to medical care services for travelers, expats, and residents in Cusco, Peru, and across Latin America, including:
                </p>
                <ul className="space-y-3 pl-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Telemedicine consultations</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> In-person medical visits (at hotels, homes, or local clinics)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Preventive and travel medicine</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Coordination of diagnostic and support services</li>
                </ul>
                <p>
                  All medical services are delivered by independent, licensed healthcare professionals operating in compliance with applicable local regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Scale size={20} />
                  </div>
                  2. Nature of the Service
                </h2>
                <p>
                  <strong>Doctor In</strong> acts as a medical coordination and facilitation platform. We ensure quick and efficient connection between travelers and qualified local doctors and accredited medical centers.
                </p>
                <p>
                  Healthcare providers operate independently and are solely responsible for the medical care, diagnosis, and treatment they deliver. <strong>Doctor In</strong> is not liable for medical outcomes resulting from professional clinical judgment.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  3. Regulatory Compliance
                </h2>
                <p>
                  We operate in strict alignment with regional laws and regulations, including in Peru:
                </p>
                <ul className="space-y-3 pl-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> <strong>Ley N° 29733</strong> – Personal Data Protection Law.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Regulations and oversight of <strong>SUSALUD</strong> (National Health Superintendency) and regional health authorities in Latam.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Consumer protection and transparency standards under <strong>INDECOPI</strong>.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <span className="text-lg">🚨</span>
                  </div>
                  4. Not a Life-Threatening Emergency Service
                </h2>
                <p>
                  <strong>Doctor In</strong> is not a substitute for municipal public emergency responders.
                </p>
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 text-red-700 font-bold text-sm">
                  In life-threatening situations, patients must immediately contact local public emergency services (such as 911, 116, or 105) or proceed to the nearest hospital emergency room.
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  5. User Responsibilities
                </h2>
                <p>By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Provide accurate, complete, and truthful personal and medical information.</li>
                  <li>Follow medical advice and prescribed treatments.</li>
                  <li>Inform healthcare providers immediately of any changes in your condition.</li>
                  <li>Use the services in good faith and for legitimate medical purposes.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Calendar size={20} />
                  </div>
                  6. Appointments and Service Delivery
                </h2>
                <p>
                  We strive to arrange care rapidly. However, response and travel times may vary depending on geographic location, traffic, active demand, and clinical complexity. Medical decisions are based solely on professional clinical judgment.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Scale size={20} />
                  </div>
                  7. Payments and Billing
                </h2>
                <p>
                  Consultation fees are coordinated transparently during booking. Services may be paid directly by the patient or coordinated through insurance providers.
                </p>
                <p>
                  We provide detailed medical reports, international-standard prescriptions, and invoices to facilitate reimbursement claims.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  8. Insurance Coordination
                </h2>
                <p>
                  While we assist in providing the necessary documentation for your claims, coverage approval, reimbursement decisions, and payment terms are determined solely by your travel insurance or assistance provider. Doctor In does not guarantee direct reimbursement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  9. Privacy and Data Protection
                </h2>
                <p>
                  All personal and medical data is processed in accordance with Ley N° 29733 (Peru's Personal Data Protection Law) and international standards. For details, please refer to our <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div className="pt-8 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-secondary">Have questions regarding these Terms?</div>
                  <p className="text-xs text-dark-alt/50 font-medium">Contact us at doctorin.health@gmail.com or via WhatsApp at +51 941 667 151</p>
                </div>
                <Link to="/contact" className="shrink-0 w-full sm:w-auto">
                  <Button variant="primary" className="!rounded-full px-8 w-full sm:w-auto flex items-center justify-center gap-2">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
