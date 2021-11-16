import {
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { GameForm } from "./GameForm";
import { ScoreForm } from "./ScoreForm";
import { SalesForm } from "./SalesForm";
import { ConsolesForm } from "./ConsolesForm";
import { useState } from "react";
import { GenreForm } from "./GenreForm";
import {
  Console,
  Genre,
  PaginatedQueryOptions,
  Rating,
  TextSearchType,
  useGenreSalesQuery,
} from "src/generated/graphql";

// a top level form component that houses
// subforms to adjust the search fields
// according to game, scores, and sales data
export const QueryForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // set up state for game parameters
  const [title, updateTitle] = useState<string>("");
  const [textSearchType, updateTextSearchType] = useState<TextSearchType>(
    TextSearchType.Equals
  );
  const [ratings, updateRatings] = useState<Rating[]>([
    Rating.Ao,
    Rating.E,
    Rating.E10Plus,
    Rating.Ec,
    Rating.KA,
    Rating.M,
    Rating.Rp,
    Rating.T,
  ]);
  const [yearRange, updateYearRange] = useState<[number, number]>([1970, 2016]);
  const [publisher, updatePublisher] = useState<string>("");
  const [developer, updateDeveloper] = useState<string>("");

  // set up state for consoles
  const [consoles, updateConsoles] = useState<Console[]>([
    Console._3Do,
    Console._3Ds,
    Console.Dc,
    Console.Ds,
    Console.Gb,
    Console.Gba,
    Console.Gc,
    Console.Gen,
    Console.Gg,
    Console.N64,
    Console.Nes,
    Console.Ng,
    Console.Pc,
    Console.Pcfx,
    Console.Ps,
    Console.Ps2,
    Console.Ps3,
    Console.Ps4,
    Console.Psp,
    Console.Psv,
    Console.Sat,
    Console.Scd,
    Console.Snes,
    Console.Tg16,
    Console.Wii,
    Console.Wiiu,
    Console.Ws,
    Console.X360,
    Console.Xb,
    Console.Xone,
    Console._2600,
  ]);

  // set up state for genres
  const [genres, updateGenres] = useState<Genre[]>([
    Genre.Action,
    Genre.Adventure,
    Genre.Fighting,
    Genre.Misc,
    Genre.Platform,
    Genre.Puzzle,
    Genre.Racing,
    Genre.Roleplaying,
    Genre.Shooter,
    Genre.Simulation,
    Genre.Sports,
    Genre.Strategy,
  ]);

  // set up state for critic and user scores
  const [criticScoresRange, updateCriticScoresRange] = useState<number[]>([
    0, 100,
  ]);
  const [userScoresRange, updateUserScoresRange] = useState<number[]>([0, 100]);

  // set up state for sales regions
  const [globalSales, updateGlobalSales] = useState<number[]>([0, 100]);
  const [NASales, updateNASales] = useState<number[]>([0, 100]);
  const [JPNSales, updateJPNSales] = useState<number[]>([0, 100]);
  const [EUSales, updateEUSales] = useState<number[]>([0, 100]);
  const [otherRegionSales, updateOtherRegionSales] = useState<number[]>([
    0, 100,
  ]);

  // the options for the query will be stored here and updated
  // when clicking the submit button
  // which will automatically trigger the 'useSalesQuery' hook to retrieve the new data
  // this intermediate state is needed so a new call to the database is not made
  // every single time one of the form items is updated
  // and is instead held off until the actual submit button is clicked
  const [queryOptions, updateQueryOptions] = useState<PaginatedQueryOptions>({
    limit: 10,
    offset: 0,
    where: {},
    groupBy: [],
    orderBy: [],
  });
  const onSubmit = () => {
    updateQueryOptions({
      limit: 10, // change later
      offset: 0, // change later
      // add groupby and order by later
      where: {
        console: consoles,
      },
    });
  };

  const { data, error, loading } = useGenreSalesQuery({
    variables: {
      options: queryOptions,
    },
  });
  console.log(data);
  if (loading) {
    console.log("fetching");
  }

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Search
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>Query Form</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab key="game-tab">Game</Tab>
                <Tab key="consoles-tab">Consoles</Tab>
                <Tab key="genres-tab">Genres</Tab>
                <Tab key="scores-tab">Scores</Tab>
                <Tab key="sales-tab">Sales</Tab>
              </TabList>
              <form onSubmit={onSubmit}>
                <TabPanels>
                  <TabPanel key="game-panel">
                    <GameForm
                      title={title}
                      updateTitle={updateTitle}
                      textSearchType={textSearchType}
                      updateTextSearchType={updateTextSearchType}
                      selectedRatings={ratings}
                      updateRatings={updateRatings}
                      yearRange={yearRange}
                      updateYearRange={updateYearRange}
                      publisher={publisher}
                      updatePublisher={updatePublisher}
                      developer={developer}
                      updateDeveloper={updateDeveloper}
                    />
                  </TabPanel>

                  <TabPanel key="console-panel">
                    <ConsolesForm
                      selectedConsoles={consoles}
                      updateConsoles={updateConsoles}
                    />
                  </TabPanel>

                  <TabPanel key="genre-panel">
                    <GenreForm
                      selectedGenres={genres}
                      updateGenres={updateGenres}
                    />
                  </TabPanel>

                  <TabPanel key="score-panel">
                    <ScoreForm
                      criticScoresRange={criticScoresRange}
                      updateCriticScoresRange={updateCriticScoresRange}
                      userScoresRange={userScoresRange}
                      updateUserScoresRange={updateUserScoresRange}
                    />
                  </TabPanel>

                  <TabPanel key="sales-panel">
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
                  </TabPanel>
                </TabPanels>
                <button>submit</button>
              </form>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
