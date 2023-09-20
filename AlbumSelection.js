import AlbumButton from './AlbumButton'
import React from "react"
class AlbumSelection extends React.Component {
    render() {    
      return(
        <div id="albumSelection">
          <div className="buttonContainer">
            <AlbumButton title="Taylor Swift" clicked={this.props.handleClick1} classes={this.props.classes} />
            <AlbumButton title="Fearless" clicked={this.props.handleClick2} classes={this.props.classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="Speak Now" clicked={this.props.handleClick3} classes={this.props.classes} />
            <AlbumButton title="Red" clicked={this.props.handleClick4} classes={this.props.classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="1989" clicked={this.props.handleClick5} classes={this.props.classes} />
            <AlbumButton title="Reputation" clicked={this.props.handleClick6} classes={this.props.classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="Lover" clicked={this.props.handleClick7} classes={this.props.classes} />
            <AlbumButton title="folklore" clicked={this.props.handleClick8} classes={this.props.classes} />
          </div>
          <div className="buttonContainer">
            <AlbumButton title="evermore" clicked={this.props.handleClick9} classes={this.props.classes} />
            <AlbumButton title="Midnights" clicked={this.props.handleClick10} classes={this.props.classes} />
          </div>
        </div>
      );
    }
  }
  export default AlbumSelection