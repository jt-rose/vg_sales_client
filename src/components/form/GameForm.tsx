import {
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  Select,
} from "@chakra-ui/react";
import {
  TextSearchType,
  Console,
  Genre,
  //Rating,
} from "../../generated/graphql";
import { FormRegister } from "./FormData";

export const GameForm = (props: { register: FormRegister }) => {
  const { register } = props;
  return (
    <div>
      {/*    Title Input     */}
      <FormLabel htmlFor="title">Title</FormLabel>
      <Input
        key="title-input"
        placeHolder="Enter a title to search for..."
        {...register("title")}
      />

      {/*    Text Search Type Input     */}
      <RadioGroup>
        <Stack direction="row">
          <Radio {...register("textSearchType")} value={TextSearchType.Equals}>
            equals
          </Radio>
          <Radio
            {...register("textSearchType")}
            value={TextSearchType.Contains}
          >
            contains
          </Radio>
          <Radio
            {...register("textSearchType")}
            value={TextSearchType.Startswith}
          >
            starts with
          </Radio>
          <Radio
            {...register("textSearchType")}
            value={TextSearchType.Endswith}
          >
            ends with
          </Radio>
        </Stack>
      </RadioGroup>

      <label htmlFor="consoles">Consoles:</label>
      <select {...register("consoles")} id="consoles">
        <option value={undefined}>Select...</option>
        {Object.keys(Console).map((console) => (
          <option value={console} key={console}>
            {console}
          </option>
        ))}
      </select>

      <label htmlFor="genres">Genres:</label>
      <select {...register("genres")} id="genres">
        <option value={undefined}>Select...</option>
        {Object.keys(Genre).map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>

      <FormLabel htmlFor="years">Years</FormLabel>
      <Flex>
        <Select
          {...register("startingYear")}
          defaultValue={1970}
          variant="flushed"
        >
          <option value={1970}>1970</option>
          <option value={1971}>1971</option>
          <option value={1972}>1972</option>
        </Select>
        {" - "}
        <Select
          {...register("endingYear")}
          defaultValue={1980}
          variant="flushed"
        >
          <option value={1980}>1980</option>
          <option value={1981}>1981</option>
          <option value={1982}>1982</option>
        </Select>
      </Flex>

      <p>rating</p>

      {/* add search suggestion */}
      <FormLabel htmlFor="publishers">Publishers</FormLabel>
      <Input
        key="publishers-input"
        placeHolder="Enter a publisher to search for..."
        {...register("publishers")}
      />

      {/* add search suggestion */}
      <FormLabel htmlFor="developers">Developers</FormLabel>
      <Input
        key="developers-input"
        placeHolder="Enter a developer to search for..."
        {...register("developers")}
      />
    </div>
  );
};
