export  interface DataModel<T> {
  isSucess: boolean;
  currentPage: number;
  pageCount: number;
  errorMessage: string;
  data: T;
}
