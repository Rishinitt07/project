import React from "react"


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b9e7f4a1fe48400790a362c6de406e4a&response_type=code&redirect_uri=http://localhost:5173/playlist?&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Playauth() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "79vh" }}
    >
      <a className="btn btn-success btn-lg text-white" href={AUTH_URL}>
        <button className="bg-green-500 absolute ml-[40%] top-4 mt-10 text-xl text-black h-10 rounded-3xl ">
        click here to search songs

        </button>
        

      </a>
    </div>
  )
}