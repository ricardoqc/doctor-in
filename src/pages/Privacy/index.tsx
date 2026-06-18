import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { ShieldCheck, ArrowLeft, Lock, UserCheck, MessageSquare, Scale, Globe, Star, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const PrivacyPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('en') ? 'en' : 'es';

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://doctor-in.com/privacy/#webpage",
        "url": "https://doctor-in.com/privacy",
        "name": currentLang === 'es' ? "Política de Privacidad y Seguridad | Doctor In" : "Security & Privacy Policy | Doctor In",
        "description": currentLang === 'es'
          ? "Descubre cómo Doctor In protege y maneja tu información médica y personal bajo estrictos estándares de privacidad."
          : "Learn how Doctor In protects and handles your personal medical data under absolute privacy standards."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://doctor-in.com/privacy/#breadcrumb",
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
            "name": currentLang === 'es' ? "Política de Privacidad" : "Privacy Policy",
            "item": "https://doctor-in.com/privacy"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-surface-alt pt-28 pb-20 px-6 lg:px-20 relative overflow-hidden">
      <GeoHead
        title={currentLang === 'es' ? "Política de Privacidad | Doctor In" : "Security & Privacy Policy | Doctor In"}
        description={
          currentLang === 'es'
            ? "Conoce cómo Doctor In protege y gestiona tus datos médicos y de contacto bajo estrictas políticas de confidencialidad en América Latina."
            : "Learn how Doctor In protects and handles your personal medical data under absolute privacy standards across Latin America."
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
            <Lock size={32} />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
              {currentLang === 'es' ? 'Seguridad y Privacidad' : 'Security & Privacy'}
            </h1>
            <p className="text-white/60 font-body text-sm">
              {currentLang === 'es' ? 'Última actualización: Junio 2026' : 'Last updated: June 2026'}
            </p>
          </div>
        </div>

        {/* Privacy Content Card */}
        <div className="bg-white p-8 lg:p-12 rounded-b-[32px] shadow-premium border-x border-b border-surface-alt space-y-10 font-body text-[#4A5568] leading-relaxed">
          {currentLang === 'es' ? (
            // SPANISH VERSION
            <>
              <p className="text-base text-dark-alt font-medium">
                En <strong>Doctor In</strong>, nos tomamos muy en serio la seguridad y confidencialidad de tus datos de salud. Esta política describe cómo recopilamos, procesamos y protegemos tu información sensible.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Lock size={20} />
                  </div>
                  1. Confidencialidad Médica y Secreto Profesional
                </h2>
                <p>
                  Todas las consultas, historiales y reportes médicos coordinados a través de <strong>Doctor In</strong> se rigen estrictamente bajo el principio de secreto profesional médico. Tu información de salud es accedida exclusivamente por personal clínico facultado directamente a cargo de tu atención.
                </p>
                <p>
                  Nos adherimos a principios bioéticos internacionales para asegurar que recibas atención médica de manera totalmente discreta y protegida fuera de tu país de origen.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  2. Medidas de Seguridad de Datos
                </h2>
                <p>
                  Utilizamos protocolos de protección técnicos y organizativos avanzados para salvaguardar tu información de carácter sensible. Esto incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Cifrado de extremo a extremo durante las transmisiones digitales de datos.</li>
                  <li>Accesos de visualización restringidos basados en roles exclusivos para los coordinadores y médicos asignados.</li>
                  <li>Almacenamiento en servidores en la nube con altos estándares de redundancia y seguridad física.</li>
                  <li>Auditoría continua de nuestros sistemas de comunicación.</li>
                </ul>
                <div className="p-6 bg-surface-alt rounded-2xl border border-surface-alt text-secondary font-bold italic">
                  "Tu información médica o personal nunca es compartida, comercializada ni vendida a terceros para fines comerciales o de marketing."
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <UserCheck size={20} />
                  </div>
                  3. Red Médica Certificada y Homologada
                </h2>
                <p>
                  <strong>Doctor In</strong> coordina servicios a través de una red seleccionada de médicos colegiados y clínicas locales habilitadas en toda América Latina. Auditamos proactivamente:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Títulos universitarios, colegiaturas habilitadas y vigentes ante las entidades correspondientes.</li>
                  <li>Estándares higiénicos de equipamiento y altos puntajes en el trato humanizado al paciente.</li>
                  <li>Velocidad de despacho a hoteles y eficiencia en telemedicina.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  4. Canales de Comunicación Seguros
                </h2>
                <p>
                  Utilizamos plataformas reconocidas internacionalmente para agilizar la gestión de manera oportuna y confidencial:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Canales protegidos de mensajería comercial (como WhatsApp Business de soporte al +51 966 386 803).</li>
                  <li>Formularios web encriptados mediante protocolos de cifrado seguros SSL.</li>
                  <li>Líneas directas seguras entre nuestros despachadores y los especialistas de salud.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Scale size={20} />
                  </div>
                  5. Marco Regulatorio
                </h2>
                <p>
                  Nos adaptamos a las directrices de protección de datos personales vigentes en cada país donde operamos en Latinoamérica, alineándonos en el Perú con:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>La <strong>Ley N° 29733</strong> (Ley de Protección de Datos Personales de la República del Perú).</li>
                  <li>Directivas sanitarias de protección del paciente lideradas por <strong>SUSALUD</strong> y ministerios de salud correspondientes.</li>
                  <li>Normas internacionales aplicables sobre confidencialidad de datos de salud en entornos digitales.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Globe size={20} />
                  </div>
                  6. Especializados en Viajeros y Expatriados
                </h2>
                <p>
                  Nuestra arquitectura de coordinación médica está diseñada a la medida de los turistas extranjeros en Latinoamérica:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Comunicación en inglés, español, francés, alemán y portugués.</li>
                  <li>Despacho médico a hoteles, Airbnbs o residencias en tiempo récord.</li>
                  <li>Documentos e historiales en inglés y español para el reembolso de reclamos ante compañías internacionales de seguros.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Star size={20} />
                  </div>
                  7. Por Qué Confían en Nosotros
                </h2>
                <p>
                  Ante un malestar médico lejos de casa, la confianza y la velocidad de respuesta marcan la diferencia. Viajeros y expatriados eligen Doctor In debido a:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li><strong>Soporte 24/7/365:</strong> Siempre hay un coordinador atento en tu propio idioma.</li>
                  <li><strong>Garantía de Vetting:</strong> Solo trabajamos con médicos acreditados.</li>
                  <li><strong>Documentación Válida:</strong> Invoices y reportes clínicos redactados para reembolsos exitosos.</li>
                </ul>
              </div>

              <div className="pt-8 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-secondary">¿Deseas solicitar la eliminación de tus datos?</div>
                  <p className="text-xs text-dark-alt/50 font-medium">Contáctanos a doctorin.health@gmail.com o vía WhatsApp al +51 966 386 803</p>
                </div>
                <Link to="/contact" className="shrink-0 w-full sm:w-auto">
                  <Button variant="primary" className="!rounded-full px-8 w-full sm:w-auto flex items-center justify-center gap-2">
                    <FileText size={16} />
                    Contacto y Soporte
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            // ENGLISH VERSION
            <>
              <p className="text-base text-dark-alt font-medium">
                At <strong>Doctor In</strong>, we are committed to protecting your personal and medical information with the highest standards of confidentiality, security, and transparency.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Lock size={20} />
                  </div>
                  1. Medical Confidentiality
                </h2>
                <p>
                  All medical consultations, logs, and medical files coordinated through <strong>Doctor In</strong> are handled under strict professional confidentiality and medical secrecy standards. Your information is accessed only by authorized healthcare professionals directly involved in your care.
                </p>
                <p>
                  We adhere strictly to internationally recognized principles of medical ethics, clinical secrecy, and patient privacy to ensure you feel secure while receiving medical assistance abroad.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  2. Secure Data Protection
                </h2>
                <p>
                  We implement robust technical and organizational security protocols to safeguard your personal and sensitive health data. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>End-to-end encryption for digital data transmissions.</li>
                  <li>Restricted, role-based access controls to sensitive clinical records.</li>
                  <li>Secure digital storage of coordinated medical logs.</li>
                  <li>Continuous evaluation and auditing of our data handling procedures.</li>
                </ul>
                <div className="p-6 bg-surface-alt rounded-2xl border border-surface-alt text-secondary font-bold italic">
                  "Your personal and medical data is never sold, shared for marketing, or used for purposes outside the immediate scope of coordinating your medical care."
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <UserCheck size={20} />
                  </div>
                  3. Vetted Medical Network
                </h2>
                <p>
                  <strong>Doctor In</strong> operates a curated network of licensed healthcare professionals and accredited local medical providers across Latin America. We maintain active compliance agreements and continuously monitor:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Professional medical credentials, certifications, and active licenses.</li>
                  <li>Clinical performance, sanitization, and quality of service.</li>
                  <li>Response times and operational reliability.</li>
                </ul>
                <p>
                  Our primary objective is to make sure every patient receives standard-setting medical care from highly qualified, certified, and compassionate specialists.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  4. Secure Communication Channels
                </h2>
                <p>
                  We utilize secure and widely trusted communication platforms to manage fast and confidential interactions:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Encrypted chat channels (such as WhatsApp Business at +51 966 386 803).</li>
                  <li>Secure online forms protected by encryption protocols.</li>
                  <li>Direct, protected channels between coordinators and dispatch doctors.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Scale size={20} />
                  </div>
                  5. Regulatory Compliance
                </h2>
                <p>
                  Doctor In operates in strict alignment with regional regulations and international data privacy best practices, including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li><strong>Ley N° 29733</strong> – Personal Data Protection Law (Peru).</li>
                  <li>National health authority directives (aligned with SUSALUD in Peru and regional equivalents in Latam).</li>
                  <li>Consumer protection and transparency regulations (under INDECOPI and international standards).</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Globe size={20} />
                  </div>
                  6. A System Tailored for Travelers
                </h2>
                <p>
                  Our medical coordination network is designed specifically to resolve health challenges for travelers and expats in Latin America, offering:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li>Clear communication in your preferred language (English, French, German, or Spanish).</li>
                  <li>Rapid response and coordination directly to your hotel, Airbnb, or home.</li>
                  <li>Comprehensive medical reports, prescriptions, and invoices formatted for international travel insurance reimbursement.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Star size={20} />
                  </div>
                  7. Why Travelers Trust Us
                </h2>
                <p>
                  When navigating a health issue far from home, speed and trust are everything. Travelers across Latin America rely on Doctor In due to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-sm font-medium">
                  <li><strong>Immediate Support:</strong> Our team is available 24/7, 365 days a year.</li>
                  <li><strong>Bilingual Services:</strong> No language barriers or medical translation issues.</li>
                  <li><strong>Insurance Integration:</strong> Standardized documents to ensure quick processing of your claims.</li>
                </ul>
              </div>

              <div className="pt-8 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-secondary">Want to request data deletion or have questions?</div>
                  <p className="text-xs text-dark-alt/50 font-medium">Contact us at doctorin.health@gmail.com or via WhatsApp at +51 966 386 803</p>
                </div>
                <Link to="/contact" className="shrink-0 w-full sm:w-auto">
                  <Button variant="primary" className="!rounded-full px-8 w-full sm:w-auto flex items-center justify-center gap-2">
                    <FileText size={16} />
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
