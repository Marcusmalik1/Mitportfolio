

import code from "../assets/javareact.jpg";
import marcus from "../assets/modmig.jpg";
import "../BeatIcon.css";
import "../SlideIn.css";
import TimelineComponent from '../components/TimelineComponent';
import Footer from '../components/Footersite';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  const newSectionRef = useRef(null);
  

  const [animated, setAnimated] = useState(false);
  

  const isSectionVisible = (sectionRef) => {
    if (!sectionRef.current) return false;

    const rect = sectionRef.current.getBoundingClientRect();
    return rect.top < window.innerHeight;
  };

  const handleScroll = () => {
    if (!animated && isSectionVisible(newSectionRef)) {
      setAnimated(true);
    }
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-page-container">
      <div className="about-page-image">
        <img src={marcus} alt="Billede af Marcus" className="profile-picture" />
      </div>
      <div className="about-page-text animated">
        <h1 className="about-me-head">En Frontend-<span style={{ color: '#B87333' }}>Entusiast</span></h1>
        <p className="about-me-text">Hej! Jeg hedder Marcus, og jeg er en kreativ, idérig og glad person i det indre Århus. Jeg er 25 år gammel og har min uddannelsesbaggrund fra Randers, hvor jeg har læst HHX på Tradium. Efterfølgende flyttede jeg til Aarhus, hvor jeg nu studerer Multimediedesign på Erhvervsakademiet Aarhus. Jeg har en kæmpe passion for kodning og kreativt design.</p>
        <p className="about-me-text">Som person beskriver jeg mig selv som ambitiøs og detaljeorienteret. Når jeg får en idé, hviler jeg ikke, før jeg har ført den ud i livet. Selvom det kan indebære lange aftener og kreative udfordringer, elsker jeg processen og de unikke løsninger, det bringer med sig.</p>
        <p className="about-me-text">Jeg glæder mig utroligt meget til at udforske nye horisonter og dele mine kreative projekter. Du er hjerteligt velkommen til at kontakte mig og blive en del af en ny rejse.</p>
      </div>
      
      <div className="scroll-down-indicator">
        <span></span>
        <div className="arrow-down"></div>
      </div>

      <div className={`new-section ${animated ? "slide-in" : ""}`} ref={newSectionRef}>
        
        <h2>Mine kompetencer</h2>
        <div className="skills-and-code">
          <ul>
            <div className="frontend">
              <FontAwesomeIcon icon={faCode} className="beat-icon" beat style={{ color: "#ffffff", fontSize: "1.8rem", padding: "2%" }} />
              <li className="skill-item skill-list">Frontend-udvikling: Jeg skaber flotte og interaktive webgrænseflader med HTML, CSS, JavaScript og React.</li>
            </div>
            <div className="frontend">
              <FontAwesomeIcon icon={faPaintBrush} className="beat-icon" beat style={{ color: "#ffffff", fontSize: "1.8rem", padding: "2%" }} />
              <li className="skill-item skill-list">Grafisk design: Jeg har et godt øje til design af visuelle elementer, der formidler budskaber og idéer</li>
            </div>

            <div className="frontend">
              <FontAwesomeIcon icon={faUser} className="beat-icon" beat style={{ color: "#ffffff", fontSize: "1.9rem", padding: "2%" }} />
              <li className="skill-item skill-list">Brugeroplevelse (UX) design: Jeg har fokus på at skabe tilfredsstillende digitale produkter baseret på brugernes behov og adfærd</li>
            </div>

            <div className="frontend">
              <FontAwesomeIcon icon={faMobileAlt} className="beat-icon" beat style={{ color: "#ffffff", fontSize: "1.9rem", padding: "2%" }} />
              <li className="skill-item skill-list">Responsivt webdesign - Jeg skaber hjemmesider, der tilpasser sig forskellige enheder og skærmstørrelser for en optimal brugeroplevelse.</li>
            </div>
            {}
          </ul>
          <img src={code} alt="Billede af kode" className="code-picture" />
        </div>
      </div>

    <div>
    <h2>Min rejse <span style={{ color: '#B87333' }}>hidtil</span></h2>
    <p className="travel-text">Min uddannelsesrejse har formet mig gennem forskellige oplevelser. Efter Handelsskolen tog jeg sabbatår for selvudvikling. Jeg prøvede markedsføringsøkonom-uddannelsen, men indså det ikke var min retning. I 2022 fandt jeg min passion som Multimediedesigner. Det har været en rejse, som har udviklet mig på rette spor, og nu ser jeg frem til at bringe min lidenskab for design og kodning ind i fremtiden.</p>
    </div>
    <div>
    <TimelineComponent />
    </div>
    
    <div className="cta-items">
  <p>Hvis du er på udkig efter en dygtig og dedikeret multimediedesigner, vil jeg gerne høre fra dig!</p>
  <div className="cta-container">
    <a href="/contact">
      <button className="cta-knap">Kontakt Mig!</button>
    </a>
  </div>
</div>



</div>
 
 

  );
}

