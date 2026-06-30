export default function Navbar({ first_name, last_name }) {
  return (
    <nav className="flex sticky top-0 z-50 w-full bg-[rgb(10,10,11)] justify-between items-center px-20 py-8 border-b border-b-[rgb(30,30,33)]">
      <div className="flex items-center gap-2.5">   {/* the logo group */}
        <span className="w-2 h-2 rounded-full bg-[oklch(0.8_0.15_155)] [box-shadow:oklch(0.8_0.15_155)_0_0_12px_0]"></span>
        <div className="font-jetbrains-mono text-[rgb(237,237,238)] text-[14px]">{first_name.toLowerCase()}.{last_name.toLowerCase()}</div>
      </div>
      <ul className="font-jetbrains-mono text-[13px] flex justify-center items-center gap-10 text-[rgb(134,134,139)]">
        <li className="hover:text-[rgb(237,237,238)] transition-colors duration-300"><a href="/">work</a></li>
        <li className="hover:text-[rgb(237,237,238)] transition-colors duration-300"><a href="/writing">writing</a></li>
        <li className="hover:text-[rgb(237,237,238)] transition-colors duration-300"><a href="/about">about</a></li>
        <li className="hover:text-[rgb(237,237,238)] transition-colors duration-300"><a href="/contact">contact</a></li>
      </ul>
    </nav>
  )
}
