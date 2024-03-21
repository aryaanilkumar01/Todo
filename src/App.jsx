import { useEffect } from 'react';
import './App.css'
import Addform from './Components/Addform';

import Totalitems from './Components/Totalitems';

function App() {


  return (
    <>
<div className='text-center container mt-5 p-3 border' style={{width:'60%'}}>
  <h1>My TODO List</h1>
   <Addform/>
   

   <Totalitems/>
</div>
    </>

  )
}

export default App