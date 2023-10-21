"use client"

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export const IpForm = () => {
    const router = useRouter()

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // @ts-ignore
        const ip = `${event?.currentTarget?.querySelector('#input')?.value}`
        if (ip) router.push(`/geolocalization/${ip}`)
    }

    return (
        <form id="form" onSubmit={onSubmit}>
          <label className="flex flex-col mb-5">
            <div className="text-white mb-1">
              IP del Usuario
            </div>
            <input
              id="input"
              type="text"
              placeholder="Introduce aqui la IP"
              className="bg-gray-950 border-2 border-slate-300 p-2 rounded-sm text-slate-200"
            />
            <small className="text-zinc-400 mt-1">Por ejemplo: 168.161.0.1</small>
          </label>
          <button type='submit' className="rounded-md bg-sky-700 p-3 text-slate-200">
            Buscar informacion de esta IP
          </button>
        </form>
     );
}
