
import React, { useState } from 'react';
import '../App.css';
import TimelineEventModal from '../components/TimelineEventModal';

function TimelineEvent({ event }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="horizontal-timeline-event">
      <div className="event-date">{event.date}</div>
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-intro">{event.intro}</p>
        <div className="read-container">
        <button className="read-more-button" onClick={openModal}>Læs mere</button>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
              {/* Billedet inkluderet under beskrivelsen */}
              {event.image && <img
                  src={event.image}
                  alt="Beskrivende billede"
                  className={event.imageClass} // Tilføj den ønskede klasse til billedet
                />}
              <button onClick={closeModal}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HorizontalTimeline() {
  const timelineData = [
    {
      date: "2023-2022",
      title: "Multimediedesigner",
      intro: "Begyndte som Multimediedesigner.",
      description: "Jeg startede på Multimediedesigner-uddannelsen med stor nysgerrighed og en stærk passion for at udforske det kreative og teknologiske. Gennem min tid på udannelsen har jeg dykket dybt ned i verdenen af design og kodning, og jeg har opdaget, hvor utroligt spændende og givende dette felt er.",
    },
    {
      date: "2021",
      title: "Markedsføringsøkonom",
      intro: "Begyndte som markedsføringsøkonom.",
      description: "I 2021 begyndte jeg min uddannelse som markedsføringsøkonom i Randers med store forventninger og ambitioner om at forstå forretningsverdenen. Desværre indså jeg ret hurtigt, at dette ikke var den rette vej for mig. I stedet for at insistere på at følge en sti, der ikke rigtig passede med mine indre passioner og ambitioner, træffede jeg beslutningen om at tage en anden retning."
    },
    {
      date: "2021-2018",
      title: "Sabbatår",
      intro: "Fire års sabbatår med arbejde og ferie",
      description: "I en periode på fire år besluttede jeg at tage sabbatår for at udforske og fordybe mig selv i personlig udvikling. Disse år blev en periode med selvopdagelse, hvor jeg dykkede dybere ned i mine interesser, og målet var at forstå mig selv bedre. Jeg valgte at arbejde i løbet af denne tid og samtidig opleve et par rejser til udlandet, og det gav mig muligheden for at udfordre mine egne grænser og reflektere over mine livsmål."
    },
    {
      date: "2018",
      title: "Hhx Tradium",
      intro: "Afslutning på HHX i Randers.",
      description: "Efter jeg havde afsluttet min HHX-uddannelse på Tradium i Randers i 2018, stod jeg ved et skillevejspunkt i mit liv. I stedet for at fortsætte direkte på en videregående uddannelse, besluttede jeg mig for at sabbatår. Dette var en bevidst beslutning, der gav mig mulighed for at udforske verden og mig selv på en dybere måde."
    },
  ];

  return (
    <div>
      <div className="horizontal-timeline">
        {timelineData.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default HorizontalTimeline;


