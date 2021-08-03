export default interface IFormValidator<T> {
  (form: T): Object
}