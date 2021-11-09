import { TextSearchType, Console, Rating } from "../../generated/graphql";
import { UseFormRegister } from "react-hook-form";

export type FormData = {
  title?: string;
  textSearchType: TextSearchType;
  consoles?: Console[];
  startingYear: number;
  endingYear: number;
  publishers: string[];
  developers: string[];
  genres: string[];
  ratings: Rating[];
};

export type FormRegister = UseFormRegister<FormData>;
