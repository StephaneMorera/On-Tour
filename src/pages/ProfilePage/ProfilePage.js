import "./ProfilePage.scss";
import avatar from "../../assets/images/avatar.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import Event from "../../components/Event/Event";

const ProfilePage = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        const getEvent = async () => {
          try {
            const { data } = await axios.get("http://localhost:8080/profile");
            setCard(data);
          } catch (error) {
            console.log(error);
          }
        };
        getEvent();
    }, []);


    let events = card.map((event) => {
        return (
            <>
          <Event className="profile__card" key={card.id} event={event} />
        </>
        )
    })


    return (
        <main className="profile">
            <section className="profile__container">
                <article className="profile__info">
                    <div className="profile__user-img">
                        <img src={avatar} alt="user image" className="profile__avatar" />
                    </div>
                    <div className="profile__user-info">
                        <h1 className="profile__name">Stephane Morera</h1>
                        <span className="profile__location">Miami, FL</span>
                        <p className="profile__description">Music is my passion and my girlfriend and I love to travel all over for concerts and festivals. We enjoy music of all kind and dont like to miss our favorite artists. We love meeting new people and making new friends that we can enjoy more shows with.</p>
                    </div>
                </article>
                <article className="profile__friends-container">
                    <div className="profile__friends">
                        <div className="profile__friends-avatar"></div>
                        <span className="profile__friends-name">Jane21</span>
                    </div>
                    <div className="profile__friends">
                        <div className="profile__friends-avatar"></div>
                        <span className="profile__friends-name">Rob123</span>
                    </div>
                    <div className="profile__friends">
                        <div className="profile__friends-avatar"></div>
                        <span className="profile__friends-name">Blaze15</span>
                    </div>
                    <div className="profile__friends">
                        <div className="profile__friends-avatar"></div>
                        <span className="profile__friends-name">Amanda67</span>
                    </div>
                </article>
            </section>
            <section className="profile__events-container">
                <div className="profile__upcoming-container">
                <h1 className="profile__upcoming">My Upcoming Events</h1>
                </div>
                <div className="profile__events">
                {events}
                </div>
            </section>
        </main>
    )
};

export default ProfilePage;
