import React, { FC } from 'react';


interface JsonOutputProps {
  data: any
}



const JsonOutput: FC<JsonOutputProps> = ({ data }) => {
  return (
    <textarea readOnly value={JSON.stringify(data, null, 2)} style={{ width: '100%', height: '200px' }} />
  )
}


export default JsonOutput 
