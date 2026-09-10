import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO, SERVICE_OPTIONS } from "../data/contact.data";

export const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Reset scroll position to top whenever ContactPage mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    // Get variables from .env.local
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug logs to verify environment variables are loading properly
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey, 
      })
      .then(() => {
        setLoading(false);
        setStatus({
          type: "success",
          message:
            "Message sent successfully! We will get back to you shortly.",
        });
        formRef.current?.reset();
      })
      .catch((error) => {
        setLoading(false);
        setStatus({
          type: "error",
          message:
            "Failed to send message. Please try again or email us directly.",
        });
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-8 bg-slate-900 min-h-screen text-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info & Details */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
              Bring the idea. <br />
              <span className="text-amber-500">We'll build it.</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base leading-relaxed">
              We read every enquiry personally. Reaching out costs you nothing
              yet allows us to review budget limits, site access, and project
              timelines early.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                Email address
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-semibold text-slate-200 hover:text-amber-500 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                Phone number
              </span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="font-semibold text-slate-200 hover:text-amber-500 transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                Location
              </span>
              <span className="font-semibold text-slate-200 block">
                {CONTACT_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  First name
                </label>
                <input
                  name="first_name"
                  required
                  type="text"
                  placeholder="John"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg p-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Last name
                </label>
                <input
                  name="last_name"
                  required
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg p-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Email address
                </label>
                <input
                  name="user_email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg p-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Phone number
                </label>
                <input
                  name="user_phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg p-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">
                Project type
              </label>
              <select
                name="service_type"
                className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg p-3 text-sm text-white outline-none transition-colors"
              >
                {SERVICE_OPTIONS.map((option, idx) => (
                  <option
                    key={idx}
                    value={option}
                    className="bg-slate-900 text-white"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">
                Project Details
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project, timeline, location, or goals..."
                className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg p-3 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold py-3.5 px-6 rounded-lg transition-all flex justify-center items-center cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-slate-950"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Get a response →"
              )}
            </button>

            {status && (
              <div
                className={`p-3 rounded-lg text-xs font-semibold text-center ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
