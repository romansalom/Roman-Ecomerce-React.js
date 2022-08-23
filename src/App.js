import './App.css';
import NavBar from './components/NavBar';
function App() {
  let numerodeclase = 300;
  return (
    <>
    <NavBar></NavBar>
    <div className="App">
     <p style={
      {
        color:"salmon",
        paddingTop:"10px",
      }
     }>bienvenidos al e-comerce {numerodeclase}</p>
  <hr></hr>
     <input placeholder='ingrese algun contenido'></input>
    </div>
    </>
  );
}

export default App;
