"use client";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Vérification du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
      isValid = false;
    }

    // Vérification de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
      isValid = false;
    }

    // Vérification du message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCaptchaChange = (token: string | null) => {
    setIsCaptchaValid(!!token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      setStatus({
        message: "Veuillez valider le captcha",
        type: "error",
      });
      return;
    }

    if (!validateForm()) {
      setStatus({
        message: "Veuillez corriger les erreurs dans le formulaire",
        type: "error",
      });
      return;
    }

    setStatus({ message: "Envoi en cours...", type: "info" });

    try {
      // Réinitialiser le captcha avant l'envoi
      recaptchaRef.current?.reset();
      setIsCaptchaValid(false);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          message: formData.message,
          email: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        message: "Message envoyé avec succès !",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Log détaillé de l'erreur
      console.error("EmailJS Error:", error);

      setStatus({
        message: `Erreur lors de l'envoi: ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`,
        type: "error",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="font-poppins bg-gradient-to-b from-[#fefaf6] via-[#ffe4ec] to-[#f7faff] text-gray-700 min-h-screen">
      <Header />

      <main className="py-12 px-6 max-w-6xl mx-auto">
        {/* Section d'en-tête */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Contactez-moi
          </h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            N&apos;hésitez pas à me contacter pour toute question ou demande
            personnalisée. Je vous répondrai dans les plus brefs délais !
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <section className="card-modern p-6 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#6B7280] mb-1"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border ${
                    errors.name ? "border-red-500" : "border-[#FFB5E8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#FFB5E8]`}
                  placeholder="Votre nom"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#6B7280] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border ${
                    errors.email ? "border-red-500" : "border-[#FFB5E8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#FFB5E8]`}
                  placeholder="votre@email.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#6B7280] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 border ${
                    errors.message ? "border-red-500" : "border-[#FFB5E8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#FFB5E8]`}
                  placeholder="Votre message"
                  required
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-center mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                  onChange={handleCaptchaChange}
                  theme="light"
                  className="transform scale-90 sm:scale-100"
                />
              </div>

              {status.message && (
                <div
                  className={`text-center p-3 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : status.type === "error"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={!isCaptchaValid}
                className={`w-full px-6 py-3 bg-gradient-to-r from-[#FFB5E8] to-[#B5E8FF] text-white rounded-lg transition-all ${
                  isCaptchaValid
                    ? 'hover:shadow-lg opacity-100'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                Envoyer
              </button>
            </form>
          </section>

          {/* Informations de contact */}
          <section className="space-y-8">
            <div className="card-modern p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gradient mb-4">
                Informations de contact
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <a
                    href="mailto:Expresso.crea@gmail.com"
                    className="text-[#6B7280] hover:text-[#FF6F91] transition-colors"
                  >
                    expressolene.crea@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-modern p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gradient mb-4">
                Réseaux sociaux
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/expresso_crea"
                  className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                    src="/images/logos/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[#6B7280]">Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@expressolene"
                  className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                    src="/images/logos/tiktok.png"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[#6B7280]">TikTok</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
