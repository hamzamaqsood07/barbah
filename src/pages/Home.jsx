import "./Home.css";
import MacbookImg from "../assets/macbook.png";
const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <h1 className="title">
          Unleash Your Gaming Potential And Conquer The Virtual Realm With Us!
        </h1>
        <p className="subtitle">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </p>
        <img src={MacbookImg} alt="macbook" className="laptop-image" />
      </div>
    </>
  );
};

export default Home;
