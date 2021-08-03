import useForm from "../components/hooks/useForm";
import IFormValidator from "../components/interfaces/forms/FormValidator";
import ISearchForm from "../components/interfaces/forms/SearchForm";
import { ObjectEntries } from "../components/interfaces/types/entriesType";
import Container from "../components/layouts/Container";
import SearchForm from "../components/searchForm";

export default function Home() {
  return (
    <Container title="Klog test - index">
      <h2>Bienvenido</h2>
      <SearchForm />
    </Container>
  );
}
