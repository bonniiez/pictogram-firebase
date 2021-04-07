import React from "react";

const Title = ({handleLogout}) => {
  return (
    <div className="title">
      <nav>
        <h1>PictoGram</h1>
        <button className=" logout-button" onClick={handleLogout}>Log Out</button>
      </nav>
      <h2>Image Repository</h2>
      <p>Upload your photos to build your own photo gallery!</p>
    </div>
  );
};

export default Title;
