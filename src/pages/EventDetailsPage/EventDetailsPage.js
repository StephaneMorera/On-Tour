import "./EventDetailsPage.scss";

const EventDetailsPage = () => {
    return (
        <main className="events">
            <form className="events__search">
                <h1 className="events__search-header">Search upcoming events for any location</h1>
                <label className="events__label">See who's about to take the stage</label>
                <input className="events__input" type="text" placeholder="Search events"  />
            </form>
        </main>
    )
};

export default EventDetailsPage;
