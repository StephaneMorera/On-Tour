import "./EventDetailsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Event from "../../components/Event/Event";

const EventDetailsPage = () => {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getEvent = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/events");
        setCard(data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, []);

  let events = card
    .filter((value) => {
      if (search === "") {
        return value;
      } else if (value.city.toLowerCase().includes(search.toLowerCase())) {
        return value;
      }
    })
    .map((event) => {
      return (
        <>
          <Event key={event.id} event={event} />
        </>
      );
    });

  return (
    <main events={events} className="events">
      <form className="events__search">
        <h1 className="events__search-header">
          Search upcoming events for any location
        </h1>
        <label className="events__label">
          See who's about to take the stage
        </label>
        <input
          className="events__input"
          type="text"
          placeholder="Search events"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <section className="events__container">{events}</section>
    </main>
  );
};

export default EventDetailsPage;
