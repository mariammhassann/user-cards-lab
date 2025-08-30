import UserCard from "./components/UserCard";
import "./App.css";
//import mariam from "./assets/images/Mariam.png"
import abanob from "./assets/images/abanob.webp"
import avatar from "./assets/images/default-avatar.jpg"

function App() {
  return (
    <div className="App">
      <h1>User Cards</h1>
      <div className="cards-container">
        <UserCard username="Mariam " role="Software Engineer" image={avatar}  />
        <UserCard username="Abanob" role="Product Manager" image={abanob} />
        <UserCard username="Salma " role="UX Designer" image={avatar} />
      </div>
    </div>
  );
}

export default App;
