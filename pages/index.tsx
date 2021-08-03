import Container from "../components/layouts/Container";
import ImageProvider from "../components/context/imagesContext";
import PhotosGallery from "../components/photos/PhotosGallery";

export interface IndexProps {
  accessKey: string;
}

export default function Home(props: IndexProps) {
  return (
    <ImageProvider accessKey={props.accessKey}>
      <Container title="Klog test - index">
        <div className="row justify-content-center mt-5">
          <div className="col-6 text-center">
            <h2>Bienvenido a la busqueda de imagenes Klog</h2>
          </div>
        </div>
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
