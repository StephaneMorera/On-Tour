import "./Event.scss";

const Event = ({ event }) => {
  return (
    <article className="card">
      <img className="card__image" src={event.image} alt="show poster" />
      <h2 className="card__title">{event.name}</h2>
      <span className="card__city">{event.city}</span>
      <span className="card__date">{event.date}</span>
    </article>
  );
};

export default Event;
