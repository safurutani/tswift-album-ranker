import React from 'react'
class Results extends React.Component {
    render() {
      return(
        <div id="results">
          <h2 className="underline">Final Album Ranking</h2>
          <div id="rankings"> 
            <div id="resultTitles">    
            {this.props.albums.map((title) =>(
              <div >
                {title}
              </div>
             ))}
            </div>
            <div id="resultScores">
            {this.props.scores.map((score) => (         
                <div>  
                  {score}
                </div>
            ))}
            </div>
          </div>
        </div>
      );
    }
  }
  export default Results