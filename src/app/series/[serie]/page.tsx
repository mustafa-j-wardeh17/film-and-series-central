import React from 'react'

const Serie = async ({ params: { serie }, searchParams }: { params: { serie: string }, searchParams: { [key: string]: string | undefined } }) => {
  return (
    <div>Serie : {serie}</div>
  )
}

export default Serie