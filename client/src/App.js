import "./App.css";
import NavBar from "./components/nav";
import LandingPage from "./components/main";
import Reminder from "./components/reminder";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Reminder />
      <footer>
        &copy; Copyright{" "}
        <strong>
          <span>Reminder</span>
        </strong>
        . All Rights Reserved
      </footer>
    </>
  );
}

export default App;
