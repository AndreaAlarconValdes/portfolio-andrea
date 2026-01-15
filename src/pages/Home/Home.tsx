import MessageNotification from "../../components/MessageNotification";
import "./Home.css";

const Home = () => {


  return (
    <div className="home">
      <MessageNotification message="Have a look inside the folders to see my projects." />
      <h1 className="title-typewriter">
        Welcome!
      </h1>
      <h2 className="title-fadein">This is Andrea's desktop</h2>
    </div>

  );
};

export default Home;
