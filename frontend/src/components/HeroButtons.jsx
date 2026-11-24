import { Store, ArrowRight } from "lucide-react";
import {Link} from "react-router-dom"

function HeroButtons() {
  return (
 <div className="hero-buttons ">
     
      <Link to="/Login" className="hero-btn business-btn">
       <Store className="hero-btn-icon " strokeWidth={2.5} />

        <span className="hero-btn-text">
          <strong>For Business Owners</strong>
          <span>Get Your Business Online</span>
        </span>

          <ArrowRight className="hero-btn-arrow" />
      </Link>

     
    </div>
  )
}
export default HeroButtons