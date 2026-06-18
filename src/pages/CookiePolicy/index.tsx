import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { Shield, ArrowLeft, Cookie, Info, Settings, HelpCircle, Check, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const CookiePolicyPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('en') ? 'en' : 'es';

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://doctor-in.com/cookie-policy/#webpage",
        "url": "https://doctor-in.com/cookie-policy",
        "name": currentLang === 'es' ? "Política de Cookies | Doctor In" : "Cookie Policy | Doctor In",
        "description": currentLang === 'es'
          ? "Entiende cómo Doctor In utiliza las cookies y tecnologías similares para garantizar el funcionamiento y mejorar tu experiencia web."
          : "Learn how Doctor In uses cookies and similar technologies to ensure our website functions properly and improve your experience."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://doctor-in.com/cookie-policy/#breadcrumb",
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
            "name": currentLang === 'es' ? "Política de Cookies" : "Cookie Policy",
            "item": "https://doctor-in.com/cookie-policy"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-surface-alt pt-28 pb-20 px-6 lg:px-20 relative overflow-hidden">
      <GeoHead
        title={currentLang === 'es' ? "Política de Cookies | Doctor In" : "Cookie Policy & Preferences | Doctor In"}
        description={
          currentLang === 'es'
            ? "Conoce el uso de cookies, almacenamiento de preferencias y tecnologías de análisis web aplicadas en Doctor In para la comodidad de los usuarios."
            : "Learn how Doctor In uses cookies and similar technologies to ensure our website functions properly and improve your experience."
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
            <Cookie size={32} />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
              {currentLang === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
            </h1>
            <p className="text-white/60 font-body text-sm">
              {currentLang === 'es' ? 'Última actualización: Junio 2026' : 'Last updated: June 2026'}
            </p>
          </div>
        </div>

        {/* Cookie Content Card */}
        <div className="bg-white p-8 lg:p-12 rounded-b-[32px] shadow-premium border-x border-b border-surface-alt space-y-10 font-body text-[#4A5568] leading-relaxed">
          {currentLang === 'es' ? (
            // SPANISH VERSION
            <>
              <p className="text-base text-dark-alt font-medium">
                En <strong>Doctor In</strong>, utilizamos cookies y tecnologías de seguimiento similares para garantizar que nuestro sitio web funcione correctamente, comprender cómo interactúas con él y mejorar tu experiencia general.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Info size={20} />
                  </div>
                  1. ¿Qué son las Cookies?
                </h2>
                <p>
                  Las cookies son pequeños archivos de texto que se guardan en tu dispositivo (computadora, tableta o teléfono móvil) al visitar un sitio web. Ayudan a que las páginas web operen con fluidez y recopilen métricas de rendimiento y uso.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Settings size={20} />
                  </div>
                  2. ¿Por Qué las Utilizamos?
                </h2>
                <p>Usamos cookies para los siguientes propósitos principales:</p>
                <ul className="space-y-3 pl-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Mantener la estabilidad técnica y seguridad de la navegación.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Recordar tus datos básicos en los formularios de agendamiento y contacto.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Guardar tus preferencias de idioma (inglés, español, etc.) para tu próxima visita.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Analizar el flujo de tráfico mediante herramientas analíticas para optimizar nuestro contenido.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Shield size={20} />
                  </div>
                  3. Tipos de Cookies que Empleamos
                </h2>

                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-heading font-bold text-secondary text-lg">Cookies Esenciales (Strictly Necessary)</h3>
                      <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider">Siempre Activas</span>
                    </div>
                    <p className="text-sm">
                      Son fundamentales para que el sitio funcione y no se pueden desactivar en nuestros sistemas. Regulan el acceso a zonas protegidas, la subida de formularios de contacto y la visualización correcta del idioma predeterminado.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-heading font-bold text-secondary text-lg">Cookies de Rendimiento y Analítica</h3>
                      <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full font-bold uppercase tracking-wider">Opcionales</span>
                    </div>
                    <p className="text-sm">
                      Nos permiten contar las visitas y fuentes de navegación para poder medir y mejorar el rendimiento de nuestro sitio web. Nos ayudan a saber qué páginas son las más o menos populares y cómo se mueven los visitantes por el sitio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  4. Proveedores de Terceros
                </h2>
                <p>
                  En Doctor In trabajamos con proveedores tecnológicos y de análisis web (como Google Analytics, WhatsApp Business Link) que pueden colocar cookies en tu navegador para agilizar procesos interactivos. Solo contratamos socios de confianza con sólidas garantías de seguridad.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Check size={20} />
                  </div>
                  5. Control de Tus Preferencias
                </h2>
                <p>
                  Puedes gestionar, deshabilitar o borrar cookies configurando los ajustes de tu propio navegador de internet (por ejemplo, en Chrome, Safari, Firefox o Edge). Ten en cuenta que si deshabilitas todas las cookies esenciales, es posible que el formulario de contacto o algunas secciones web presenten fallos de comportamiento.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <ShieldAlert size={20} />
                  </div>
                  6. Protección de Datos Generales
                </h2>
                <p>
                  Cualquier dato recopilado de forma automatizada se procesa bajo el marco legal de la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) y se detalla extensamente en nuestra <Link to="/privacy" className="text-primary font-bold hover:underline">Política de Privacidad</Link>.
                </p>
              </div>

              <div className="pt-8 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-secondary">¿Tienes dudas sobre las Cookies?</div>
                  <p className="text-xs text-dark-alt/50 font-medium">Escríbenos a doctorin.health@gmail.com o vía WhatsApp al +51 966 386 803</p>
                </div>
                <Link to="/contact" className="shrink-0 w-full sm:w-auto">
                  <Button variant="primary" className="!rounded-full px-8 w-full sm:w-auto flex items-center justify-center gap-2">
                    Contacto y Soporte
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            // ENGLISH VERSION
            <>
              <p className="text-base text-dark-alt font-medium">
                At <strong>Doctor In</strong>, we use cookies and similar tracking technologies to ensure our website functions properly, understand how you interact with it, and improve your overall browsing experience.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Info size={20} />
                  </div>
                  1. What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites function efficiently and provide performance and usability metrics.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Settings size={20} />
                  </div>
                  2. Why We Use Cookies
                </h2>
                <p>We use cookies for the following main purposes:</p>
                <ul className="space-y-3 pl-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Keep technical stability and security of your navigation.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Remember your basic entries in the booking and contact forms.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Store language preferences (English, Spanish, etc.) for your next visit.</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span> Analyze web traffic using analytical tools to improve user experience.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Shield size={20} />
                  </div>
                  3. Types of Cookies We Use
                </h2>

                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-heading font-bold text-secondary text-lg">Essential Cookies (Strictly Necessary)</h3>
                      <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider">Always Active</span>
                    </div>
                    <p className="text-sm">
                      These cookies are required for the website to function properly and cannot be switched off in our systems. They manage language options, session variables, security checks, and support the contact forms.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-heading font-bold text-secondary text-lg">Performance & Analytics Cookies</h3>
                      <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full font-bold uppercase tracking-wider">Optional</span>
                    </div>
                    <p className="text-sm">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  4. Third-Party Technologies
                </h2>
                <p>
                  We may collaborate with analytical partners (like Google Analytics, WhatsApp Business Link) that place cookies or similar tracking identifiers on your browser to facilitate user interaction. We only use reputable partners who follow strict compliance guidelines.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Check size={20} />
                  </div>
                  5. Managing Your Choices
                </h2>
                <p>
                  You can set your browser preferences to accept, block, or delete cookies at any time (visit the settings menu of Chrome, Edge, Safari, or Firefox). Please note that blocking essential cookies may restrict access to forms or interactive components.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <ShieldAlert size={20} />
                  </div>
                  6. Data Protection Compliance
                </h2>
                <p>
                  Any personal data parsed automatically is stored securely in alignment with Ley N° 29733 (Peru's Personal Data Protection Law) and described in detail in our <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div className="pt-8 border-t border-surface-alt flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-secondary">Have questions about Cookies?</div>
                  <p className="text-xs text-dark-alt/50 font-medium">Email us at doctorin.health@gmail.com or via WhatsApp at +51 966 386 803</p>
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
