import React from 'react'
const Results = ({albums, scores}) => {
      return(
        <div id="results">
          <h2 className="underline" id="finalHeader">Final Album Ranking</h2>
          <div id="rankings"> 
            <div id="resultTitles">    
            {albums.map((title, index) =>(
              <div key={index}>
                {title}
              </div>
             ))}
            </div>
            <div id="resultScores">
            {scores.map((score, index) => (         
                <div key={index}>  
                  {score}
                </div>
            ))}
            </div>
          </div>
        </div>
      );
  }
  export default Results
