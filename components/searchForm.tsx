import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { imagesContext } from "./context/imagesContext";
import useForm from "./hooks/useForm";
import ImagesContextInterface from "./interfaces/context/ImagesContextInterface";
import FormErrors from "./interfaces/forms/FormErrors";
import ISearchForm from "./interfaces/forms/SearchForm";

export interface SearchFormProps {}

const initialForm: ISearchForm = {
  keyword: "",
};

function SearchForm(props: SearchFormProps) {
  const [form, setForm] = useState(initialForm);
  const { searchPhotos } = useContext(imagesContext) as ImagesContextInterface;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const query = form.keyword;
    if (!query) {
      alert("debes ingresar una busqueda");
      return;
    }
    searchPhotos(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar Imagenes"
        aria-label="Search"
        name="keyword"
        id="keyword_input"
        value={form.keyword}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
