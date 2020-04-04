import React from 'react';

export const S = ({
  width = '26.0vh',
  height = '15.0vh',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '-55 5 225 125'
}) => {
  return (
    <svg
      // style={{ border: '1px solid white' }}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      margin={margin}
      padding={padding}
      preserveAspectRatio="xMaxYMin meet"
    >
      <g filter="url(#filterS_d)">
        <path
          d="M158 11V60H109V11L158 11Z"
          fill="#8BC34A"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M109 11V60H60V11L109 11Z"
          fill="#8BC34A"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M109 60V109H60V60H109Z"
          fill="#8BC34A"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M60 60V109H11V60H60Z"
          fill="#8BC34A"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filterS_d"
          x="0"
          y="0"
          width="auto"
          height="auto"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.545098 0 0 0 0 0.764706 0 0 0 0 0.290196 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
