import React from "react";
import { BrowserRouter , Routes, Route , useNavigate} from "react-router-dom";
import Newpage from "./components/Newpage";
import Insights2 from "./components/Insights2";
import FAQs from "./components/FAQs";
import Resources from "./components/Resources";
import Procedures from "./components/Procedure";
import Roadmaps from "./components/Roadmaps"; 
import Stats from "./components/stats";
import './App.css'

function Home() {
  
  const navigate = useNavigate();
  return (
    <>
    <img src="https://iitk.ac.in/hss/templates/iitk-simple/images/iitk-logo-black.png"  />
    <p className="go-the-docs">
        <h3>
       INDIAN INSTITUTE OF TECHNOLOGY KANPUR
       </h3>
        </p>
    <div class="header">
    <img src="https://www.iitk.ac.in/smss/post/spo_2021/featured.png"  />
      <h1>Students' Placements Office</h1>
      
      </div>
      
      <h1>Recruitment Automation Portal</h1>
      
      <p className="read-the-docs">
        The one stop portal at IIT Kanpur that faciliatates smooth transfer of information among the Students, Recruiters and the Student's Placement office(SPO,IITK) 
      </p>
      <button>Signup</button>
      <button>Login</button><br></br><br></br>
      <button onClick={() => navigate('/newpage')}>For Students</button>
    </>
  );
};



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/newpage" element={<Newpage />} />
      <Route path="/insightshehe" element={<Insights2 />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/procedures" element={<Procedures />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/insights/:studentId" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;