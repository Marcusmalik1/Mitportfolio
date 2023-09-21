







import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center text-style my-world animated">Velkommen til min verden!</h1>

        <p className="text-center text-style text-align welcome-text animated">
          Jeg er en 25-årig multimediedesign-studerende med en dyb passion for frontend-udvikling og et stærkt fokus på fremragende design og enestående brugeroplevelse. Mit hjerte banker for at skabe stilrene og funktionelle digitale løsninger.
        </p>

        <p className="text-center text-style text-align welcome-text animated">
          Tag et øjeblik og udforsk min verden.<br /> <br /> <br />
        </p>

        <div className="button-row animated">
          {/* Tilføj en knap til "Om Mig" siden */}
          <Link to="/about" className="button-link button-one">
            Mød mig
          </Link>
          {/* Tilføj en knap til "Udforsk Mine Projekter" siden */}
          <Link to="/portfolio" className="button-link button-two">
            Mine projekter
          </Link>
        </div>
      </div>
    </section>
  );
}





