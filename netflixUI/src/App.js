import React from 'react'
import NavBar from './components/navbar/NavBar'
import {action,originals} from './url'
import './app.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={action} title='Adventure' isSmall/>
    </div>
  );
}

export default App;
