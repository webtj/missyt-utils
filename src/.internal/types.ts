type EmptyFunction = () => void;
type paramsFunction = (param: any, ...arg: []) => void;
type StringOrother<T> = T extends number ? string : T;
type NumberOrother<T> = T extends string ? number : T;
export { EmptyFunction, paramsFunction, StringOrother, NumberOrother };
