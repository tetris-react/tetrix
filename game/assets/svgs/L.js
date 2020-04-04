import React from 'react';

export const L = ({
  width = '26.0vh',
  height = '15.0vh',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '-55 5 225 125',
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
          d="M60 109H11L11 60H60V109Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M158 60H109V11H158V60Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M109 60H60V11H109V60Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M60 60H11L11 11H60V60Z"
          fill="#FFC107"
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
            values="0 0 0 0 1 0 0 0 0 0.756863 0 0 0 0 0.027451 0 0 0 1 0"
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
