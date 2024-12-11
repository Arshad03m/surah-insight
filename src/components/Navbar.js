// import React from 'react'

// function Navbar() {
//     return (
//         <>
//             <div className="navbar">

//                 <div className="nav-title">
//                     <a href="/">Surah Insight</a>
//                 </div>

//                 <div className="nav-links">
//                     <a href="/">Home</a>
//                     <a href="/Quran">Quran</a>
//                     <a href="/Hadees">Hadees</a>
//                 </div>


//                 <div className="nav-lines">
//                     <div className="line"></div>
//                     <div className="line"></div>
//                     <div className="line"></div>
//                 </div>



//             </div>
//         </>
//     )
// }

// export default Navbar

// import React from 'react'

// function Navbar() {
//     return (
//         <>
//             <div className="navbar">

//                 <div className="nav-title">
//                     <a href="/">Surah Insight</a>
//                 </div>

//                 <div className="nav-links">
//                     <a href="/">Home</a>
//                     <a href="/Quran">Quran</a>
//                     <a href="/Hadees">Hadees</a>
//                 </div>


//                 <div className="nav-lines">
//                     <div className="line"></div>
//                     <div className="line"></div>
//                     <div className="line"></div>
//                 </div>



//             </div>
//         </>
//     )
// }

// export default Navbar


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="nav-title">
        <Link to="/">Surah Insight</Link>
      </div>

      <div className="nav-lines" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/quran">Quran</Link>
        <Link to="/hadees">Hadees</Link>
      </div>

    </div>
  );
}

export default Navbar;
