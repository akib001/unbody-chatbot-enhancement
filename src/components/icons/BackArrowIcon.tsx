import React from 'react'

export type BackArrowIconProps = React.SVGAttributes<SVGElement>

export const BackArrowIcon: React.FC<BackArrowIconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      width="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0"
        clip-rule="evenodd"
      ></path>
    </svg>
  )
}
