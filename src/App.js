import React from 'react';
import './App.css';
import Fetcher from './Fetcher';
import Hooks from './Hooks';

import SectionOne from './SectionOne'

import Skeleton from '@material-ui/lab/Skeleton';

function App() {
  return (
    <div className="App">
      <Hooks  />
	  
	  <SectionOne />
	  
    </div>
  );
}

/*<Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />*/

/*//https://randomuser.me/api/*/
 /*function App() {
   return (
     <div className="App">
       <Fetcher url={'https://pauldoodyparticipation.herokuapp.com/echo/'}/>  
     </div>
  );
 }*/

export default App;
