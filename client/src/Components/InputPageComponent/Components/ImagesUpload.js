import { useEffect } from "react";

function ImagesUpload(props) {
  const { images, setImages, setImageURLs } = props;
  useEffect(() => {
    if (images.length < 1 || images.length > 8) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images, setImageURLs]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };
  return (
    <div className="images-upload">
      <label>Upload Foto:</label>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </div>
  );
}

export default ImagesUpload;
