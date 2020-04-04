import React from 'react';

export const J = ({
  width = '26.0vh',
  height = '15.0vh',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '-55 5 225 125',
  shadowBlur = '7.5',
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
          d="M162.5 64.5V113.5H113.5V64.5H162.5Z"
          fill="#3F51B5"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M64.5 15.5V64.5H15.5V15.5H64.5Z"
          fill="#3F51B5"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M113.5 15.5V64.5H64.5V15.5H113.5Z"
          fill="#3F51B5"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M162.5 15.5V64.5H113.5V15.5H162.5Z"
          fill="#3F51B5"
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
            values="0 0 0 0 0.247059 0 0 0 0 0.317647 0 0 0 0 0.709804 0 0 0 1 0"
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
