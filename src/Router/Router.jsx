import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {Home} from "../views/Home"
import {Proyects} from "../views/Proyects"
import {Proyects1} from "../views/Proyects1"
import {Proyects2} from "../views/Proyects2"
import {Proyects3} from "../views/Proyects3"
import { Testimonios } from "../Components/Testimonios/Testimonios"
import { Notfound } from "../views/Notfound"


 const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element= {<Home/>}  />   
            <Route path="/proyects" element= {<Proyects/>}  />
            <Route path="/proyects1" element= {<Proyects1/>}  />      
            <Route path="/proyects2" element= {<Proyects2/>}  />  
            <Route path="/proyects3" element= {<Proyects3/>}  />          
            <Route path="/testimonios" element= {<Testimonios/>}  />  
            <Route path="*" element= {<Notfound/>}  />  
        </Routes>  
     </BrowserRouter>

  )
}

export{Router}