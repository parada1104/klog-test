import React, { ChangeEvent, FormEvent, useState } from "react";
import IFormValidator from "../interfaces/forms/FormValidator";
import ISearchForm from "../interfaces/forms/SearchForm";

const useForm = (
  initialForm: ISearchForm,
  formValidator: IFormValidator<ISearchForm>
) => {
  const [form, setForm] = useState<ISearchForm>(initialForm);
  const [errors, setErrors] = useState<Object>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("estoy haciendo un submit");
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};
