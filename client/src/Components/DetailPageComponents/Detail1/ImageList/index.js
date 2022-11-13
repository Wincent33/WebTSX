import "./style.scss";
import ImageGallery from "react-image-gallery";

const ImageList = () => {
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
    <div className="image-showcase">
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

export default ImageList;
