import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Navbar title="React" />
      <div className="container">
        <Form />
        <Users/>
      </div>
    </>
  );
}

export default App;
