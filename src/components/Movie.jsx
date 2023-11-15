import movie from "../assets/mobilemoviemagnet.png";




export default function Movie() {
    return (
      <section className="elrecycling-container animated">
        <div className="elrecycling-text">
            <p className="redesign">Innovativ Webapp</p>
          <h2 className="El-header">Movie Magnet</h2>  
          <p>
            Som en del af vores eksamensprojekt på studiet valgte vi at udføre et omfattende redesign for virksomheden Elrycycling. Gennem grundige interviews med medarbejdere, ledelsen og brugerne opnåede vi værdifuld indsigt, der gav os mulighed for at skabe et brugervenligt og intuitivt websted.
          </p>
          <div className="website-btn-container">
          <a href="https://moviemagnet-esbenlund.vercel.app/" target="_blank" rel="noopener noreferrer" className="website-btn">Besøg hjemmesiden!</a>
          </div>
        </div>
        <div className="elrecycling-image">
          <img src={movie} alt="Billede af Marcus" />
        </div>
        
      </section>
    );
  }

