import IPhoto from "../photo/IPhoto";

export default interface ImagesContextInterface {
  photos: IPhoto[]
  loading: boolean
  error: any
  searchPhotos(query: string): any
}