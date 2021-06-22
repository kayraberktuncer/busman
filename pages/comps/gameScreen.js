import { useState } from 'react'

export default function gameScreen({
  name,
  title,
  company,
  info,
  nol,
  setNol,
  setPrice,
  price,
}) {
  const [seconds, setSeconds] = useState(3)

  function pricePlus() {
    setPrice(price + 15)
  }

  function handleClick(event) {
    setSeconds(3)
    if (seconds == 0) {
      pricePlus()
      setNol(nol + 1)
      alert('calisti')
    } else {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    }
    event.preventDefault()
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center py-8">
      <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
        <div id="header" className="flex items-center mb-4">
          <img
            alt="avatar"
            className="w-20 rounded-full border-2 border-gray-300"
            src="https://picsum.photos/seed/picsum/200"
          />
          <div id="profile-name" className="leading-5 ml-6 sm">
            <h4 id="name" className="text-xl font-semibold">
              {name}
            </h4>
            <h5 id="profile-title" className="font-semibold text-blue-600">
              {title}
            </h5>
            <h5 id="profile-company" className="text-gray-500 italic">
              {company}
            </h5>
          </div>
        </div>
        <div id="quote">
          <q className="italic text-gray-600">{info}</q>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div className="w-full lg:w-1/4">
            <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs uppercase font-light text-gray-500">
                    City
                  </div>
                  <div className="text-xl font-bold">
                    <button
                      onClick={handleClick}
                      className="p-4 text-xl font-bold"
                    >
                      İzmir
                    </button>
                    <button
                      onClick={handleClick}
                      className="p-4 text-xl font-bold"
                    >
                      Ankara
                    </button>
                    <button
                      onClick={handleClick}
                      className="p-4 text-xl font-bold"
                    >
                      İstanbul
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs uppercase font-light text-gray-500">
                    Number Of Laps
                  </div>
                  <div className="text-xl font-bold">{nol}</div>
                </div>
                <svg
                  className="stroke-current text-gray-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs uppercase font-light text-gray-500">
                    Price
                  </div>
                  <div className="text-xl font-bold">{price}$</div>
                </div>
                <svg
                  className="stroke-current text-gray-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" x2="21" y1="14" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs uppercase font-light text-gray-500">
                    Watch Time
                  </div>
                  <div className="text-xl font-bold">{seconds}s</div>
                </div>
                <svg
                  className="stroke-current text-gray-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}