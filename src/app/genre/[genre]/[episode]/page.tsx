import React from 'react'

const Episode = async ({ params: { genre, episode }, searchParams }: { params: { genre: string, episode: string }, searchParams: { [key: string]: string | undefined } }) => {
    return (
        <div>Episode</div>
    )
}

export default Episode