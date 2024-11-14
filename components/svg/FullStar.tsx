import * as React from "react";
import Svg, { Path } from "react-native-svg";
export default function FullStar(props: any) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.524.464a.5.5 0 01.952 0L6.235 2.8a.5.5 0 00.475.346h2.458a.5.5 0 01.293.904L7.474 5.495a.5.5 0 00-.182.559l.76 2.337a.5.5 0 01-.77.559L5.294 7.505a.5.5 0 00-.588 0L2.718 8.95a.5.5 0 01-.77-.56l.76-2.336a.5.5 0 00-.182-.56L.54 4.05a.5.5 0 01.294-.904H3.29a.5.5 0 00.475-.346l.76-2.336z"
        fill="#E76D81"
      />
    </Svg>
  );
}
