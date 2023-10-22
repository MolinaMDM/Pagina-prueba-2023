import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {Home} from "../views/Home"
import {Proyects} from "../views/Proyects"
import { Notfound } from "../views/Notfound"
import {Proyects1} from "../views/Proyects1"
import {Proyects2} from "../views/Proyects2"
import {Proyects3} from "../views/Proyects3"


 const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element= {<Home/>}  />   
            <Route path="/proyects" element= {<Proyects/>}  />
            <Route path="*" element= {<Notfound/>}  /> 
            <Route path="/proyects1" element= {<Proyects1/>}  />      
            <Route path="/proyects2" element= {<Proyects2/>}  />  
            <Route path="/proyects3" element= {<Proyects3/>}  />  
        </Routes>  
     </BrowserRouter>

  )
}

export{Router}