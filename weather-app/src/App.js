import React from 'react';
import Weather from './Weather';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = () => {

 
  return (
    <div>
        <BrowserRouter basename='/weather-app'>
                    <Routes>
                        <Route exact path='/' index element={ <Weather/>}/>
                    </Routes>
       </BrowserRouter>
    </div>

  )
}

export default App;