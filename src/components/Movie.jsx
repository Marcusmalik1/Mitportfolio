import movie from "../assets/mobilemoviemagnet.png";




export default function Movie() {
    return (
      <section className="elrecycling-container animated">
        <div className="elrecycling-text">
            <p className="redesign">Innovativ Webapp</p>
          <h2 className="El-header">Movie Magnet</h2>  
          <p>
            Det nyeste projekt jeg har været inkluderet i er en webapp, hvor vi skulle lave en app til mobiledevice og derefter fetche en api. Her har vi brugt TMDB som vores API, hvor idéen er at brugeren hurtigt og nemt skal finde en film, både med sig selv og et andet individ. Derudover har vi tilpasset webappen så man kan registrere en profil ved hjælp af firebase og firestore, hvor vi kan hente dataer ned fra den enkelte bruger, og blandt andet bruge det til et personligt filmbibliotek.
          </p>
          <div className="website-btn-container">
          <a href="https://moviemagnet-esbenlund.vercel.app/" target="_blank" rel="noopener noreferrer" className="website-btn">Besøg hjemmesiden!</a>
          </div>
        </div>
        <div className="elrecycling-image">
          <img className="movie-magnet" src={movie} alt="Billede af Marcus" />
        </div>
        
      </section>
    );
  }

