import Container from "../components/layouts/Container";
import SearchForm from "../components/searchForm";
import ImageProvider from "../components/context/imagesContext";
import PhotosGallery from "../components/photos/PhotosGallery";

export interface IndexProps {
  accessKey: string;
}

export default function Home(props: IndexProps) {
  return (
    <ImageProvider accessKey={props.accessKey}>
      <Container title="Klog test - index">
        <h2>Bienvenido</h2>
        <SearchForm />
        <PhotosGallery />
      </Container>
    </ImageProvider>
  );
}

export async function getServerSideProps() {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  console.log(accessKey);
  return {
    props: {
      accessKey,
    },
  };
}
