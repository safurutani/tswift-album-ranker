import React from "react"
class AlbumButton extends React.Component {
    render() {
      return (
        <div className={this.props.classes} onClick={this.props.clicked}>
          <div>{this.props.title}</div>
        </div>
      );
    }
  }
  export default AlbumButton