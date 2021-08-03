import React from "react";
import IPhoto from "../interfaces/photo/IPhoto";
import Image from "next/image";

export interface PhotoProps {
  photo: IPhoto;
}

const Photo = (props: PhotoProps) => {
  const { photo } = props;
  return (
    <div className="photo-container">
      <Image
        src={photo.urls.small}
        alt={photo.alt}
        width={100}
        height={100}
        layout="responsive"
      />
    </div>
  );
};

export default Photo;
