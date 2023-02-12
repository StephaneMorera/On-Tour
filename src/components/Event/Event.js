import "./Event.scss";

const Event = ({ event }) => {
  return (
    <article key={event.id} className="card">
      <img className="card__image" src={event.image} alt="show poster" />
      <h2 className="card__title">{event.name}</h2>
      <span className="card__city">
        {event.city}, {event.state}
      </span>
      <span className="card__venue">{event.venue}</span>
      <span className="card__date">{event.date}</span>
    </article>
  );
};

export default Event;
