import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { Genre } from "../../generated/graphql";
import {
  GiHighKick,
  GiSteeringWheel,
  GiJumpAcross,
  GiPuzzle,
  GiRollingDices,
  GiReticule,
  GiCommercialAirplane,
  GiAxeSword,
  GiGreekTemple,
  GiConsoleController,
  GiMineExplosion,
  GiSportMedal,
} from "react-icons/gi";

const genresWithIcons: { genre: Genre; icon: any }[] = [
  {
    genre: Genre.Action,
    icon: GiMineExplosion,
  },
  {
    genre: Genre.Adventure,
    icon: GiGreekTemple,
  },
  {
    genre: Genre.Fighting,
    icon: GiHighKick,
  },
  {
    genre: Genre.Misc,
    icon: GiConsoleController,
  },
  {
    genre: Genre.Platform,
    icon: GiJumpAcross,
  },
  {
    genre: Genre.Puzzle,
    icon: GiPuzzle,
  },
  {
    genre: Genre.Racing,
    icon: GiSteeringWheel,
  },
  {
    genre: Genre.Roleplaying,
    icon: GiAxeSword,
  },
  {
    genre: Genre.Shooter,
    icon: GiReticule,
  },
  {
    genre: Genre.Simulation,
    icon: GiCommercialAirplane,
  },
  {
    genre: Genre.Sports,
    icon: GiSportMedal,
  },
  {
    genre: Genre.Strategy,
    icon: GiRollingDices,
  },
];

export const GenreForm = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {genresWithIcons.map((item) => (
        <GridItem key={`${item.genre}-button`}>
          <Icon as={item.icon} />
          {item.genre}
        </GridItem>
      ))}
    </Grid>
  );
};
