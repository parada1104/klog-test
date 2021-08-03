import React, { ChangeEvent, FormEvent } from "react";
import useForm from "./hooks/useForm";
import ISearchForm from "./interfaces/forms/SearchForm";

export interface SearchFormProps {}

const initialForm: ISearchForm = {
  keyword: "",
};

function SearchForm(props: SearchFormProps) {
  const { form, handleSubmit, handleChange, handleBlur } = useForm(initialForm);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="keyword"
            id="keyword_input"
            value={form.keyword}
            onChange={handleChange}
            placeholder="Buscar imagenes..."
          />
        </div>
        <div>
          <input type="submit" value="Buscar" />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
