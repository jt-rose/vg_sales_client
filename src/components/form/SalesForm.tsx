//import { UseFormRegister } from "react-hook-form";
//import { FormData } from "./QueryForm";
import {
  FormLabel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const SalesRangeSlider = (props: {
  label: string;
  values: number[];
  updateValues: Dispatch<SetStateAction<number[]>>;
}) => {
  return (
    <div>
      <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[15, 30]}
        onChangeEnd={(values) => {
          console.log(values);
          props.updateValues(values);
        }}
        values={props.values}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </div>
  );
};

// updateForm: UseFormRegister<FormData>
export const SalesForm = (props: {
  globalSales: number[];
  updateGlobalSales: Dispatch<SetStateAction<number[]>>;
  NASales: number[];
  updateNASales: Dispatch<SetStateAction<number[]>>;
  JPNSales: number[];
  updateJPNSales: Dispatch<SetStateAction<number[]>>;
  EUSales: number[];
  updateEUSales: Dispatch<SetStateAction<number[]>>;
  otherRegionSales: number[];
  updateOtherRegionSales: Dispatch<SetStateAction<number[]>>;
}) => {
  return (
    <div>
      <SalesRangeSlider
        label="Global Sales"
        values={props.globalSales}
        updateValues={props.updateGlobalSales}
      />
      <SalesRangeSlider
        label="North American Sales"
        values={props.NASales}
        updateValues={props.updateNASales}
      />
      <SalesRangeSlider
        label="Japanese Sales"
        values={props.JPNSales}
        updateValues={props.updateJPNSales}
      />
      <SalesRangeSlider
        label="European Sales"
        values={props.EUSales}
        updateValues={props.updateEUSales}
      />
      <SalesRangeSlider
        label="Other Region Sales"
        values={props.otherRegionSales}
        updateValues={props.updateOtherRegionSales}
      />
    </div>
  );
};
