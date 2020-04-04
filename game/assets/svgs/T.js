import React from 'react';

export const T = ({
  width = '168',
  height = '119',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '0 0 168 119'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      margin={margin}
      padding={padding}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M157.5 10.5V59.5L108.5 59.5V10.5L157.5 10.5Z"
          fill="#9C27B0"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M108.5 10.5V59.5L59.5 59.5L59.5 10.5L108.5 10.5Z"
          fill="#9C27B0"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M108.5 59.5V108.5H59.5L59.5 59.5L108.5 59.5Z"
          fill="#9C27B0"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M59.5 10.5L59.5 59.5L10.5 59.5L10.5 10.5L59.5 10.5Z"
          fill="#9C27B0"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="168"
          height="119"
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
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 1 0"
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
