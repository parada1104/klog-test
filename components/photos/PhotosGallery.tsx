import React, { useContext } from "react";
import { imagesContext } from "../context/imagesContext";
import ImagesContextInterface from "../interfaces/context/ImagesContextInterface";
import Photo from "./Photo";

const PhotosGallery = () => {
  const { photos } = useContext(imagesContext) as ImagesContextInterface;
  console.log(photos);
  return (
    <div className="gallery">
      {photos.length > 0 ? (
        photos.map((photo, index) => <Photo key={index} photo={photo} />)
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PhotosGallery;
