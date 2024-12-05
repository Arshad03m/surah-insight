import React, { useState } from 'react'
import SurahContent from './SurahContent'
import surahData from "../data/surahData.json";

export default function SurahList() {

  let mean = {
    fontSize: "0.9em",
    color: "#7D977D"
  }
  let head = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '30px'
  }

  const [content, setContent] = useState(null);

  const displayContent = (index) => {
    const surahId = `surah${index + 1}`;
    setContent(surahData[surahId]);
  };

  return (
    <>
      <div className="surah-list-wrapper">
        <div className="surah-list">
          {Array.from({ length: 114 }, (_, index) => (
            <div key={index} className="surah-item" onClick={() => displayContent(index)} >
              {surahData[`surah${index + 1}`] ?
                (<>
                  <div> <strong> {index + 1}. {surahData[`surah${index + 1}`].SurahName} </strong> </div>
                  <div style={mean}> (<strong>{surahData[`surah${index + 1}`].Translation}</strong>) </div>
                </>
                ) : (<div>Surah {index + 1}</div>)}
            </div>
          ))}

        </div>
      </div>

      <div className="surah-content-center">
        <div className="surah-content">
          {content ? (
            // Check if the content has valid data for Surah
            <SurahContent
              name={content.SurahName}
              translation={content.Translation}
              number={content.ChapterNumber}
              revelationPlace={content.RevelationPlace}
              totalVerses={content.TotalVerses}
              description={content.Description}
              // keyThemes={Object.values(content.KeyThemes).flat()}
              keyThemes={content.KeyThemes}
            />
          ) : content === null ? (
            // Show message when no Surah is selected
            <h1 style={head}>Select a Surah to display content</h1>
          ) : (
            // Show message when Surah is selected but has missing data
            <h1 style={head}>Will be updated soon!</h1>
          )}
        </div>
      </div>




    </>
  );
}


