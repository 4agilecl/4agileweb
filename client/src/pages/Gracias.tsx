import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function Gracias() {
  useSEO({
    title: "Solicitud Recibida | 4AGILE",
    description:
      "Gracias por contactarnos. Tu solicitud de outsourcing o hunting de talentos ha sido recibida.",
    canonicalPath: "/gracias",
    noindex: true,
  });

  return (
    <main className="thanks-page">
      <section className="thanks-card">
        <CheckCircle2 size={46} />
        <h1>Gracias, recibimos tu solicitud.</h1>
        <p>
          El equipo de 4AGILE revisará tu necesidad de outsourcing de talentos,
          hunting de talentos o staffing especializado para coordinar una
          conversación inicial.
        </p>
        <a className="button-primary" href="/">
          <ArrowLeft size={18} /> Volver al inicio
        </a>
      </section>
    </main>
  );
}
