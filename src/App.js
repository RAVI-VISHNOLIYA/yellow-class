import React from "react";
import Masony from "react-masonry-component";
//import InfiniteScroll from "react-infinite-scroller";

import "./App.css";


const API = "https://unsplash.com/developers";
const PHOTOS=[
  {
    "https://cdn.pixabay.com/photo/2020/02/06/08/51/water-4823443_960_720.jpg",

  }
];

const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

const App = () => {
  return (
    <div>
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {PHOTOS.map((photo) => (
          <li className={`photo-item`}>
            <img src={photo.imageUrl} alt="" />
          </li>
        ))}
      </Masony>
    </div>
  );
};

export default App;
