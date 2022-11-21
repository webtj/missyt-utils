type EmptyFunction = () => void;
type StringOrother<T> = T extends number ? string : T;
type NumberOrother<T> = T extends string ? number : T;
export { EmptyFunction, StringOrother, NumberOrother };
