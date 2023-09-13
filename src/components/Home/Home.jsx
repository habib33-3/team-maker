import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="card-img">
            <img
              src="https://i.ibb.co/Rvc67Cr/ar.jpg"
              alt=""
              className="photo"
            />
          </div>
          <h2>Antony</h2>
          <p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quos!
            </small>
          </p>
          <div className="info">
            <p>salary:200</p>
            <p>Writer</p>
          </div>
          <button className="card-btn">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
