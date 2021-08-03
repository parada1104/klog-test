import { createContext, useState } from "react";
import ImagesContextInterface from "../interfaces/context/ImagesContextInterface";
import { createApi } from "unsplash-js";
import IPhoto from "../interfaces/photo/IPhoto";
import UnsplashRequest from "../interfaces/photo/UnsplashRequest";

export const imagesContext = createContext<ImagesContextInterface | undefined>(
  undefined
);

export interface ImageProviderProps {
  children: React.ReactNode;
  accessKey: string;
}
const ImageProvider = (props: ImageProviderProps) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);

  const api = createApi({
    accessKey: props.accessKey,
  });

  const searchPhotos = async (query: string) => {
    const defaultQuery: UnsplashRequest = {
      query: "",
      page: 1,
      perPage: 10,
    };
    try {
      const res = await api.search.getPhotos({ ...defaultQuery, query });
      const photos: IPhoto[] = res.response?.results.reduce(
        (acc: any, el: any): IPhoto[] => {
          return [...acc, { urls: el.urls, alt: el.alt_description }];
        },
        []
      ) as IPhoto[];
      console.log(photos);
      setPhotos(photos);
    } catch (err) {
      console.log(err);
    }
  };

  const data: ImagesContextInterface = {
    photos,
    loading,
    error,
    searchPhotos,
  };

  return (
    <imagesContext.Provider value={data}>
      {props.children}
    </imagesContext.Provider>
  );
};

export default ImageProvider;
