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
import { useForm } from "react-hook-form";
import { GameForm } from "./GameForm";
import { ScoreForm } from "./ScoreForm";
import { SalesForm } from "./SalesForm";
import { ConsolesForm } from "./ConsolesForm";
import { useState } from "react";
import { FormData } from "./FormData";

// a top level form component that houses
// subforms to adjust the search fields
// according to game, scores, and sales data
export const QueryForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm<FormData>();

  // set up state for game parameters
  /*const [ title, updateTitle] = useState<string>('')
  const [ , updateTitle] = useState<string>('')
  const [ title, updateTitle] = useState<string>('')
  const [ title, updateTitle] = useState<string>('')
  const [ startingYear, updateStartingYear] = useState<number>(1970)
  const [ endingYear, updateEndingYear] = useState<number>(2016)
  const [ publishers, updatePublishers] = useState<string[]>([])
  const [ developers, updateDevelopers] = useState<string[]>([])*/

  // set up state for critic and user scores
  const [criticScoresRange, updateCriticScoresRange] = useState<number[]>([
    1, 100,
  ]);
  const [userScoresRange, updateUserScoresRange] = useState<number[]>([1, 100]);

  // set up state for sales regions
  const [globalSales, updateGlobalSales] = useState<number[]>([1, 100]);
  const [NASales, updateNASales] = useState<number[]>([1, 100]);
  const [JPNSales, updateJPNSales] = useState<number[]>([1, 100]);
  const [EUSales, updateEUSales] = useState<number[]>([1, 100]);
  const [otherRegionSales, updateOtherRegionSales] = useState<number[]>([
    1, 100,
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
                <Tab>Scores</Tab>
                <Tab>Sales</Tab>
              </TabList>
              <form onSubmit={handleSubmit(() => {})}>
                <TabPanels>
                  <TabPanel>
                    <GameForm register={register} />
                  </TabPanel>

                  <TabPanel>
                    <ConsolesForm />
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
