import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

// Microsoft console log0s

// Nintendo console logos
import NESLogo from "../../img/nintendo/NES_logo.svg";
import SNESLogo from "../../img/nintendo/Super_Nintendo_Entertainment_System_logo.svg";
import N64Logo from "../../img/nintendo/2560px-Nintendo_64_Logo.svg.png";
import GCLogo from "../../img/nintendo/Gamecube_Logo_vert.svg";
import WiiLogo from "../../img/nintendo/Wii.svg";
import WiiULogo from "../../img/nintendo/WiiU.svg";

// Nintendo handheld logos

// Sega console + handheld logos

// Sony console + handheld logos

const consoleOrder = [NESLogo, SNESLogo, N64Logo, GCLogo, WiiLogo, WiiULogo];

const ConsoleLogoImg = (props: { src: any }) => {
  return (
    <GridItem key={`${props.src}-logo-img`}>
      <Image src={props.src} />
    </GridItem>
  );
};

export const ConsolesForm = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {consoleOrder.map((console) => (
        <ConsoleLogoImg src={console} />
      ))}
    </Grid>
  );
};
