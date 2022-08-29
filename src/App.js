
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
      <Navbar title="React"/>
      <div className="container">
      <TextForm/>
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
