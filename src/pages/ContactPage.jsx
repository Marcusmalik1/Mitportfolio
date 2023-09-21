



import Socialemedier from '../components/Socialemedier';
import Footer from '../components/Footersite';
import Marcusm from "../assets/Marcusm.png";

export default function ContactPage() {
    return (
        <section className="animated">
            
            <h1>Kontakt <span style={{ color: '#B87333' }}>Mig</span></h1>
            <h3 className="text-me">Skriv mere end gerne til mig!</h3>

            <img className="Marcus-malik" src={Marcusm} alt="Marcus" />

            <p className="info-text">Send en mail til:</p>
            <p className="mail-text">Marcusmalik435@gmail.com</p>
            <br />
            <p className="info-text">Eller fang mig på de sociale medier:</p>

            <div>
                <Socialemedier />
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />
            <div>
                <Footer />
            </div>
        </section>

    )
}
