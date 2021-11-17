import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { Console } from "../../generated/graphql";
import { useAppDispatch /*useAppSelector*/ } from "src/redux/hooks";
import { updateConsoles } from "src/redux/searchParamsReducer";

// Microsoft console logos
import XboxLogo from "public/microsoft/Xbox_2001_(White).svg";
import Xbox360Logo from "public/microsoft/X_Box_360_logo.svg";
import XboxOneLogo from "public/microsoft/X_Box_One_logo.svg";

// Nintendo console logos
import NESLogo from "public/nintendo/NES_logo.svg";
import SNESLogo from "public/nintendo/Super_Nintendo_Entertainment_System_logo.svg";
import N64Logo from "public/nintendo/2560px-Nintendo_64_Logo.svg.png";
import GCLogo from "public/nintendo/Gamecube_Logo_vert.svg";
import WiiLogo from "public/nintendo/Wii.svg";
import WiiULogo from "public/nintendo/WiiU.svg";

// Nintendo handheld logos
import GBLogo from "public/nintendo/Nintendo_Game_Boy_Logo.svg";
import GBALogo from "public/nintendo/Gameboy_advance_logo.svg";
import DSLogo from "public/nintendo/Nintendo_DS_Logo.svg";
import _3DSLogo from "public/nintendo/Nintendo_3ds_logo.svg";

// Sega console + handheld logos
//import SegaMasterSyetemLogo from "";
import GenLogo from "public/sega/Sega_genesis_logo.svg";
import SegaCDLogo from "public/sega/Sega_CD_Logo_USA.png";
import SegaSaturnLogo from "public/sega/SEGA_Saturn_logo.png";
import DreamcastLogo from "public/sega/Dreamcast_logo_(orange).svg";
import GameGearLogo from "public/sega/Game_gear_us-jp_logo.svg";

// Sony console + handheld logos
import PS1Logo from "public/sony/Playstation_logo_colour_and_wordmark.png";
import PS2Logo from "public/sony/PlayStation_2_logo.svg";
import PS3Logo from "public/sony/PlayStation_3_logo_(2009).svg";
import PS4Logo from "public/sony/PlayStation_4_logo_and_wordmark.svg";
import PSPLogo from "public/sony/PSP_Logo.svg";
import PSVitaLogo from "public/sony/PlayStation_Vita_logo.svg";

// other console + handheld logos
import _3DOLogo from "public/other/3DO_Logo.svg";
import WonderswanLogo from "public/other/2560px-WonderSwan_logo.svg.png";
import _2600Logo from "public/other/Atari2600logo.svg";
import PCFXLogo from "public/other/NEC_PC-FX_logo.png";
import NeoGeoLogo from "public/other/Neo-Geo_mvs_logo.png";
import PCSteamLogo from "public/other/Steam_2016_logo_black.svg.png";
import TurboGrafx16Logo from "public/other/TurboGrafx16logo.jpg";

interface ConsoleAndLogo {
  logo: any;
  name: Console;
}

const microsoftConsoles: ConsoleAndLogo[] = [
  {
    logo: XboxLogo,
    name: Console.Xb,
  },
  {
    logo: Xbox360Logo,
    name: Console.X360,
  },
  {
    logo: XboxOneLogo,
    name: Console.Xone,
  },
];

const nintendoConsoles: ConsoleAndLogo[] = [
  { logo: NESLogo, name: Console.Nes },
  { logo: SNESLogo, name: Console.Snes },
  { logo: N64Logo, name: Console.N64 },
  { logo: GCLogo, name: Console.Gc },
  { logo: WiiLogo, name: Console.Wii },
  { logo: WiiULogo, name: Console.Wiiu },
];

const nintendoHandhelds: ConsoleAndLogo[] = [
  { logo: GBLogo, name: Console.Gb },
  { logo: GBALogo, name: Console.Gba },
  { logo: DSLogo, name: Console.Ds },
  { logo: _3DSLogo, name: Console._3Ds },
];

const segaConsoles: ConsoleAndLogo[] = [
  { logo: GenLogo, name: Console.Gen },
  { logo: SegaCDLogo, name: Console.Scd },
  { logo: SegaSaturnLogo, name: Console.Sat },
  { logo: DreamcastLogo, name: Console.Dc },
  { logo: GameGearLogo, name: Console.Gg },
];

const sonyConsoles: ConsoleAndLogo[] = [
  { logo: PS1Logo, name: Console.Ps },
  { logo: PS2Logo, name: Console.Ps2 },
  { logo: PS3Logo, name: Console.Ps3 },
  { logo: PS4Logo, name: Console.Ps4 },
  { logo: PSPLogo, name: Console.Psp },
  { logo: PSVitaLogo, name: Console.Psv },
];

const otherConsoles: ConsoleAndLogo[] = [
  { logo: _3DOLogo, name: Console._3Do },
  { logo: WonderswanLogo, name: Console.Ws },
  { logo: _2600Logo, name: Console._2600 },
  { logo: PCFXLogo, name: Console.Pcfx },
  { logo: NeoGeoLogo, name: Console.Ng },
  { logo: PCSteamLogo, name: Console.Pc },
  { logo: TurboGrafx16Logo, name: Console.Tg16 },
];

// ! add proper alts later
const ConsoleLogoImg = (props: { src: ConsoleAndLogo }) => {
  // will add shading for deselected consoles later
  //const consoles = useAppSelector((state) => state.searchParams.consoles);
  const dispatch = useAppDispatch();
  return (
    <GridItem key={`${props.src}-logo-img`}>
      <Image
        src={props.src.logo}
        alt={props.src.name}
        onClick={() => dispatch(updateConsoles(props.src.name))}
      />
    </GridItem>
  );
};

const LogoImgList = (props: { logoList: ConsoleAndLogo[] }) => {
  return (
    <>
      {props.logoList.map((console, i) => (
        <ConsoleLogoImg src={console} key={`console-${i}-logo`} />
      ))}
    </>
  );
};

const MicrosoftLogos = () => <LogoImgList logoList={microsoftConsoles} />;
const NintendoConsoleLogos = () => <LogoImgList logoList={nintendoConsoles} />;
const NintendoHandheldLogos = () => (
  <LogoImgList logoList={nintendoHandhelds} />
);
const SegaLogos = () => <LogoImgList logoList={segaConsoles} />;
const SonyLogos = () => <LogoImgList logoList={sonyConsoles} />;
const OtherLogos = () => <LogoImgList logoList={otherConsoles} />;

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
