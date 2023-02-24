import "./FollowingEvent.scss";
import axios from "axios";
import { useState } from "react";

const FollowingEvent = ({ event }) => {
  const [events, setEvents] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/profile/${id}`, event);
      setEvents(events.filter((ev) => ev.id !== event.id));
      alert("You are no longer following this event");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article key={event.id} className="card">
      <img className="card__image" src={event.image} alt="show poster" />
      <h2 className="card__title">{event.name}</h2>
      <span className="card__city">
        {event.city}, {event.state}
      </span>
      <span className="card__venue">{event.venue}</span>
      <span className="card__date">{event.date}</span>
      <div className="card__buttons">
        <a href={event.url}>
          <button className="card__button">get tickets</button>
        </a>
        <button type="submit" className="card__button" onClick={handleDelete}>
          Unfollow
        </button>
      </div>
    </article>
  );
};

export default FollowingEvent;
