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
//import { useForm, Controller } from "react-hook-form";
import { GameForm } from "./GameForm";
import { ScoreForm } from "./ScoreForm";
import { SalesForm } from "./SalesForm";
import { ConsolesForm } from "./ConsolesForm";
import { useState } from "react";
//import { FormData } from "./FormData";
import { GenreForm } from "./GenreForm";
import {
  /*Console, Genre,*/ Rating,
  TextSearchType,
} from "src/generated/graphql";

// a top level form component that houses
// subforms to adjust the search fields
// according to game, scores, and sales data
export const QueryForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //const { register, control, handleSubmit } = useForm<FormData>();

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
  //const [consoles, updateConsoles] = useState<Console[]>([]);

  // set up state for genres
  //const [genres, updateGenres] = useState<Genre[]>([]);

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
                <Tab>Game</Tab>
                <Tab>Consoles</Tab>
                <Tab>Genres</Tab>
                <Tab>Scores</Tab>
                <Tab>Sales</Tab>
              </TabList>
              <form onSubmit={() => {}}>
                <TabPanels>
                  <TabPanel>
                    <GameForm
                      title={title}
                      updateTitle={updateTitle}
                      textSearchType={textSearchType}
                      updateTextSearchType={updateTextSearchType}
                      ratings={ratings}
                      updateRatings={updateRatings}
                      yearRange={yearRange}
                      updateYearRange={updateYearRange}
                      publisher={publisher}
                      updatePublisher={updatePublisher}
                      developer={developer}
                      updateDeveloper={updateDeveloper}
                    />
                  </TabPanel>

                  <TabPanel>
                    <ConsolesForm />
                  </TabPanel>

                  <TabPanel>
                    <GenreForm />
                  </TabPanel>

                  <TabPanel>
                    <ScoreForm
                      criticScoresRange={criticScoresRange}
                      updateCriticScoresRange={updateCriticScoresRange}
                      userScoresRange={userScoresRange}
                      updateUserScoresRange={updateUserScoresRange}
                    />
                  </TabPanel>

                  <TabPanel>
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
