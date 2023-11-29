import { createGlobalStyle } from "styled-components";

// import NeueMachinaBlack from "./NeueMachina/NeueMachina-Black.woff";
// import NeueMachinaBlack2 from "./NeueMachina/NeueMachina-Black.woff2";
// import NeueMachinaBold from "./NeueMachina/NeueMachina-Bold.woff";
// import NeueMachinaBold2 from "./NeueMachina/NeueMachina-Bold.woff2";
// import NeueMachinaLight from "./NeueMachina/NeueMachina-Light.woff";
// import NeueMachinaLight2 from "./NeueMachina/NeueMachina-Light.woff2";
import NeueMachinaMedium from "./NeueMachina/NeueMachina-Medium.woff";
import NeueMachinaMedium2 from "./NeueMachina/NeueMachina-Medium.woff2";
// import NeueMachinaRegular from "./NeueMachina/NeueMachina-Regular.woff";
// import NeueMachinaRegular2 from "./NeueMachina/NeueMachina-Regular.woff2";
// import NeueMachinaUltrabold from "./NeueMachina/NeueMachina-Ultrabold.woff";
// import NeueMachinaUltrabold2 from "./NeueMachina/NeueMachina-Ultrabold.woff2";
// import NeueMachinaUltralight from "./NeueMachina/NeueMachina-Ultralight.woff";
// import NeueMachinaUltralight2 from "./NeueMachina/NeueMachina-Ultralight.woff2";

export default createGlobalStyle`

@font-face {
  font-family: 'NeueMachina';
  src: local("NeueMachina"), local("NeueMachina")


            url(${NeueMachinaMedium2}) format('woff2'),
       url(${NeueMachinaMedium}) format('woff');
       
       font-weight: 700;
       font-style: normal
}
`;
