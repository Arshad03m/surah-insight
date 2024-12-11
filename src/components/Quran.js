import React, { useState, useEffect } from 'react';

export default function Quran() {
    const [surahs, setSurahs] = useState([]); // To store the list of Surahs
    const [selectedSurah, setSelectedSurah] = useState(null); // To store the selected Surah details
    const [loading, setLoading] = useState(false); // To manage loading state

    // Fetch the list of Surahs
    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/quran')
            .then((response) => response.json())
            .then((data) => setSurahs(data.data.surahs))
            .catch((error) => console.error('Error fetching Surah list:', error));
    }, []);

    // Fetch verses of the selected Surah
    const fetchSurahDetails = (surahNumber) => {
        setLoading(true);
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedSurah(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching Surah details:', error);
                setLoading(false);
            });
    };

    return (
        <>
        <div className="surah-list-wrapper" >
            <div className="surah-list" >
                {surahs.length > 0 ? (surahs.map((surah) => (
                    <div key={surah.number} className="surah-item"
                        onClick={() => fetchSurahDetails(surah.number)} >

                        <strong>{surah.number}. {surah.englishName}</strong>
                        <div style={{ fontSize: '0.8em', color: '#7D977D' }}>
                            <strong> ({surah.englishNameTranslation}) </strong>
                        </div>

                    </div>
                ))
                ) : (
                    <p>Loading Surah list...</p>
                )}
            </div>
        </div>

        <div className="surah-content-center" >
            {selectedSurah &&
                (<div className="surah-content" >
                    {loading ? (<p>Loading Surah details...</p>) : (
                        <>
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            {selectedSurah.number}. {selectedSurah.englishName}{' '}
                            <span style={{ fontSize: '0.8em' }}> ({selectedSurah.englishNameTranslation}) </span>
                        </h2>

                        {/* <p><strong>Revelation Type:</strong> {selectedSurah.revelationType} </p> */}
                        <p> <strong>Total Verses:</strong> {selectedSurah.numberOfAyahs} </p>
                        <h3><strong>Verses:</strong></h3>
                        <div className="arabic-text">
                            {selectedSurah.ayahs.map((ayah) => (
                                <>
                                <div key={ayah.number} className="verse-container">
                                    <div className="verse-number"> {ayah.numberInSurah}</div>
                                    <div className="verse-text">{'. '}{ayah.text}</div>
                                </div>
                                <hr />
                                </>
                            ))}
                        </div>
                        </>
                    )}
                </div>
                )}

        </div>
        </>
    );
}
