import React from 'react'
import ReactCurvedText from 'react-curved-text';

function CurvedText({size,text}) {
  return (
    <ReactCurvedText
    width={300}
    height={300}
    cx={150}
    cy={150}
    rx={size}
    ry={size}
    startOffset={50}
    reversed={true}
    text="yyyyyyyy"
    textProps={{ style: { fontSize: 24 } }}
    textPathProps={null}
    tspanProps={null}
    ellipseProps={null}
    svgProps={null}
/>
  )
}

export default CurvedText