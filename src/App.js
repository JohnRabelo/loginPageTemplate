import HomePg from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Step1pg from './pages/Step1';
import Step2pg from './pages/Step2';
import Step3pg from './pages/Step3';
import Step4pg from './pages/Step4';
import Step5pg from './pages/Step5';
import FdbPg from './pages/GeneralFeedback';
import ThankYouPg from './pages/ThankYou';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePg/>} />
        <Route path='/stp1' element={<Step1pg/>} />
        <Route path='/stp2' element={<Step2pg/>} />
        <Route path='/stp3' element={<Step3pg/>} />
        <Route path='/stp4' element={<Step4pg/>} />
        <Route path='/stp5' element={<Step5pg/>} />
        <Route path='/genfeedback' element={<FdbPg/>} />
        <Route path='/thankyou' element={<ThankYouPg/>} />
      </Routes>
    </div>
  );
}

export default App;


