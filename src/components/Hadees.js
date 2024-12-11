// import React from 'react'

// function Hadees() {
//   return (
//     <div style={{ marginTop: '8vh', fontSize: '30px' }}>
//       <div className="display"
//         style={{
//           textAlign: 'center', fontWeight: 'bold', marginTop: '100px '
//         }}>
//         <span className='auto-type'></span>
//         {var typed = new Typed(".auto-type", {
//           string: ["Hadees... will be updated soon!"],
//           typeSpeed: 150,
//           backSpeed: 150,
//           loop: true
//         })}
//       </div>
//     </div>
//   )
// }

// export default Hadees
import React, { useEffect } from 'react';

function Hadees() {
  useEffect(() => {
    // Ensure that Typed is available globally
    if (typeof window !== 'undefined' && window.Typed) {
      const typed = new window.Typed(".auto-type", {
        strings: ["Hadees... will be updated soon!"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        backDelay: 3000
      });

      // Cleanup the Typed.js instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ marginTop: '8vh', fontSize: '30px' }}>
      <div
        className="display"
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '100px',
          letterSpacing: '2px',
          wordSpacing: '5px'
        }}
      >
        <span className="auto-type"></span>
      </div>
    </div>
  );
}

export default Hadees;
