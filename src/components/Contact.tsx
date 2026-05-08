import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [popup, setPopup] = useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDATION
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setPopup({
        type: "error",
        title: "Missing Information",
        message: "Please fill all fields before sending.",
      });

      setTimeout(() => {
        setPopup(null);
      }, 4000);

      return;
    }

    try {
      await emailjs.send(
        "service_noxcnae",
        "template_pswgm4h",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "hZSy5kHlC2zUc3Oqx"
      );

      setPopup({
        type: "success",
        title: "Message Sent Successfully",
        message: "Thanks for reaching out. I’ll reply soon.",
      });

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setPopup({
        type: "error",
        title: "Failed to Send",
        message: "Something went wrong. Please try again.",
      });
    }

    setTimeout(() => {
      setPopup(null);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
            Contact
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas,
            internships, or opportunities to be part of your vision.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* CONTACT INFO */}
          <div className="space-y-5">

            {/* EMAIL */}
            <a
              href="mailto:asif.official.sk@gmail.com"
              className="
                group
                flex items-center gap-5
                p-5
                rounded-3xl
                bg-white
                border border-zinc-200
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200
                cursor-pointer
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-zinc-100
                  flex items-center justify-center
                  text-blue-600
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-white
                  group-hover:shadow-md
                "
              >
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <p className="text-zinc-800 font-semibold break-all">
                  asif.official.sk@gmail.com
                </p>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+8801703632066"
              className="
                group
                flex items-center gap-5
                p-5
                rounded-3xl
                bg-white
                border border-zinc-200
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200
                cursor-pointer
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-zinc-100
                  flex items-center justify-center
                  text-blue-600
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-white
                  group-hover:shadow-md
                "
              >
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Phone
                </p>

                <p className="text-zinc-800 font-semibold">
                  01703632066
                </p>
              </div>
            </a>

            {/* ADDRESS */}
            <a
              href="https://maps.app.goo.gl/RRoaTpzeMxDrqygo6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center gap-5
                p-5
                rounded-3xl
                bg-white
                border border-zinc-200
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200
                cursor-pointer
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-zinc-100
                  flex items-center justify-center
                  text-blue-600
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-white
                  group-hover:shadow-md
                "
              >
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Address
                </p>

                <p className="text-zinc-800 font-semibold leading-relaxed">
                  7/4B Ragu Nath Das Lane,
                  <br />
                  Kaltabazar, Dhaka-1100
                </p>
              </div>
            </a>
          </div>

          {/* FORM */}
          <div
            className="
              bg-white
              border border-zinc-200
              rounded-[32px]
              p-8 md:p-10
              shadow-xl
            "
          >
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm text-zinc-600 mb-3 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-white
                    border border-zinc-200
                    rounded-2xl
                    px-5 py-4
                    text-zinc-900
                    placeholder:text-zinc-400
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    transition-all
                  "
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-600 mb-3 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-white
                    border border-zinc-200
                    rounded-2xl
                    px-5 py-4
                    text-zinc-900
                    placeholder:text-zinc-400
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    transition-all
                  "
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-600 mb-3 font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-white
                    border border-zinc-200
                    rounded-2xl
                    px-5 py-4
                    text-zinc-900
                    placeholder:text-zinc-400
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    transition-all
                    resize-none
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  group
                  w-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  text-white
                  font-semibold
                  py-4
                  rounded-2xl
                  transition-all duration-300
                  flex items-center justify-center gap-3
                  shadow-lg
                  hover:shadow-blue-200
                "
              >
                Send Message

                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {popup && (
        <div
          className={`
            fixed
            top-5
            left-1/2
            -translate-x-1/2
            z-50

            w-[calc(100%-32px)]
            max-w-md

            overflow-hidden

            border
            shadow-2xl
            rounded-2xl

            px-4 sm:px-6
            py-4

            flex items-start sm:items-center
            gap-4

            animate-[fadeIn_.3s_ease]

            ${
              popup.type === "success"
                ? "bg-white border-zinc-200"
                : "bg-red-50 border-red-200"
            }
          `}
        >
          <div
            className={
              popup.type === "success"
                ? "text-green-500 shrink-0 mt-0.5 sm:mt-0"
                : "text-red-500 shrink-0 mt-0.5 sm:mt-0"
            }
          >
            {popup.type === "success" ? (
              <CheckCircle2 size={26} />
            ) : (
              <AlertCircle size={26} />
            )}
          </div>

          <div className="min-w-0">
            <h4
              className={
                popup.type === "success"
                  ? "font-semibold text-zinc-900 text-sm sm:text-base"
                  : "font-semibold text-red-700 text-sm sm:text-base"
              }
            >
              {popup.title}
            </h4>

            <p
              className={
                popup.type === "success"
                  ? "text-xs sm:text-sm text-zinc-500 leading-relaxed mt-1"
                  : "text-xs sm:text-sm text-red-500 leading-relaxed mt-1"
              }
            >
              {popup.message}
            </p>
          </div>

          {/* PROGRESS BAR */}
          <div
            className={`
              absolute
              bottom-0
              left-0
              h-1
              animate-[popupTimer_4s_linear_forwards]

              ${
                popup.type === "success"
                  ? "bg-green-500"
                  : "bg-red-500"
              }
            `}
          />
        </div>
      )}
    </section>
  );
};

export default Contact;