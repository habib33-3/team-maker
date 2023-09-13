import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setAllActors(data);
    };

    fetchData();
  }, []);

  const handleSelectActor = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);

    let count = actor.salary;

    if (isExist) {
      return alert("already added");
    } else {
      selectedActors.forEach((item) => {
        count += item.salary;
      });
      const totalRemaining = 20000 - count;

      if (count > 20000) {
        return alert("budget exceed");
      } else {
        setSelectedActors([...selectedActors, actor]);
        setRemaining(totalRemaining);
        setCost(count);
      }
    }
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
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            cost={cost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
