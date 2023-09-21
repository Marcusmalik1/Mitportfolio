


import facebook from "../assets/facebook_logo.png";
import instagram from "../assets/instagram_logo.png";
import linkedin from "../assets/linkedin.png";

export default function Socialemedier() {
  return (
    <section className="social-container">
      <div className="medier-social">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </section>
  );
}
