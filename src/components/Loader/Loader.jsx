import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";
import { createPortal } from "react-dom";
const loaderRoot = document.querySelector("#loader");

const Loader = () => {
  return createPortal(
    <LoaderWrap>
      <ThreeCircles
        height="120"
        width="120"
        color="#3f9c14"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrap>,
    loaderRoot
  );
};

export default Loader;
