import React from 'react'

export type DocsFilterIconProps = React.SVGAttributes<SVGElement>

export const DocsFilterIcon: React.FC<DocsFilterIconProps> = ({ ...props }) => {
  return (
    <svg
      height="24px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M594.944 0l335.124 341.32v563.2c0 65.996-52.5 119.48-117.294 119.48H209.546c-64.793 0-117.299-53.53-117.299-119.48V119.48C92.252 53.484 144.757 0 209.551 0h385.393z"
        fill="#5895FF"
      />
      <path
        d="M930.068 341.32H718.152c-64.748 0-123.208-59.49-123.208-125.492V0l335.124 341.32z"
        fill="#FFFFFF"
        fillOpacity=".4"
      />
      <path
        d="M427.377 725.32V768H259.814v-42.68h167.563zM594.944 640v42.68h-335.13V640h335.13z m0-85.32v42.64h-335.13v-42.64h335.13z m0-85.36V512h-335.13v-42.68h335.13z"
        fill="#FFFFFF"
      />
    </svg>
  )
}
