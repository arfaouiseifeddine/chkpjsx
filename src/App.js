import './App.css';
import image from './imageInSrc.jpg';

function App() {
  return (
    <div className="App" >
      <h1>Arfaoui seifeddine</h1>
      <img src={image} alt=""/>
      
      <img src="./image/imageInPublic.jpeg" alt=""/>
      
    </div>
  );
}

export default App;
