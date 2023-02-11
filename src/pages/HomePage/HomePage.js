import "./HomePage.scss";
import video from "../../video/on-tour.mp4"

const HomePage = () => {
    return (
        <main className="home">
            <section className="home__banner">
                <article className="home__text-wrapper">
                    <h1 className="home__header">The Next Show's About To Start!</h1>
                    <p className="home__description">Your favorite musician is on tour and we dont want you to miss the show! Search for any and all upcoming shows by location to start planning your next adventure.</p>
                </article>
            </section>
            <div className="home__video-container">
                <video className="home__video" src={video} type="video/mp4" autoPlay muted width="70%" height="30%"></video>
            </div>
        </main>
    )
};

export default HomePage;
