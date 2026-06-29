import railsSvg from '/assets/rails.svg'
import inertiaSvg from '/assets/inertia.svg'
import reactSvg from '/assets/react.svg'

export default function Footer({ first_name, last_name }) {
  return (
    <footer className="flex flex-col px-20 py-22">
      <div className="flex justify-between items-center">
        <h1 className="font-space-grotesk font-medium text-[52px] tracking-[-1.04px] leading-[54.6px]">Let's build something <br></br> durable. <a href={`mailto:${first_name.toLowerCase()}.${last_name.toLowerCase()}@gmail.com`} className="text-[oklch(0.8_0.15_155)]">
  {first_name.toLowerCase()}.{last_name.toLowerCase()}@gmail.com →</a>
        </h1>
        <ul className="font-jetbrains-mono flex flex-col gap-[12px] text-[14px] text-[rgb(134,134,139)]">
          <li className="hover:text-[rgb(237,237,238)] transition-colors duration-300"><a href="/github">GITHUB</a></li>
          <li className="hover:text-[rgb(237,237,238)] transition-colors duration-300"><a href="/linkedin">LINKEDIN</a></li>
        </ul>
      </div>
      {/* <div className="mt-auto">
        <p>Made with ❤️ with RoR <a href="https://rubyonrails.org" target="_blank">
          <img
            className="w-5 h-5 inline-block h-[9.8vw] min-h-[130px] [will-change:filter] transition-[filter] duration-300 [filter:drop-shadow(0_20px_13px_rgb(0_0_0/0.03))_drop-shadow(0_8px_5px_rgb(0_0_0/0.08))] hover:[filter:drop-shadow(0_0_2em_rgb(211_0_1/0.6))] dark:[filter:drop-shadow(0_20px_13px_rgb(255_255_255/0.03))_drop-shadow(0_8px_5px_rgb(255_255_255/0.08))]"
            alt="Ruby on Rails Logo"
            src={railsSvg} />
          </a> + Inertia.js <a href="https://inertia-rails.dev" target="_blank">
            <img
              className="w-5 h-5 inline-block h-[9.8vw] min-h-[130px] will-change:filter] transition-[filter] duration-300 [filter:drop-shadow(0_20px_13px_rgb(0_0_0/0.03))_drop-shadow(0_8px_5px_rgb(0_0_0/0.08))] hover:[filter:drop-shadow(0_0_2em_#646cffaa)] dark:[filter:drop-shadow(0_20px_13px_rgb(255_255_255/0.03))_drop-shadow(0_8px_5px_rgb(255_255_255/0.08))]"
              src={inertiaSvg}
              alt="Inertia logo" />
          </a> + React.js <a href="https://react.dev" target="_blank">
            <img
              className="w-5 h-5 inline-block h-[9.8vw] min-h-[130px] [will-change:filter] transition-[filter] duration-300 [filter:drop-shadow(0_20px_13px_rgb(0_0_0/0.03))_drop-shadow(0_8px_5px_rgb(0_0_0/0.08))] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)] dark:[filter:drop-shadow(0_20px_13px_rgb(255_255_255/0.03))_drop-shadow(0_8px_5px_rgb(255_255_255/0.08))] motion-safe:animate-[logo-spin_20s_linear_infinite]"
              src={reactSvg}
              alt="React logo"
            />
          </a>
        </p>
      </div> */}
    </footer>
  )
}
