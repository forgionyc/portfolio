import { Head } from '@inertiajs/react'
import { useState, version as react_version } from 'react'

import railsSvg from '/assets/rails.svg'
import inertiaSvg from '/assets/inertia.svg'
import reactSvg from '/assets/react.svg'

export default function InertiaExample({ rails_version, ruby_version, rack_version, inertia_rails_version }) {
  const [count, setCount] = useState(0)

  return (
    <div className="items-center bg-[#F0E7E9] bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxNDQwIDEwMjQiIHdpZHRoPSIxNDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNDQwIDUxMC4wMDA2NDh2LTUxMC4wMDA2NDhoLTE0NDB2Mzg0LjAwMDY0OGM0MTcuMzExOTM5IDEzMS4xNDIxNzkgODkxIDE3MS41MTMgMTQ0MCAxMjZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+')] bg-center bg-no-repeat bg-cover text-[#261B23] flex flex-col font-sans text-[length:calc(0.9em+0.5vw)] font-normal justify-center leading-tight min-h-screen text-center dark:bg-[#1a1a1a] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxNDQwIDEwMjQiIHdpZHRoPSIxNDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNDQwIDUxMC4wMDA2NDh2LTUxMC4wMDA2NDhoLTE0NDB2Mzg0LjAwMDY0OGM0MTcuMzExOTM5IDEzMS4xNDIxNzkgODkxIDE3MS41MTMgMTQ0MCAxMjZ6IiBmaWxsPSIjMzMzIi8+PC9zdmc+')] dark:text-[#e0e0e0]">
      <Head title="Ruby on Rails + Inertia + React" />

      <nav>
        <a href="https://rubyonrails.org" target="_blank">
          <img
            className="inline-block h-[9.8vw] min-h-[130px] p-[1.5em] [will-change:filter] transition-[filter] duration-300 [filter:drop-shadow(0_20px_13px_rgb(0_0_0/0.03))_drop-shadow(0_8px_5px_rgb(0_0_0/0.08))] hover:[filter:drop-shadow(0_0_2em_rgb(211_0_1/0.6))] dark:[filter:drop-shadow(0_20px_13px_rgb(255_255_255/0.03))_drop-shadow(0_8px_5px_rgb(255_255_255/0.08))]"
            alt="Ruby on Rails Logo"
            src={railsSvg} />
        </a>
        <a href="https://inertia-rails.dev" target="_blank">
          <img
            className="inline-block h-[9.8vw] min-h-[130px] p-[1.5em] [will-change:filter] transition-[filter] duration-300 [filter:drop-shadow(0_20px_13px_rgb(0_0_0/0.03))_drop-shadow(0_8px_5px_rgb(0_0_0/0.08))] hover:[filter:drop-shadow(0_0_2em_#646cffaa)] dark:[filter:drop-shadow(0_20px_13px_rgb(255_255_255/0.03))_drop-shadow(0_8px_5px_rgb(255_255_255/0.08))]"
            src={inertiaSvg}
            alt="Inertia logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            className="inline-block h-[9.8vw] min-h-[130px] p-[1.5em] [will-change:filter] transition-[filter] duration-300 [filter:drop-shadow(0_20px_13px_rgb(0_0_0/0.03))_drop-shadow(0_8px_5px_rgb(0_0_0/0.08))] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)] dark:[filter:drop-shadow(0_20px_13px_rgb(255_255_255/0.03))_drop-shadow(0_8px_5px_rgb(255_255_255/0.08))] motion-safe:animate-[logo-spin_20s_linear_infinite]"
            src={reactSvg}
            alt="React logo"
          />
        </a>
      </nav>

      <div className="p-[2em] text-[0.7em] text-[#948e90]">
        <button
          className="p-2 rounded-[0.5em] border border-white bg-white/10 text-[0.8em] cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_2em_rgb(211_0_1/0.6)]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is <strong>{count}</strong>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-8 mb-8">
        <div className="p-[2em] text-[0.7em] text-[#948e90]">
          <p>
            Edit <code>app/javascript/pages/inertia_example/index.jsx</code> and save to test <abbr title="Hot Module Replacement">HMR</abbr>.
          </p>
        </div>

        <ul className="list-none">
          <li className="inline">
            <ul className="list-none">
              <li className="inline after:content-['_|_'] after:font-light after:text-[#948e90] last:after:content-['']"><strong>Rails version:</strong> {rails_version}</li>
              <li className="inline after:content-['_|_'] after:font-light after:text-[#948e90] last:after:content-['']"><strong>Rack version:</strong> {rack_version}</li>
            </ul>
          </li>
          <li className="inline"><strong>Ruby version:</strong> {ruby_version}</li>
          <li className="inline">
            <ul className="list-none">
              <li className="inline after:content-['_|_'] after:font-light after:text-[#948e90] last:after:content-['']"><strong>Inertia Rails version:</strong> {inertia_rails_version}</li>
              <li className="inline after:content-['_|_'] after:font-light after:text-[#948e90] last:after:content-['']"><strong>React version:</strong> {react_version}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
