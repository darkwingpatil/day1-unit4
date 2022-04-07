import logo from './logo.svg';
import styles from './App.module.css';
import List,{Jaiho} from './container/list'
import React from 'react';

const style1={
  color:'red',
  fontSize:'50px'
}
function App() {
  return (
  <><List/>
  <Jaiho headers= {["Mobile OperatingSystem","Android","Blackbery","iPhone","Windowsphone"]}/>
  <Jaiho headers={["Mobile Manufactures","Samsung","HTC","Micromax","Apple"]}/>

  </>

  );
}

export default App;
