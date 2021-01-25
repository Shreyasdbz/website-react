import React, { useState, useEffect } from "react";

import { getPhotos } from "../data/photographyData";

function PhotoGrid() {
  const [photoList, set_photoList] = useState([]);

  useEffect(() => {
    set_photoList((crr) => getPhotos());
  }, []);

  return (
    <div className="photoGrid">
      {photoList.map((pic) => {
        return (
          <img key={pic.src} src={pic.src} alt={pic.alt} className="gridImg" />
        );
      })}
    </div>
  );
}

export default PhotoGrid;
