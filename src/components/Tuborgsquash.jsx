






import tuborgsquash from "../assets/tuborgrespons.png";


export default function Tuborgrespons() {
    return (
      <section className="elrecycling-container animated">
        <div className="elrecycling-text ">
            <p className="redesign">Fiktiv hjemmeside om et nyt produkt</p>
          <h2 className="El-header">Tuborg Twist</h2>  
          <p>
          I mit eksamensprojekt gav jeg Tuborg Squash en ungdommelig makeover med en alkoholisk twist for at tiltale en ung målgruppe. Jeg udformede hjemmesiden efter omfattende interviews med unge brugere, hvilket resulterede i en frisk og indbydende platform, der passede perfekt til Tuborg Squash Twist's innovative karakter og tiltrak unge forbrugere.
          </p>
          <div className="website-btn-container">
          <a href="https://malikmarcus.dk/Tuborgsquashtwist/" target="_blank" rel="noopener noreferrer" className="website-btn">Besøg hjemmesiden!</a>
          </div>
        </div>
        <div className="elrecycling-image">
          <img src={tuborgsquash} alt="Billede af tuborgsquash" />
        </div>
        
      </section>
    );
  }


