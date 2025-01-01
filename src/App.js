import React, { useState } from 'react';
import Album from './Album';
import AlbumSelection from './AlbumSelection';
import Results from './Results';
import {debutTracks, fearlessTracks, speaknowTracks, redTracks, tracks1989, reputationTracks, loverTracks, folkloreTracks, evermoreTracks, midnightsTracks, ttpdTracks} from './tracklists';
import { useRatingsContext } from './RatingsContext';
import AuthModal from './AuthModal';
import { useAuth } from './AuthContext';
const App = () => {  
  // Get ratings from context api
  const {ratings, saveRatingsToFirestore} = useRatingsContext(); 
  const { user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [mode, setMode] = useState(false);

  const openAuthModal = (isRegister) => {
    setMode(isRegister);
    setIsAuthModalOpen(true);

  };
  const closeAuthModal = () => setIsAuthModalOpen(false);


  // Album Scores State
  const [albumScores, setAlbumScores] = useState({
    'Taylor Swift': 5,
    "Fearless": 5,
    "Speak Now": 5,
    "Red": 5,
    "1989": 5,
    "Reputation": 5,
    "Lover": 5,
    "folklore": 5,
    "evermore": 5,
    "Midnights": 5,
    "THE TORTURED POETS DEPARTMENT": 5
    });
  // Formatted album names for display
  const albumNameMapping = {
    'debut': 'Taylor Swift',
    'fearless': 'Fearless',
    'speaknow': 'Speak Now',
    'red': 'Red',
    'x1989': '1989',
    'reputation': 'Reputation',
    'lover': 'Lover',
    'folklore': 'folklore',
    'evermore': 'evermore',
    'midnights': 'Midnights',
    'ttpd': 'THE TORTURED POETS DEPARTMENT'
  };

  // Album Content Functions
  const debutContent = () => {
      return(<Album 
               title="Taylor Swift" 
               name="debut"
               albumTracks={debutTracks} 
               albumTheme="debutAlbumTheme"
               inputTheme="debutInputTheme"
               />);
  };
  const fearlessContent = () => {
    return (<Album 
              title="Fearless"
              name="fearless"
              albumTracks={fearlessTracks} 
              albumTheme="fearlessAlbumTheme"
              inputTheme="fearlessInputTheme"
              />);          
  };
  const speaknowContent = () => {
    return (<Album 
              title="Speak Now" 
              name="speaknow"
              albumTracks={speaknowTracks} 
              albumTheme="speaknowAlbumTheme"
              inputTheme="speaknowInputTheme"
              />);          
  };
  const redContent = () => {
      return (<Album 
                title="Red" 
                name="red"
                albumTracks={redTracks} 
                albumTheme="redAlbumTheme"
                inputTheme="redInputTheme"
                />);          
  };
  const x1989Content = () => {
    return (<Album 
              title="1989" 
              name="x1989"
              albumTracks={tracks1989} 
              albumTheme="album1989Theme"
              inputTheme="input1989Theme"
              />); 
  };
  const reputationContent = () => {
    return (<Album 
              title="Reputation"
              name="reputation"
              albumTracks={reputationTracks} 
              albumTheme="reputationAlbumTheme"
              inputTheme="reputationInputTheme"
              />); 
  };
  const loverContent = () => {
    return (<Album 
              title="Lover" 
              name="lover"
              albumTracks={loverTracks} 
              albumTheme="loverAlbumTheme"
              inputTheme="loverInputTheme"
              />); 
  };
  const folkloreContent = () => {
    return (<Album 
              title="folklore"
              name="folklore"
              albumTracks={folkloreTracks} 
              albumTheme="folkloreAlbumTheme"
              inputTheme="folkloreInputTheme"
              />); 
  };
  const evermoreContent = () => {
    return (<Album 
              title="evermore" 
              name="evermore"
              albumTracks={evermoreTracks} 
              albumTheme="evermoreAlbumTheme"
              inputTheme="evermoreInputTheme"
              />); 
  };
  const midnightsContent = () => {
    return (<Album 
              title="Midnights" 
              name="midnights"
              albumTracks={midnightsTracks} 
              albumTheme="midnightsAlbumTheme"
              inputTheme="midnightsInputTheme"
              />); 
  };
  const ttpdContent = () => {
    return (<Album 
              title="The Tortured Poets Department" 
              name="ttpd"
              albumTracks={ttpdTracks} 
              albumTheme="ttpdAlbumTheme"
              inputTheme="ttpdInputTheme"
              />); 
  };

  // Keep track of current album theme
  const [currentTheme, setCurrentTheme] = useState({
    selectedAlbum: debutContent(),
    albumName: "debut",
    webTheme: "debutWebTheme",
    albumTheme: "debutAlbumTheme",
    submitHover: "debutSubmitHover",
    buttonHover: "debutButtonHover"
  });
  
  const results = () => {
    const newScores = {};
    // Calculate average rating for each album
    for (const albumName in ratings) {
      const albumInputs = ratings[albumName];
      const values = Object.values(albumInputs);
      const numericValues = values.map((value) => parseFloat(value) || 0);
      const sum = numericValues.reduce((acc, currentValue) => acc + currentValue, 0);
      const avg = (sum / values.length).toFixed(2);
      newScores[albumName] = avg;
    }
    setAlbumScores(newScores);
    // Sort albums by score and add formatted name
    const rankingsArr = Object.entries(newScores);
    rankingsArr.sort((a,b) => b[1] - a[1]);
    const sortedAlbums = rankingsArr.map((item) => albumNameMapping[item[0]]);
    const sortedScores = rankingsArr.map((item) => item[1]);
    return(<Results 
              albums={sortedAlbums}
              scores={sortedScores} />);
  };

  // Album Button Click Handlers
  const buttonClick1 = () => {
      setCurrentTheme({
        selectedAlbum: debutContent(),
        albumName: "debut",
        webTheme: "debutWebTheme",
        albumTheme: "debutAlbumTheme",
        submitHover: "debutSubmitHover",
        buttonHover: "debutButtonHover"
      });
  };
  const buttonClick2 = () => {
    setCurrentTheme({
      selectedAlbum: fearlessContent(),
      albumName: "fearless",
      webTheme: "fearlessWebTheme",
      albumTheme: "fearlessAlbumTheme",
      submitHover: "fearlessSubmitHover",
      buttonHover: "fearlessButtonHover"
    });
  };
  const buttonClick3 = () => {
    setCurrentTheme({
      selectedAlbum: speaknowContent(),
      albumName: "speaknow",
      webTheme: "speaknowWebTheme",
      albumTheme: "speaknowAlbumTheme",
      submitHover: "speaknowSubmitHover",
      buttonHover: "speaknowButtonHover"
    });
  };
  const buttonClick4 = () => {
    setCurrentTheme({
      selectedAlbum: redContent(),
      albumName: "red",
      webTheme: "redWebTheme",
      albumTheme: "redAlbumTheme",
      submitHover: "redSubmitHover",
      buttonHover: "redButtonHover"
    });
  };
  const buttonClick5 = () => {
    setCurrentTheme({
      selectedAlbum: x1989Content(),
      albumName: "x1989",
      webTheme: "web1989Theme",
      albumTheme: "album1989Theme",
      submitHover: "submit1989Hover",
      buttonHover: "button1989Hover"
    });
  };
  const buttonClick6 = () => {
    setCurrentTheme({
      selectedAlbum: reputationContent(),
      albumName: "reputation",
      webTheme: "reputationWebTheme",
      albumTheme: "reputationAlbumTheme",
      submitHover: "reputationSubmitHover",
      buttonHover: "reputationButtonHover"
    });
  };
  const buttonClick7 = () => {
    setCurrentTheme({
      selectedAlbum: loverContent(),
      albumName: "lover",
      webTheme: "loverWebTheme",
      albumTheme: "loverAlbumTheme",
      submitHover: "loverSubmitHover",
      buttonHover: "loverButtonHover"
    });
  };
  const buttonClick8 = () => {
    setCurrentTheme({
      selectedAlbum: folkloreContent(),
      albumName: "folklore",
      webTheme: "folkloreWebTheme",
      albumTheme: "folkloreAlbumTheme",
      submitHover: "folkloreSubmitHover",
      buttonHover: "folkloreButtonHover"
    });
  };
  const buttonClick9 = () => {
    setCurrentTheme({
      selectedAlbum: evermoreContent(),
      albumName: "evermore",
      webTheme: "evermoreWebTheme",
      albumTheme: "evermoreAlbumTheme",
      submitHover: "evermoreSubmitHover",
      buttonHover: "evermoreButtonHover"
    });
  };
  const buttonClick10 = () => {
    setCurrentTheme({
      selectedAlbum: midnightsContent(),
      albumName: "midnights",
      webTheme: "midnightsWebTheme",
      albumTheme: "midnightsAlbumTheme",
      submitHover: "midnightsSubmitHover",
      buttonHover: "midnightsButtonHover"
    });
  };
  const buttonClick11 = () => {
  setCurrentTheme({
    selectedAlbum: ttpdContent(),
    albumName: "ttpd",
    webTheme: "ttpdWebTheme",
    albumTheme: "ttpdAlbumTheme",
    submitHover: "ttpdSubmitHover",
    buttonHover: "ttpdButtonHover"
  });
  };

  // Calculate final ranking and display results component
  const handleSubmit = async () => {  
    setCurrentTheme((prevState) => ({
      ...prevState,
      selectedAlbum: results()
    }));
    if (user) {
      await saveRatingsToFirestore(ratings);
    }
  };
    return (
      <div className={`${currentTheme.webTheme} full-height`}>
        <div className={`${currentTheme.webTheme} login-register`}>
        {user ? (
            <button className='logout-link' onClick={logout}>Logout</button>
          ) : (
            <div>
            <button className='login-link' onClick={() => {openAuthModal(false)}}>Login</button>
            <button className='register-link' onClick={() => {openAuthModal(true)}}>Register</button>
            </div>
          )}
        </div>
        <AuthModal show={isAuthModalOpen} onClose={closeAuthModal} mode={mode} />
        <h1>Taylor Swift Album Ranking</h1>
        <AlbumSelection 
          classes={`${currentTheme.albumName}ButtonHover albumButton`}
          handleClick1={buttonClick1}
          handleClick2={buttonClick2}
          handleClick3={buttonClick3}
          handleClick4={buttonClick4}
          handleClick5={buttonClick5}
          handleClick6={buttonClick6}
          handleClick7={buttonClick7}
          handleClick8={buttonClick8}
          handleClick9={buttonClick9}
          handleClick10={buttonClick10}
          handleClick11={buttonClick11}
          />
        {currentTheme.selectedAlbum}
        <div id="submit" className={`${currentTheme.albumTheme} ${currentTheme.submitHover}` } onClick={handleSubmit}>
          GET FINAL RANKING
        </div>
      </div>
    );
  }
export default App