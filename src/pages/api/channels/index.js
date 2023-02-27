import {useState, useEffect} from 'react'
import axios from 'axios'
import { getAllChannels } from '@/database'

function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

export default function Channels() {


    useEffect(() => {
        const res = axios.get("/api/channels");
        console.log(res)
    }, [])
    // Get request to /api/channels
    // useState
    // useEffect

    return (
        <div>
            <h1>Channels</h1>
            <ul>
                {channels.map((channel) => (
                    <li key={channel.id}>{channel.name}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {

    // runs on the server
    const channels = await getAllChannels();
    return {
        props: {
            channels: JSON.parse(JSON.stringify(channels))
        }
    }

}