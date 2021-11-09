import {
  FormLabel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export const SearchRangeSlider = (props: {
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
