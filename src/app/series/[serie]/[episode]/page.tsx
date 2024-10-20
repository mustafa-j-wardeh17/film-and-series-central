import React from 'react'

const Episode = async ({ params: { serie, episode }, searchParams }: { params: { serie: string, episode: string }, searchParams: { [key: string]: string | undefined } }) => {
    return (
        <div>Episode</div>
    )
}

export default Episode