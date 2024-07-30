import { useState } from 'react';
// import { Routes, Route } from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
// import Table from './components/Table';
// import DataApi from './services/DataApi';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return (
    <>

    {/* /user --> component 1
    /user/home --> component 2
    if we do not use exact in path the rect only load component 1 in both the scenario */}
     
      <Navbar showAlert={showAlert} title="MyApp" />
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      <div className="container my-3">
      <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" />
      {/* <Routes>
        <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" />}></Route>
        <Route exact path="/about" element={<About/>}></Route> */}
      {/* <Table/> */}
      {/* <DataApi></DataApi> */}
      {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
