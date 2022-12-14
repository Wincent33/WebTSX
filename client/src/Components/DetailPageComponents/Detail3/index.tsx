import React from "react";
import ImageGallery from "react-image-gallery";
import "./style.scss";
const Detail3 = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="fitur">
      <ImageGallery
        items={images}
        // showFullscreenButton={false}
        thumbnailPosition="right"
        showPlayButton={false}
        autoPlay={true}
        showNav={false}
      />
    </div>
  );
};

export default Detail3;
