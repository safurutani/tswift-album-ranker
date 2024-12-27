import React from "react"
const AlbumButton = ({classes, clicked, title}) => {
    return (
      <div className={classes} onClick={clicked}>
        <div>{title}</div>
      </div>
    );
  }
  export default AlbumButton