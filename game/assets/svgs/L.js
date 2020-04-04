import React from 'react';

export const L = ({
  width = '169',
  height = '120',
  fill = 'none',
  margin = '0',
  padding = '0',
  viewBox = '0 0 169 120'
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
          d="M60 109H11L11 60H60V109Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M158 60H109V11H158V60Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M109 60H60V11H109V60Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M60 60H11L11 11H60V60Z"
          fill="#FFC107"
          stroke="#CCCCCC"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.5"
          y="0.5"
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
