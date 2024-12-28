// fetch from api online 
// import React, { useState, useEffect } from 'react';

// export default function Quran() {
//     const [surahs, setSurahs] = useState([]); // To store the list of Surahs
//     const [selectedSurah, setSelectedSurah] = useState(null); // To store the selected Surah details
//     const [loading, setLoading] = useState(false); // To manage loading state

//     // Fetch the list of Surahs
//     useEffect(() => {
//         fetch('https://api.alquran.cloud/v1/quran')
//             .then((response) => response.json())
//             .then((data) => setSurahs(data.data.surahs))
//             .catch((error) => console.error('Error fetching Surah list:', error));
//     }, []);

//     // Fetch verses of the selected Surah
//     const fetchSurahDetails = (surahNumber) => {
//         setLoading(true);
//         fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setSelectedSurah(data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching Surah details:', error);
//                 setLoading(false);
//             });
//     };

//     return (
//         <>
//         <div className="surah-list-wrapper" >
//             <div className="surah-list" >
//                 {surahs.length > 0 ? (surahs.map((surah) => (
//                     <div key={surah.number} className="surah-item"
//                         onClick={() => fetchSurahDetails(surah.number)} >

//                         <strong>{surah.number}. {surah.englishName}</strong>
//                         <div style={{ fontSize: '0.8em', color: '#7D977D' }}>
//                             <strong> ({surah.englishNameTranslation}) </strong>
//                         </div>

//                     </div>
//                 ))
//                 ) : (
//                     <p>Loading Surah list...</p>
//                 )}
//             </div>
//         </div>

//         <div className="surah-content-center" >
//             {selectedSurah &&
//                 (<div className="surah-content" >
//                     {loading ? (<p>Loading Surah details...</p>) : (
//                         <>
//                         <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             {selectedSurah.number}. {selectedSurah.englishName}{' '}
//                             <span style={{ fontSize: '0.8em' }}> ({selectedSurah.englishNameTranslation}) </span>
//                         </h2>

//                         {/* <p><strong>Revelation Type:</strong> {selectedSurah.revelationType} </p> */}
//                         <p> <strong>Total Verses:</strong> {selectedSurah.numberOfAyahs} </p>
//                         <h3><strong>Verses:</strong></h3>
//                         <div className="arabic-text">
//                             {selectedSurah.ayahs.map((ayah) => (
//                                 <>
//                                 <div key={ayah.number} className="verse-container">
//                                     <div className="verse-number"> {ayah.numberInSurah}</div>
//                                     <div className="verse-text">{'. '}{ayah.text}</div>
//                                 </div>
//                                 <hr />
//                                 </>
//                             ))}
//                         </div>
//                         </>
//                     )}
//                 </div>
//                 )}

//         </div>
//         </>
//     );
// }

// fetch from local file (arabic)
import React, { useState } from 'react';
import quranData from '../data/quranArabic.json'; // Import the JSON file

export default function Quran() {
    const surahs = quranData.data.surahs; // Get the list of Surahs from the JSON data
    const [selectedSurah, setSelectedSurah] = useState(null); // To store the selected Surah details

    // Handle the selection of a Surah
    const fetchSurahDetails = (surahNumber) => {
        const surahDetails = surahs.find((surah) => surah.number === surahNumber);
        setSelectedSurah(surahDetails); // Set the selected Surah details
    };

    return (
        <>
        <div className="surah-list-wrapper">
            <div className="surah-list">
                {surahs.length > 0 ? (
                    surahs.map((surah) => (
                        <div
                            key={surah.number}
                            className="surah-item"
                            onClick={() => fetchSurahDetails(surah.number)}
                        >
                            <strong>{surah.number}. {surah.englishName}</strong>
                            <div style={{ fontSize: '0.8em', color: '#7D977D' }}>
                                <strong>({surah.englishNameTranslation})</strong>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading Surah list...</p>
                )}
            </div>
        </div>

        <div className="surah-content-center">
            {selectedSurah && (
                <div className="surah-content">
                    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {selectedSurah.number}. {selectedSurah.englishName}{' '}
                        <span style={{ fontSize: '0.8em' }}>
                            ({selectedSurah.englishNameTranslation})
                        </span>
                    </h2>
                    <p>
                        <strong>Total Verses:</strong> {selectedSurah.ayahs.length}
                    </p>
                    <h3>
                        <strong>Verses:</strong>
                    </h3>
                    <div className="arabic-text">
                        {selectedSurah.ayahs.map((ayah) => (
                            <>
                                <div key={ayah.number} className="verse-container">
                                    <div className="verse-number">{ayah.numberInSurah}</div>
                                    <div className="verse-text">. {ayah.text}</div>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </>
    );
}


// arabic and english
// import React, { useState } from 'react';
// import quranArabic from '../data/quranArabic.json';
// import quranEnglish from '../data/quranEnglish.json';

// export default function Quran() {
//     const [selectedSurah, setSelectedSurah] = useState(null); // To store the selected Surah details

//     // Fetch verses of the selected Surah
//     const fetchSurahDetails = (surahNumber) => {
//         const arabicSurah = quranArabic.data.surahs.find((surah) => surah.number === surahNumber);
//         const englishSurah = quranEnglish.data.surahs.find((surah) => surah.number === surahNumber);

//         // Combine Arabic and English ayahs
//         if (arabicSurah && englishSurah) {
//             const combinedSurah = {
//                 number: arabicSurah.number,
//                 englishName: arabicSurah.englishName,
//                 englishNameTranslation: arabicSurah.englishNameTranslation,
//                 ayahs: arabicSurah.ayahs.map((ayah, index) => ({
//                     arabic: ayah.text,
//                     english: englishSurah.ayahs[index]?.text || 'Translation not available',
//                     numberInSurah: ayah.numberInSurah,
//                 })),
//             };
//             setSelectedSurah(combinedSurah);
//         }
//     };

//     return (
//         <>
//             {/* Surah List */}
//             <div className="surah-list-wrapper">
//                 <div className="surah-list">
//                     {quranArabic.data.surahs.map((surah) => (
//                         <div
//                             key={surah.number}
//                             className="surah-item"
//                             onClick={() => fetchSurahDetails(surah.number)}
//                         >
//                             <strong>{surah.number}. {surah.englishName}</strong>
//                             <div style={{ fontSize: '0.8em', color: '#7D977D' }}>
//                                 <strong>({surah.englishNameTranslation})</strong>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Selected Surah Content */}
//             <div className="surah-content-center">
//                 {selectedSurah && (
//                     <div className="surah-content">
//                         <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             {selectedSurah.number}. {selectedSurah.englishName}{' '}
//                             <span style={{ fontSize: '0.8em' }}>
//                                 ({selectedSurah.englishNameTranslation})
//                             </span>
//                         </h2>
//                         <p><strong>Total Verses:</strong> {selectedSurah.ayahs.length}</p>
//                         <h3><strong>Verses:</strong></h3>
//                         <div className="verses-container">
//                             {selectedSurah.ayahs.map((ayah) => (
//                                 <>
//                                 <div key={ayah.numberInSurah} className="verse-container">
//                                     <div className="arabic-verse" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                                         {ayah.numberInSurah}. {ayah.arabic}
//                                     </div> 
//                                     <div className="english-verse" style={{ fontSize: '1em', color: '#555' }}>
//                                     {ayah.english}
//                                     </div>
//                                 </div>
//                                     <hr />
//                                     </>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }
