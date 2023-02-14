import "./Event.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await axios.post(`http://localhost:8080/profile`, event);
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
          <button className="card__tickets">get tickets</button>
        </a>
        <button type="submit" className="card__add" onClick={handleClick}>
          Add to favorites
        </button>
      </div>
    </article>
  );
};

export default Event;
