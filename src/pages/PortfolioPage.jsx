



import Elrecyclingrespons from '../components/Elrecycling';
import Tuborgrespons from '../components/Tuborgsquash';
import Footer from '../components/Footersite';

export default function PortfolioPage() {
    return (
        <section className="animated">
            
            <h1>Port<span style={{ color: '#B87333' }}>folio</span></h1>
            <p className="port-text">I løbet af min tid som multimediedesigner på Erhvervsakademiet Aarhus har jeg haft muligheden for at udforske, designe og implementere hjemmesider ved hjælp af HTML5, CSS3 og JavaScript. Jeg har engageret mig i flere forskellige projekter, fra fiktive kreative udfordringer til virkelige opgaver for autentiske virksomheder.</p>
            <div className="line"></div> {/* Tilføjer en linje */}
             {}
            <div>
                <Elrecyclingrespons />
            </div>

            <div>
                <Tuborgrespons />
            </div>

             
            <div>
                <Footer />
            </div>

        </section>

    )
}



