import { IpForm } from "@/components/ip-form"

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-gray-950">
      <div className="p-5">
        <IpForm />
        <div className="mt-5">
          <div className="bg-gray-900 p-1 text-gray-400">
            <pre>
              {JSON.stringify({}, null, 2)}
            </pre>
          </div>
        I</div>
      </div>
    </div>
  )
}
