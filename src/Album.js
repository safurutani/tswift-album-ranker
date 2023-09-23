import React from "react"
class Album extends React.Component {
    render() {
      const {name, inputState, onInputChange, reset} = this.props;
      return (
        <div id="album" className={this.props.albumTheme}> 
          <div id="albumHeader">
            <h2>{this.props.title}</h2>
            <div id="resetBox">
              <div id="reset" onClick={reset} className={this.props.inputTheme}>
                RESET
              </div>
            </div>        
            
          </div>
          <ul>
            {this.props.albumTracks.map((song, index) => (
              <div className="list" key={index}>
                <div className="song">{song}</div>
                <div>-----</div>
                <div className="inputContainer">
                  <input
                    id={name + (index + 1)}
                    className={this.props.inputTheme}
                    type="number"
                    value={inputState["input"+(index+1)]}
                    step={0.5}
                    min={0}
                    max={10}
                    onChange={(e) => onInputChange(name,"input" + (index +1), e.target.value)}
                  />
                </div>
              </div>
            ))}
          </ul>
          
        </div>
      );
    }
  }
  export default Album