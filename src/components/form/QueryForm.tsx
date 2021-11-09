import {
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { GameForm } from "./GameForm";
import { ScoreForm } from "./ScoreForm";
import { SalesForm } from "./SalesForm";
import { useState } from "react";
import { FormData } from "./FormData";

// a top level form component that houses
// subforms to adjust the search fields
// according to game, scores, and sales data
export const QueryForm = () => {
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
    <Tabs>
      <Heading>Query Form</Heading>
      <TabList>
        <Tab>Game</Tab>
        <Tab>Scores</Tab>
        <Tab>Sales</Tab>
      </TabList>
      <form onSubmit={handleSubmit(() => {})}>
        <TabPanels>
          <TabPanel>
            <GameForm register={register} />
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
  );
};
