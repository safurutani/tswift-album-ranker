import React from "react"
import { useRatingsContext } from "./RatingsContext";
const Album = ({
  name,
  albumTheme,
  title,
  albumTracks,
  inputTheme
}) => {
    const { ratings, resetRatings, updateRatings, setRatings, getUserRatings } = useRatingsContext();
    
    useEffect(() => {
      const loadRatings = async () => {
      const savedRatings = await getUserRatings();
      if (savedRatings) {
        setRatings(savedRatings);
      }
      };
      loadRatings();
    }, []);

    return (
      <div id="album" className={albumTheme}> 
        <div id="albumHeader">
          <h2>{title}</h2>
          <div id="resetBox">
            <div id="reset" onClick={()=> resetRatings(name)} className={inputTheme}>
              RESET
            </div>
          </div>        
          
        </div>
        <ul>
          {albumTracks.map((song, index) => (
            <div className="list" key={index}>
              <div className="song">{song}</div>
              <div>-----</div>
              <div className="inputContainer">
                <input
                  id={name + (index + 1)}
                  className={inputTheme}
                  type="number"
                  value={ratings[name][`input${index + 1}`]}
                  step={1}
                  onChange={(e) => {
                    updateRatings(name, `input${index + 1}`, e.target.value)}
                  }
                />
              </div>
            </div>
          ))}
        </ul>
        
      </div>
    );
  }
  export default Album;