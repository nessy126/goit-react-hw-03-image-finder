import './App.css';
import './styles.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Grid } from "react-loader-spinner"
// import { instance } from './services/components/Modal/Modal';




function App() {

 const instanceIMG = instance("https://pixabay.com/static/img/logo.svg")

  return (
    <div className="App">
      {/* <Grid color="#00BFFF" height={80} width={80} /> */}
      <button
        onClick={() => instanceIMG.show()}
        // instanceIMG={instanceIMG}
      >OpenModal</button>
    </div>
  )
}

export default App;
