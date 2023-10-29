import React, { FC } from 'react';


interface JsonOutputProps {
  data: any
}


const JsonOutput: FC<JsonOutputProps> = ({ data }) => {
  const formatData = (data: Record<string, any>): string => {
    return Object.entries(data)
      .map([key, value]) => '${key}: ${value}')
      .join('\n')
  };

  return (
    <textarea
      readOnly
      value={formatData(data)}
      style={{ width:: '100%', height: '200px' }}
  )
}



export default JsonOutput 
