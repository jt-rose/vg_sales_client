import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { Console } from "../../generated/graphql";
import { Dispatch, SetStateAction } from "react";
import { toggleFromArray } from "../../utils/toggleFromArray";

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

type UpdateConsolesDispatch = Dispatch<SetStateAction<Console[]>>;

const ConsoleLogoImg = (props: {
  src: ConsoleAndLogo;
  selectedConsoles: Console[];
  updateConsoles: UpdateConsolesDispatch;
}) => {
  const updateConsoles = (console: Console) => {
    const updatedConsoles = toggleFromArray(console, props.selectedConsoles);
    props.updateConsoles(updatedConsoles);
  };
  return (
    <GridItem key={`${props.src}-logo-img`}>
      <Image
        src={props.src.logo}
        onClick={() => updateConsoles(props.src.name)}
      />
    </GridItem>
  );
};

const createLogoImgList =
  (logoList: ConsoleAndLogo[]) =>
  (props: {
    selectedConsoles: Console[];
    updateConsoles: UpdateConsolesDispatch;
  }) => {
    return (
      <>
        {logoList.map((console, i) => (
          <ConsoleLogoImg
            src={console}
            selectedConsoles={props.selectedConsoles}
            key={`console-${i}-logo`}
            updateConsoles={props.updateConsoles}
          />
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

export const ConsolesForm = (props: {
  selectedConsoles: Console[];
  updateConsoles: UpdateConsolesDispatch;
}) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <NintendoConsoleLogos
        selectedConsoles={props.selectedConsoles}
        updateConsoles={props.updateConsoles}
      />
      <NintendoHandheldLogos
        selectedConsoles={props.selectedConsoles}
        updateConsoles={props.updateConsoles}
      />
      <SegaLogos
        selectedConsoles={props.selectedConsoles}
        updateConsoles={props.updateConsoles}
      />
      <SonyLogos
        selectedConsoles={props.selectedConsoles}
        updateConsoles={props.updateConsoles}
      />
      <MicrosoftLogos
        selectedConsoles={props.selectedConsoles}
        updateConsoles={props.updateConsoles}
      />
      <OtherLogos
        selectedConsoles={props.selectedConsoles}
        updateConsoles={props.updateConsoles}
      />
    </Grid>
  );
};
