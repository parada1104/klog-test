import React, { ChangeEvent, FormEvent, useState } from "react";
import IFormValidator from "../interfaces/forms/FormValidator";
import ISearchForm from "../interfaces/forms/SearchForm";

const useForm = (
  initialForm: ISearchForm,
  formValidator: IFormValidator<ISearchForm> | undefined = undefined
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

  const handleBlur = (e: FormEvent<HTMLInputElement>): void => {
    if(formValidator){
      setErrors(formValidator(form))
    }
  };

  const isAllCompleted = ():boolean => {
    const formValues = Object.values(form)
    let isCompleted: boolean = true

    for(let value in formValues){
      if(!value){
        isCompleted = false
        break;
      }
    }
    return isCompleted
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errorsCount: number = Object.keys(errors).length;
    if (errorsCount > 0 || !isAllCompleted()) {
      alert("Revisa todos los campos");
      return;
    }

    console.log("estoy haciendo un submit");
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleSubmit,
    handleBlur
  };
};

export default useForm;
