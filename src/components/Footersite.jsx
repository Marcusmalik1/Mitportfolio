





import facebook from "../assets/facebook_logo.png";
import instagram from "../assets/instagram_logo.png";
import mmlogo from "../assets/MMlogo.png";
import linkedin from "../assets/linkedin.png";

export default function Footersite() {
  return (
    <section className="footer-container">
      <div className="footer-social">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>

      <div className="footer-logo">
        <img src={mmlogo} alt="Marcus" />
      </div>

      <div className="footer-email">
        <p>Marcusmalik435@gmail.com</p>
      </div>




      
    </section>
  );
}
