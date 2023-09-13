import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setAllActors(data);
    };

    fetchData();
  }, []);

  const handleSelectActor = (actor) => {
    setSelectedActors([...selectedActors, actor]);
  };

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => {
            return (
              <>
                <div
                  key={actor.id}
                  className="card"
                >
                  <div className="card-img">
                    <img
                      src={actor.image}
                      alt=""
                      className="photo"
                    />
                  </div>

                  <h2>{actor.name}</h2>

                  <p>
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus, quos!
                    </small>
                  </p>

                  <div className="info">
                    <p>salary:${actor.salary}</p>

                    <p>{actor.role}</p>
                  </div>

                  <button
                    onClick={() => handleSelectActor(actor)}
                    className="card-btn"
                  >
                    Select
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <div className="cart">
          <Cart selectedActors={selectedActors}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
