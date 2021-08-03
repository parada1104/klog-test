import { createContext, useState } from "react";
import ImagesContextInterface from "../interfaces/context/ImagesContextInterface";

const imagesContext = createContext<ImagesContextInterface | undefined>({
  images: [],
});

export interface ImageProviderProps {
  children: React.ReactChild;
}
const ImageProvider = (props: ImageProviderProps) => {
  const [images, setImages] = useState([]);
};
