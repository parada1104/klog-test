import React, { useContext } from "react";
import { imagesContext } from "../context/imagesContext";
import ImagesContextInterface from "../interfaces/context/ImagesContextInterface";
import Loader from "../Loader";
import Photo from "./Photo";

const PhotosGallery = () => {
  const { photos, loading } = useContext(
    imagesContext
  ) as ImagesContextInterface;

  if (loading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="gallery container">
      {photos.length > 0 ? (
        photos.map((photo, index) => <Photo key={index} photo={photo} />)
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PhotosGallery;
