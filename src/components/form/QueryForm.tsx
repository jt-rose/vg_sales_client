import { Stack, Heading /*useRangeSlider*/ } from "@chakra-ui/react";
import { TextSearchType, Rating } from "../../generated/graphql";
//import { RegisterOptions, useForm } from "react-hook-form";
import { SalesForm } from "./SalesForm";
import { useState } from "react";

export type FormData = {
  title?: string;
  textSearchType: TextSearchType;
  consoles?: Console[];
  yearsRange: [number, number];
  publishers: string[];
  developers: string[];
  genres: string[];
  ratings: Rating[];
  criticScoreRange: [number, number];
  userScoreRange: [number, number];

  // sales
  globalSalesRange: [number, number];
  NASalesRange: [number, number];
  JPNSalesRange: [number, number];
  EUSalesRange: [number, number];
  OtherSalesRange: [number, number];
};

// a top level form component that houses
// subforms to adjust the search fields
// according to game, scores, and sales data
export const QueryForm = () => {
  //const { register, handleSubmit } = useForm<FormData>();

  // set up state for sales regions
  const [globalSales, updateGlobalSales] = useState<number[]>([1, 100]);
  const [NASales, updateNASales] = useState<number[]>([1, 100]);
  const [JPNSales, updateJPNSales] = useState<number[]>([1, 100]);
  const [EUSales, updateEUSales] = useState<number[]>([1, 100]);
  const [otherRegionSales, updateOtherRegionSales] = useState<number[]>([
    1, 100,
  ]);
  /*
  const { state, actions } = useRangeSlider({
    min: 0,
    max: 100,
    defaultValue: [10, 90],
  });
  const { value } = state;
  const { setValueAtIndex } = actions;
*/
  return (
    <form>
      <Stack>
        <Heading>Query Form</Heading>
        <div>Game</div>
        <div>Scores</div>
        <SalesForm
          globalSales={globalSales}
          updateGlobalSales={updateGlobalSales}
          NASales={NASales}
          updateNASales={updateNASales}
          JPNSales={JPNSales}
          updateJPNSales={updateJPNSales}
          EUSales={EUSales}
          updateEUSales={updateEUSales}
          otherRegionSales={otherRegionSales}
          updateOtherRegionSales={updateOtherRegionSales}
        />
      </Stack>
      <button>submit</button>
    </form>
  );
};
