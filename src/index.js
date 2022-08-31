
import ReactDOM from 'react-dom/client';
import './index.css';
import {FirstSection} from './components/FirstSection';
// import Welcome from './pages/Welcome';
import { LastSection } from './components/LastSection';
import { Third } from './components/Third';
import { Second } from './components/Second';

const App =()=>{
  return(
    <div>
      < FirstSection/>
      {/* <Welcome/> */}
      <Second/>
      <Third/>
      <LastSection />
    </div>
    
  )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

