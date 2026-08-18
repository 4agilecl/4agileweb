import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock3,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import Header from "../components/Header";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";

export default function Contacto() {
  useSEO({
    title: "Contacto | Hablemos de tu Necesidad de Talento - 4AGILE",
    description:
      "Contáctanos hoy en 4AGILE para incorporar o encontrar el talento que tu empresa necesita. Teléfono: +56 9 5787 6174, Email: contacto@4agile.cl.",
    canonicalPath: "/contacto",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        console.error("Error enviando formulario:", response.statusText);
        alert(
          "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Hubo un problema de conexión al enviar el formulario. Por favor, intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <Header />

      <main>
        <section
          className="contact container"
          style={{ padding: "140px 0 80px" }}
        >
          <div
            className="contact-card"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Lado izquierdo: Información y garantías */}
            <div>
              <div className="section-kicker">Conversemos</div>
              <h1
                style={{
                  fontSize: "2.8rem",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Cuéntanos qué talento necesitas incorporar o encontrar
              </h1>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "1.1rem",
                  marginBottom: "32px",
                  lineHeight: 1.6,
                }}
              >
                Completa el formulario y dinos si buscas outsourcing de
                talentos, hunting de talentos o ambos. Revisaremos tu necesidad
                y coordinaremos una conversación inicial en menos de 24 horas
                hábiles.
              </p>

              <div
                className="contact-methods"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "40px",
                }}
              >
                <a
                  href="tel:+56957876174"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--blue-700)",
                  }}
                >
                  <Phone size={22} style={{ color: "var(--blue)" }} /> +56 9
                  5787 6174
                </a>
                <a
                  href="mailto:contacto@4agile.cl"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--blue-700)",
                  }}
                >
                  <Mail size={22} style={{ color: "var(--blue)" }} />{" "}
                  contacto@4agile.cl
                </a>
                <a
                  href="https://www.4agile.cl"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--blue-700)",
                  }}
                >
                  <Globe size={22} style={{ color: "var(--blue)" }} />{" "}
                  www.4agile.cl
                </a>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--muted)",
                  }}
                >
                  <Clock3 size={22} style={{ color: "var(--blue)" }} /> Lunes a
                  Viernes de 09:00 a 18:00 hrs
                </div>
              </div>

              {/* Caja de Compromiso */}
              <div
                style={{
                  background: "rgba(40, 75, 155, 0.05)",
                  padding: "24px",
                  borderRadius: "18px",
                  border: "1px dashed var(--blue)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                    color: "var(--blue-700)",
                  }}
                >
                  Nuestro Compromiso de Plazo
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  Entendemos que los tiempos en tecnología y gestión son
                  críticos. Nos comprometemos a responder cada consulta y
                  agendar una primera llamada técnica en un plazo máximo de 1
                  día hábil.
                </p>
              </div>
            </div>

            {/* Lado derecho: Formulario */}
            <div>
              {isSuccess ? (
                <div
                  className="lead-form"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "60px 40px",
                    gap: "16px",
                    background: "#fff",
                    borderRadius: "24px",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
                    minHeight: "450px",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "var(--blue)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <BadgeCheck size={36} />
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "24px",
                      color: "var(--blue-700)",
                      fontWeight: 800,
                    }}
                  >
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      fontSize: "15px",
                      lineHeight: 1.5,
                    }}
                  >
                    Muchas gracias por contactarte con 4AGILE. Un consultor
                    técnico de nuestro equipo revisará tu requerimiento y te
                    contactará a la brevedad para coordinar una reunión.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "16px" }}
                    onClick={() => setIsSuccess(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  className="lead-form"
                  name="contacto-4agile"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  style={{
                    background: "#fff",
                    padding: "40px",
                    borderRadius: "24px",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contacto-4agile"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="Propsecto del sitio web 4agile.cl"
                  />
                  <p className="hidden-field" style={{ display: "none" }}>
                    <label>
                      No completar: <input name="bot-field" />
                    </label>
                  </p>
                  <label style={{ display: "block", marginBottom: "16px" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      Nombre
                    </span>
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid var(--line)",
                      }}
                    />
                  </label>
                  <label style={{ display: "block", marginBottom: "16px" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      Empresa
                    </span>
                    <input
                      name="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid var(--line)",
                      }}
                    />
                  </label>
                  <label style={{ display: "block", marginBottom: "16px" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      Teléfono
                    </span>
                    <input
                      name="telefono"
                      type="tel"
                      placeholder="Tu teléfono (opcional)"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid var(--line)",
                      }}
                    />
                  </label>
                  <label style={{ display: "block", marginBottom: "16px" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      Correo
                    </span>
                    <input
                      name="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      required
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid var(--line)",
                      }}
                    />
                  </label>
                  <label style={{ display: "block", marginBottom: "16px" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      Servicio de interés
                    </span>
                    <select
                      name="servicio"
                      defaultValue=""
                      required
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid var(--line)",
                        background: "#fff",
                      }}
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Outsourcing de talentos">
                        Outsourcing de talentos
                      </option>
                      <option value="Hunting de talentos">
                        Hunting de talentos
                      </option>
                      <option value="Outsourcing y hunting">
                        Outsourcing y hunting
                      </option>
                      <option value="Entrenamiento y talleres de formación">
                        Entrenamiento y talleres de formación
                      </option>
                      <option value="otros">otros</option>
                    </select>
                  </label>
                  <label style={{ display: "block", marginBottom: "24px" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      ¿Qué necesitas?
                    </span>
                    <textarea
                      name="mensaje"
                      rows={4}
                      placeholder="Cuéntanos qué perfil, capacidad o desafío necesitas resolver"
                      required
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid var(--line)",
                        resize: "vertical",
                      }}
                    />
                  </label>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}{" "}
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <p>4AGILE · Outsourcing de talentos y hunting especializado.</p>
        </div>
      </footer>
    </div>
  );
}
