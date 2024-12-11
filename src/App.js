import './App.css';
import SurahList from './components/SurahList';
import Navbar from './components/Navbar';
// import SurahContent from './components/SurahContent';
import Quran from './components/Quran';
import Hadees from './components/Hadees'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<SurahList/>}/>
          <Route exact path="/surah-insight" element={<SurahList/>}/>
          <Route exact path="/quran" element={<Quran/>}/>
          <Route exact path="/hadees" element={<Hadees/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
