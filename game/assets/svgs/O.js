import React from 'react';

export const O = ({
  width = '26.0vh',
  height = '15.0vh',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '-105 5 225 125'
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
      <g filter="url(#filterO_d)">
        <path
          d="M108.5 60.5V109.5H59.5V60.5H108.5Z"
          fill="#FFEB3B"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M59.5 60.5V109.5H10.5V60.5H59.5Z"
          fill="#FFEB3B"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M108.5 10.5V59.5H59.5V10.5H108.5Z"
          fill="#FFEB3B"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M59.5 10.5V59.5H10.5V10.5H59.5Z"
          fill="#FFEB3B"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filterO_d"
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
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.921569 0 0 0 0 0.231373 0 0 0 1 0"
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
