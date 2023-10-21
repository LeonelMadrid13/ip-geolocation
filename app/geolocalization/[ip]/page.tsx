"use client"

import { IpForm } from "@/components/ip-form";
import { useEffect, useState } from 'react'

const GeolocationPage = (
    { params }: { params: { ip: string } }
) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState("");

    const OPTIONS = {
        method: 'GET',
    };

    useEffect(() => {
        // set loading to true before calling fetch
        setIsLoading(true);
        fetch(`https://ipwho.is/${params.ip}`, OPTIONS)
            .then(async (res) => {
                // set the data if the response is successful
                const response = await res.json();
                // console.log(response)
                setData(response);
            })
            .catch((e) => {
                // set the error if there's an error like 404, 400, etc
                if (e instanceof Error) {
                    console.log("[GeolocationPage] Error: ", e.message);
                    setError(e.message);
                }
            })
            .finally(() => {
                // set loading to false after everything has completed.
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="flex justify-center h-screen bg-gray-950">
            <div className="p-5">
                <IpForm />
                <div className="mt-5">
                    <div className="bg-gray-900 p-1 text-gray-400 max-h-[800px] overflow-auto overflow-x-hidden">
                        <pre>
                            {isLoading ? "loading..." : error ? "Error " : JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeolocationPage;