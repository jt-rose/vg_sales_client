import { Grid, Icon, Button } from "@chakra-ui/react";
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
import { Dispatch, SetStateAction } from "react";
import { toggleFromArray } from "../../utils/toggleFromArray";

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

export const GenreForm = (props: {
  genres: Genre[];
  updateGenres: Dispatch<SetStateAction<Genre[]>>;
}) => {
  const updateGenres = (genre: Genre) => {
    const updatedGenres = toggleFromArray(genre, props.genres);
    props.updateGenres(updatedGenres);
  };
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {genresWithIcons.map((item) => (
        <Button
          leftIcon={<Icon as={item.icon} />}
          variant="outline"
          colorScheme={props.genres.includes(item.genre) ? "blue" : "gray"}
          key={`${item.genre}-button`}
          onClick={() => updateGenres(item.genre)}
        >
          {item.genre}
        </Button>
      ))}
    </Grid>
  );
};
