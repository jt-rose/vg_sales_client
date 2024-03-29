import {
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  Select,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { toggleFromArray } from "src/utils/toggleFromArray";
import { TextSearchType, Rating } from "../../generated/graphql";

export const GameForm = (props: {
  title: string;
  updateTitle: Dispatch<SetStateAction<string>>;
  textSearchType: TextSearchType;
  updateTextSearchType: Dispatch<SetStateAction<TextSearchType>>;
  yearRange: [number, number];
  updateYearRange: Dispatch<SetStateAction<[number, number]>>;
  selectedRatings: Rating[];
  updateRatings: Dispatch<SetStateAction<Rating[]>>;
  publisher: string;
  updatePublisher: Dispatch<SetStateAction<string>>;
  developer: string;
  updateDeveloper: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      {/*    Title Input     */}
      <FormLabel htmlFor="title">Title</FormLabel>
      <Input
        key="title-input"
        placeholder="Enter a title to search for..."
        value={props.title}
        onChange={(e) => props.updateTitle(e.target.value)}
      />

      {/*    Text Search Type Input     */}
      <RadioGroup>
        <Stack direction="row">
          <Radio
            value={TextSearchType.Equals}
            onClick={() => props.updateTextSearchType(TextSearchType.Equals)}
            key={TextSearchType.Equals + "-radio-option"}
            // isChecked control - needed?
          >
            equals
          </Radio>
          <Radio
            value={TextSearchType.Contains}
            onClick={() => props.updateTextSearchType(TextSearchType.Contains)}
            key={TextSearchType.Contains + "-radio-option"}
          >
            contains
          </Radio>
          <Radio
            value={TextSearchType.Startswith}
            onClick={() =>
              props.updateTextSearchType(TextSearchType.Startswith)
            }
            key={TextSearchType.Startswith + "-radio-option"}
          >
            starts with
          </Radio>
          <Radio
            value={TextSearchType.Endswith}
            onClick={() => props.updateTextSearchType(TextSearchType.Endswith)}
            key={TextSearchType.Endswith + "-radio-option"}
          >
            ends with
          </Radio>
        </Stack>
      </RadioGroup>

      <FormLabel htmlFor="years">Years</FormLabel>
      <Flex>
        <Select
          value={props.yearRange[0]}
          variant="flushed"
          onChange={(e) =>
            props.updateYearRange([
              parseInt(e.target.value),
              props.yearRange[1],
            ])
          }
        >
          <option value={1970}>1970</option>
          <option value={1971}>1971</option>
          <option value={1972}>1972</option>
        </Select>
        {" - "}
        <Select
          value={props.yearRange[1]}
          variant="flushed"
          onChange={(e) =>
            props.updateYearRange([
              props.yearRange[0],
              parseInt(e.target.value),
            ])
          }
        >
          <option value={1980}>1980</option>
          <option value={1981}>1981</option>
          <option value={1982}>2016</option>
        </Select>
      </Flex>

      <Wrap>
        {[
          Rating.E,
          Rating.E10Plus,
          Rating.Ec,
          Rating.T,
          Rating.M,
          Rating.Ao,
          Rating.KA,
          Rating.Rp,
        ].map((rating) => (
          <WrapItem key={rating + "-wrap"}>
            <Text
              fontSize="2xl"
              onClick={() =>
                props.updateRatings(
                  toggleFromArray(rating, props.selectedRatings)
                )
              }
            >
              {rating.toUpperCase()}
            </Text>
          </WrapItem>
        ))}
      </Wrap>

      {/* add search suggestion */}
      <FormLabel htmlFor="publisher">Publisher</FormLabel>
      <Input
        key="publisher-input"
        placeholder="Enter a publisher to search for..."
        value={props.publisher}
        onChange={(e) => props.updatePublisher(e.target.value)}
      />

      {/* add search suggestion */}
      <FormLabel htmlFor="developer">Developer</FormLabel>
      <Input
        key="developer-input"
        placeholder="Enter a developer to search for..."
        value={props.developer}
        onChange={(e) => props.updateDeveloper(e.target.value)}
      />
    </div>
  );
};
