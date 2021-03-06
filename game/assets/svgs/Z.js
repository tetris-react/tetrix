import React from 'react';

export const Z = ({
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
          d="M108.5 59.5H157.5V108.5H108.5V59.5Z"
          fill="#F44336"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M59.5 59.5H108.5V108.5H59.5V59.5Z"
          fill="#F44336"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M59.5 10.5H108.5V59.5H59.5V10.5Z"
          fill="#F44336"
          stroke="#CCCCCC"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 10.5H59.5V59.5H10.5V10.5Z"
          fill="#F44336"
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
            values="0 0 0 0 0.956863 0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 1 0"
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
