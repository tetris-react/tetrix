import React from 'react';

export const I = ({
  width = '26.0vh',
  height = '15.0vh',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '-10 -20 225 125',
  shadowBlur = '5',
  filterID
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
      <g filter={`url(#filter${filterID}_d)`}>
        <path
          d="M11 11H60V60H11L11 11Z"
          fill="#00BCD4"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M60 11H109V60H60V11Z"
          fill="#00BCD4"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M109 11H158V60H109V11Z"
          fill="#00BCD4"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M158 11H207V60H158V11Z"
          fill="#00BCD4"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id={`filter${filterID}_d`}
          x="0"
          y="0"
          length="auto"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={shadowBlur} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.737255 0 0 0 0 0.831373 0 0 0 1 0"
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
