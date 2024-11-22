export interface IConstructor {
  id: number;
  name: string;
}

export interface IApplication {
  id: number;
  constructorId: number;
  documentName: string;
}
