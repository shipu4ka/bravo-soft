import { createContext } from "react";
import { IConstructor, IApplication } from "./models";

interface IGlobalContext {
  constructors: IConstructor[];
  setConstructors: (arg: IConstructor[]) => void;
  applications: IApplication[];
  setApplications: (arg: IApplication[]) => void;
  currentUser: string;
  setCurrentUser: (arg: string) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  constructors: [],
  setConstructors: () => {},
  applications: [],
  setApplications: () => {},
  currentUser: "",
  setCurrentUser: () => {},
});
