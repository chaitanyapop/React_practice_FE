import { useState } from "react";
import "./ImageComponent.css";
function ImageComponent() {
  let [imageList, setImage] = useState<any[]>([]);
  let [imageUrl, setImageUrl] = useState("");
  let [selectedImage, setSelectedImage] = useState("");

  function addImage() {
    setImage([...imageList, imageUrl]);
  }
  function deleteImage(imageUrl: any) {
    let newList = imageList.filter((data) => data != imageUrl);
    setImage(newList);
  }
  return (
    <div className="image-container">
      <div>
        <h2>Image Gallery Applications</h2>
        <div className="url-input-section">
          <input
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
          <button className="button" onClick={addImage}>
            Add Image
          </button>
        </div>
      </div>
      <div>
        <div className="display-image-container">
          {imageList.map((data, i) => {
            return (
              <div className="display-image" key={i}>
                <img
                  src={data}
                  className="image"
                  onClick={() => setSelectedImage(data)}
                ></img>
                <button
                  className="button del-button"
                  onClick={() => deleteImage(data)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="selected-image-container"
          onClick={() => setSelectedImage("")}
        >
          <div>
            <img src={selectedImage} className="selected-image"></img>
          </div>
        </div>
      )}
    </div>
  );
}
export default ImageComponent;
