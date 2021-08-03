import { ChangeEvent, FormEvent } from "react";

export default interface IUseForm {
  hanldeChange(e: ChangeEvent<HTMLInputElement>): void
  handleSubmit(e: FormEvent<HTMLFormElement>): void
}