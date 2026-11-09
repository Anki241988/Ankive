import ankiveLogo from '../assets/image/ankivelogo.png'

function Navbar() {
  return (
    <nav className="relative z-50 mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 xl:px-12">
      <div className="flex w-full items-center justify-between gap-2">

        {/* Logo */}
<a href="#" className="flex shrink-0 items-center gap-2">
  <img
    src={ankiveLogo}
    alt=""
    className="h-11 w-auto object-contain xl:h-14"
  />

  <span className="ankive-brand">
    Ankive
    <sup className="brand-symbol">®</sup>
  </span>
</a>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-1 min-[960px]:flex xl:gap-3">
          <a href="#" className="nav-link active">
            Home
          </a>

          <a href="#" className="nav-link">
            Product
            
          </a>

          <a href="#" className="nav-link">
            Solutions
            
          </a>

          <a href="#" className="nav-link">
            For Businesses
          </a>

          <a href="#" className="nav-link">
            Pricing
          </a>

          <a href="#" className="nav-link">
            Resources
          
          </a>
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 min-[960px]:flex xl:gap-4">
          <select
            aria-label="Language"
            defaultValue="DE"
            className="cursor-pointer bg-transparent text-xs text-ankive-navy lg:text-sm"
          >
            <option value="DE">DE</option>
            <option value="EN">EN</option>
          </select>

          <a
            href="#"
            className="cursor-pointer whitespace-nowrap rounded-full border border-ankive-purple px-3 py-2 text-xs font-semibold text-ankive-purple lg:px-4 lg:text-sm"
          >
            Log in
          </a>

          <a href="#" className="get-started-btn">
            Get Started
             <span aria-hidden="true">→</span>
             </a>
        </div>

        {/* Mobile / tablet menu placeholder */}
        <div className="flex items-center justify-center text-2xl text-ankive-navy min-[960px]:hidden">
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
