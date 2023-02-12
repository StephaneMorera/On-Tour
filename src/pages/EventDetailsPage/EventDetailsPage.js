import "./EventDetailsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Event from "../../components/Event/Event";
import { Link } from "react-router-dom";

const EventDetailsPage = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
      const getEvent = async () => {
        try {
          const { data } = await axios.get("http://localhost:8080/events");
          console.log(data);
          setCard(data)
        } catch (error) {
          console.log(error);
        }
      };
      getEvent();
    }, []);

    let events = card.map((event) => {
        return (
            <>
            <Event key={event.id} event={event} />
            </>
        )
    })


    return (
        <main events={events} className="events">
            <form className="events__search">
                <h1 className="events__search-header">Search upcoming events for any location</h1>
                <label className="events__label">See who's about to take the stage</label>
                <input className="events__input" type="text" placeholder="Search events"  />
            </form>
            <section key={events.id}className="events__container">{events}</section>
        </main>
    )
};

export default EventDetailsPage;
