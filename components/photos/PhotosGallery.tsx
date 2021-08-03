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

  if (photos) {
    return (
      <>
        {photos.length > 0 ? (
          <div className="gallery container">
            {photos.map((photo, index) => (
              <Photo key={index} photo={photo} />
            ))}
          </div>
        ) : (
          <p>No se encontraron imagenes</p>
        )}
      </>
    );
  }
  return <p></p>;
};

export default PhotosGallery;
