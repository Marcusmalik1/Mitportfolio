

import React from 'react';

function TimelineEventModal({ event, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.description}</p>
        <button onClick={closeModal}>Luk</button>
      </div>
    </div>
  );
}

export default TimelineEventModal;
