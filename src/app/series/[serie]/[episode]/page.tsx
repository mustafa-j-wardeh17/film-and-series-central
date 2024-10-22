import React from 'react'
import { capitalize } from '../../../../../lib/util'
import { Metadata } from 'next'
export async function generateMetadata({ params: { serie, episode } }: { params: { serie: string, episode: string } }): Promise<Metadata> {
    return {
        title: capitalize(episode) + " - " + capitalize(serie)
    }
}
const Episode = async ({ params: { serie, episode }, searchParams }: { params: { serie: string, episode: string }, searchParams: { [key: string]: string | undefined } }) => {
    return (
        <div>{serie} {episode}</div>
    )
}

export default Episode