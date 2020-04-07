import React from 'react';
import './App.css';
import Fetcher from './Fetcher';
import Hooks from './Hooks';

import Skeleton from '@material-ui/lab/Skeleton';

function App() {
  return (
    <div className="App">
      <Hooks/>
	  
	  <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
	  
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Fetcher url={'https://randomuser.me/api/'}/>
//     </div>
//   );
// }

export default App;
