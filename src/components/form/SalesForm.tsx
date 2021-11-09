import { SearchRangeSlider } from "./SearchRangeSlider";
import { Dispatch, SetStateAction } from "react";

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
      <SearchRangeSlider
        label="Global Sales"
        values={props.globalSales}
        updateValues={props.updateGlobalSales}
      />
      <SearchRangeSlider
        label="North American Sales"
        values={props.NASales}
        updateValues={props.updateNASales}
      />
      <SearchRangeSlider
        label="Japanese Sales"
        values={props.JPNSales}
        updateValues={props.updateJPNSales}
      />
      <SearchRangeSlider
        label="European Sales"
        values={props.EUSales}
        updateValues={props.updateEUSales}
      />
      <SearchRangeSlider
        label="Other Region Sales"
        values={props.otherRegionSales}
        updateValues={props.updateOtherRegionSales}
      />
    </div>
  );
};
