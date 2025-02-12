import React, {useEffect} from "react"
import { useRatingsContext } from "./RatingsContext";
const Album = ({
  name,
  albumTheme,
  title,
  albumTracks,
  inputTheme
}) => {
    const { ratings, resetRatings, updateRatings, setRatings, getUserRatings, user } = useRatingsContext();
    
    useEffect(() => {
      const loadRatings = async () => {
        if (!user) {
          return;
        }
        try {
          const savedRatings = await getUserRatings(user.uid);
          if (savedRatings) {
            setRatings(savedRatings);
          }
        } catch (error) {
          console.error("Error loading ratings:", error);
        }
      };
      loadRatings();
    }, [user]);

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
        {ratings[name] ? (
          albumTracks.map((song, index) => (
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
          ))
        ) : (
          <div>Loading...</div>
        )}
        </ul>
        
      </div>
    );
  }
  export default Album;