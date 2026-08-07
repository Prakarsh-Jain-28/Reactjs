import React from "react"

function Card({name="Upload Data",btn="Upload Now"})
{
    return(
        <>
        <div className="flex items-center justify-center mt-10">
            <div className="max-w-sm bg-gray-50 rounded-xl overflow-hidden shadow-lg p-12">

                <div className="flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/XF1wRjj/upload-file.png" alt="" class="w-24" />
                <div className="px-6 py-4 text-center">
                    <div className="font-semibold text-lg">{name}</div>
                    <p className="text-gray-400 text-xs max-w-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestias eligendi excepturi.
                    </p>
                </div>
                <button className="px-6 py-3 mx-auto bg-indigo-500 rounded-xl shadow-lg text-white font-semibold text-sm tracking-wide">{btn}</button>
                </div>
            </div>
          </div>
        </>
    )
}

export default Card