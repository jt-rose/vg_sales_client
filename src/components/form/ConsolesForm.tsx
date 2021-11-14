import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

// Microsoft console log0s
import XboxLogo from "src/img/microsoft/Xbox_2001_(White).svg";
import Xbox360Logo from "src/img/microsoft/X_Box_360_logo.svg";
import XboxOneLogo from "src/img/microsoft/X_Box_One_logo.svg";

// Nintendo console logos
import NESLogo from "src/img/nintendo/NES_logo.svg";
import SNESLogo from "src/img/nintendo/Super_Nintendo_Entertainment_System_logo.svg";
import N64Logo from "src/img/nintendo/2560px-Nintendo_64_Logo.svg.png";
import GCLogo from "src/img/nintendo/Gamecube_Logo_vert.svg";
import WiiLogo from "src/img/nintendo/Wii.svg";
import WiiULogo from "src/img/nintendo/WiiU.svg";

// Nintendo handheld logos
import GBLogo from "src/img/nintendo/Nintendo_Game_Boy_Logo.svg";
import GBALogo from "src/img/nintendo/Gameboy_advance_logo.svg";
import DSLogo from "src/img/nintendo/Nintendo_DS_Logo.svg";
import _3DSLogo from "src/img/nintendo/Nintendo_3ds_logo.svg";

// Sega console + handheld logos
//import SegaMasterSyetemLogo from "";
import GenLogo from "src/img/sega/Sega_genesis_logo.svg";
import SegaCDLogo from "src/img/sega/Sega_CD_Logo_USA.png";
import SegaSaturnLogo from "src/img/sega/SEGA_Saturn_logo.png";
import DreamcastLogo from "src/img/sega/Dreamcast_logo_(orange).svg";
import GameGearLogo from "src/img/sega/Game_gear_us-jp_logo.svg";

// Sony console + handheld logos
import PS1Logo from "src/img/sony/Playstation_logo_colour_and_wordmark.png";
import PS2Logo from "src/img/sony/PlayStation_2_logo.svg";
import PS3Logo from "src/img/sony/PlayStation_3_logo_(2009).svg";
import PS4Logo from "src/img/sony/PlayStation_4_logo_and_wordmark.svg";
import PSPLogo from "src/img/sony/PSP_Logo.svg";
import PSVitaLogo from "src/img/sony/PlayStation_Vita_logo.svg";

// other console + handheld logos
import _3DOLogo from "src/img/other/3DO_Logo.svg";
import WonderswanLogo from "src/img/other/2560px-WonderSwan_logo.svg.png";
import _2600Logo from "src/img/other/Atari2600logo.svg";
import PCFXLogo from "src/img/other/NEC_PC-FX_logo.png";
import NeoGeoLogo from "src/img/other/Neo-Geo_mvs_logo.png";
import PCSteamLogo from "src/img/other/Steam_2016_logo_black.svg.png";
import TurboGrafx16Logo from "src/img/other/TurboGrafx16logo.jpg";

const microsoftConsoles = [XboxLogo, Xbox360Logo, XboxOneLogo];

const nintendoConsoles = [
  NESLogo,
  SNESLogo,
  N64Logo,
  GCLogo,
  WiiLogo,
  WiiULogo,
];
const nintendoHandhelds = [GBLogo, GBALogo, DSLogo, _3DSLogo];

const segaConsoles = [
  GenLogo,
  SegaCDLogo,
  SegaSaturnLogo,
  DreamcastLogo,
  GameGearLogo,
];

const sonyConsoles = [PS1Logo, PS2Logo, PS3Logo, PS4Logo, PSPLogo, PSVitaLogo];

const otherConsoles = [
  _3DOLogo,
  WonderswanLogo,
  _2600Logo,
  PCFXLogo,
  NeoGeoLogo,
  PCSteamLogo,
  TurboGrafx16Logo,
];

const ConsoleLogoImg = (props: { src: any }) => {
  return (
    <GridItem key={`${props.src}-logo-img`}>
      <Image src={props.src} />
    </GridItem>
  );
};

const createLogoImgList = (logoList: any[]) => () => {
  return (
    <>
      {logoList.map((console, i) => (
        <ConsoleLogoImg src={console} key={`console-${i}-logo`} />
      ))}
    </>
  );
};

const MicrosoftLogos = createLogoImgList(microsoftConsoles);
const NintendoConsoleLogos = createLogoImgList(nintendoConsoles);
const NintendoHandheldLogos = createLogoImgList(nintendoHandhelds);
const SegaLogos = createLogoImgList(segaConsoles);
const SonyLogos = createLogoImgList(sonyConsoles);
const OtherLogos = createLogoImgList(otherConsoles);

export const ConsolesForm = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <NintendoConsoleLogos />
      <NintendoHandheldLogos />
      <SegaLogos />
      <SonyLogos />
      <MicrosoftLogos />
      <OtherLogos />
    </Grid>
  );
};
