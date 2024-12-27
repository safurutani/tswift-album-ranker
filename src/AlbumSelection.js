import AlbumButton from './AlbumButton'
import React from "react"
const AlbumSelection = (
  {handleClick1, 
  handleClick2, 
  handleClick3, 
  handleClick4, 
  handleClick5, 
  handleClick6, 
  handleClick7,
  handleClick8, 
  handleClick9,
  handleClick10,
  handleClick11,
  classes}
) => { 
    return(
      <div>
        <div id="albumSelection">
          <div className="buttonContainer">
            <AlbumButton title="Taylor Swift" clicked={handleClick1} classes={classes} />
            <AlbumButton title="Fearless" clicked={handleClick2} classes={classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="Speak Now" clicked={handleClick3} classes={classes} />
            <AlbumButton title="Red" clicked={handleClick4} classes={classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="1989" clicked={handleClick5} classes={`${classes} two-line`} />
            <AlbumButton title="Reputation" clicked={handleClick6} classes={classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="Lover" clicked={handleClick7} classes={`${classes} two-line`} />
            <AlbumButton title="folklore" clicked={handleClick8} classes={classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="evermore" clicked={handleClick9} classes={`${classes} two-line`} />
            <AlbumButton title="Midnights" clicked={handleClick10} classes={classes} />
          </div>
          
        </div>
        <div className="ttpdButton">
            <AlbumButton title="THE TORTURED POETS DEPARTMENT" clicked={handleClick11} classes={classes} />
          </div>
      </div>
    );
  }
  export default AlbumSelection