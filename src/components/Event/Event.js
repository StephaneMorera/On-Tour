import "./Event.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Event = ({ event }) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      await axios.post(`http://localhost:8080/profile`, event);
      setEvents(event);
      alert("Enjoy the show!!");
      navigate("/profile");
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
          <button className="card__button">Get Tickets</button>
        </a>
        <button type="submit" className="card__button" onClick={handlePost}>
          Follow
        </button>
      </div>
    </article>
  );
};

export default Event;
