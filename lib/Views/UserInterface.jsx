import {
  MenuLeft,
  Nav,
  ExperimentalMenu
} from "leylinesjs/lib/ReactViews/StandardUserInterface/customizable/Groups";
import MenuItem from "leylinesjs/lib/ReactViews/StandardUserInterface/customizable/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import RelatedMaps from "./RelatedMaps";
import SplitPoint from "leylinesjs/lib/ReactViews/SplitPoint";
import StandardUserInterface from "leylinesjs/lib/ReactViews/StandardUserInterface/StandardUserInterface";
import version from "../../version";

import "./global.scss";

// function loadAugmentedVirtuality(callback) {
//   require.ensure(
//     "leylinesjs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool",
//     () => {
//       const AugmentedVirtualityTool = require("leylinesjs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool");
//       callback(AugmentedVirtualityTool);
//     },
//     "AugmentedVirtuality"
//   );
// }

// function isBrowserSupportedAV() {
//   return /Android|iPhone|iPad/i.test(navigator.userAgent);
// }

export default function UserInterface(props) {
  return (
    <StandardUserInterface {...props} version={version}>
      <MenuLeft>
        <MenuItem caption="About" href="about.html" key="about-link" />
        <RelatedMaps viewState={props.viewState} />
      </MenuLeft>
      <ExperimentalMenu>
        {/* <If condition={isBrowserSupportedAV()}>
          <SplitPoint
            loadComponent={loadAugmentedVirtuality}
            viewState={props.viewState}
            terria={props.viewState.terria}
            experimentalWarning={true}
          />
        </If> */}
      </ExperimentalMenu>
    </StandardUserInterface>
  );
}

UserInterface.propTypes = {
  terria: PropTypes.object,
  viewState: PropTypes.object
};
