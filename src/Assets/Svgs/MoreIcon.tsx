import React from 'react';
import Svg, {Circle, G} from 'react-native-svg';
import {Colors} from '../../Constants/colors';

import {SVGImageProps} from '../../Models/SVGIconProps';

const MoreIcon = ({width, height, color}: SVGImageProps) => {
  return (
    <Svg width={width} height={height}>
      <G
        data-name="Group 9431"
        transform="translate(-317.137 -547.119)"
        fill={color}>
        <Circle
          data-name="Ellipse 123"
          cx={2}
          cy={2}
          r={2}
          transform="translate(317.137 547.119)"
        />
        <Circle
          data-name="Ellipse 124"
          cx={2}
          cy={2}
          r={2}
          transform="translate(317.137 555.119)"
        />
        <Circle
          data-name="Ellipse 125"
          cx={2}
          cy={2}
          r={2}
          transform="translate(317.137 563.119)"
        />
      </G>
    </Svg>
  );
};

MoreIcon.defaultProps = {
  width: 4,
  height: 20,
  color: Colors.grayBG,
};

export default MoreIcon;
