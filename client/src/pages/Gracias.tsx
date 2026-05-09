import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Gracias() {
  return (
    <main className="thanks-page">
      <section className="thanks-card">
        <CheckCircle2 size={46} />
        <h1>Gracias, recibimos tu solicitud.</h1>
        <p>El equipo de 4AGILE revisará tu necesidad de outsourcing de talentos, hunting de talentos o staffing especializado para coordinar una conversación inicial.</p>
        <a className="button-primary" href="/"><ArrowLeft size={18} /> Volver al inicio</a>
      </section>
    </main>
  );
}
