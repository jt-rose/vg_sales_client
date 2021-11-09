import { SearchRangeSlider } from "./SearchRangeSlider";
import { Dispatch, SetStateAction } from "react";

export const ScoreForm = (props: {
  criticScoresRange: number[];
  updateCriticScoresRange: Dispatch<SetStateAction<number[]>>;
  userScoresRange: number[];
  updateUserScoresRange: Dispatch<SetStateAction<number[]>>;
}) => {
  return (
    <div>
      <SearchRangeSlider
        label="Average of Critic Scores"
        values={props.criticScoresRange}
        updateValues={props.updateCriticScoresRange}
      />
      <SearchRangeSlider
        label="Average of User Scores"
        values={props.userScoresRange}
        updateValues={props.updateUserScoresRange}
      />
    </div>
  );
};
