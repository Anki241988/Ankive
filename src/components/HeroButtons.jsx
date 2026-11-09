import { Store, UsersRound, ArrowRight } from "lucide-react";

function HeroButtons() {
  return (
 <div className="hero-buttons">
      {/* Business Owners */}
      <a href="#" className="hero-btn business-btn">
       <Store className="hero-btn-icon" strokeWidth={2.5} />

        <span className="hero-btn-text">
          <strong>For Business Owners</strong>
          <span>Get Your Business Online</span>
        </span>

          <ArrowRight className="hero-btn-arrow" />
      </a>

      {/* Customers */}
      <a href="#" className="hero-btn customer-btn">
       <UsersRound className="hero-btn-icon" strokeWidth={2.5} />

        <span className="hero-btn-text">
          <strong>For Customers</strong>
          <span>Discover Local Businesses</span>
        </span>

      <ArrowRight className="hero-btn-arrow" />
      </a>
    </div>
  )
}
export default HeroButtons