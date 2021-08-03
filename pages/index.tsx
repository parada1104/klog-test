import Container from "../components/layouts/Container";
import SearchForm from "../components/searchForm";
import ImageProvider from "../components/context/imagesContext";

export default function Home(props) {
  return (
    <ImageProvider accessKey={props.accessKey}>
      <Container title="Klog test - index">
        <h2>Bienvenido</h2>
        <SearchForm />
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
