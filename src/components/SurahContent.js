import React from "react";

export default function SurahContent(props) {
  return (
    <>
      <div>
        <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>
          {props.name} <span style={{ fontSize: "0.8em" }}>({props.translation})</span>
        </h2> <br/>
        <p><strong>Surah Number:</strong> {props.number}</p>
        <p><strong>Revelation Place:</strong> {props.revelationPlace}</p>
        <p><strong>Total Verses:</strong> {props.totalVerses}</p>
        <p><strong>Description:</strong> {props.description}</p>
        <br/>

        <h3 style={{fontWeight: 'bold', marginBottom: '10px'}}>Key Themes</h3>
        <div>
          {Object.entries(props.keyThemes).map(([themeName, themeContent], index) => (
            <div key={index} style={{ marginBottom: "1em" }}>
              <strong>
                {themeName
                  .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space between camelCase words 
                  .toLowerCase() // Convert all the text to lowercase (after handling special cases)
                  .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize the first letter of the first word
                  .replace(/\ballah\b/g, 'Allah')
                } : </strong>
              {Array.isArray(themeContent) ? (
                <ul> {themeContent.map((item, idx) => ( <li key={idx}>{item}</li> ))} </ul>
              ) : ( <p>{themeContent}</p> )}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
