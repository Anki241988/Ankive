
import {
  Laptop,
  ShoppingCart,
  CalendarDays,
  Layers3,
  ShieldCheck,
} from "lucide-react";

function FeatureBar() {
  return (
    <section
      aria-label="Ankive platform features"
      className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1500px]
                 rounded-3xl border-2 border-white/90
                 bg-white/75 px-4 py-5
                 shadow-[0_6px_25px_rgba(109,0,245,0.18)]
                 backdrop-blur-lg
                 xl:rounded-full xl:px-6"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">

     
        <div className="flex min-w-0 items-center justify-center gap-2">
          <Laptop
            className="h-9 w-9 shrink-0 text-ankive-purple"
            strokeWidth={2.4}
          />
          <span className="text-center text-xs font-bold leading-tight text-ankive-navy xl:text-sm">
            Professional Website
          </span>
        </div>

       
        <div className="flex min-w-0 items-center justify-center gap-2">
          <ShoppingCart
            className="h-9 w-9 shrink-0 text-ankive-orange"
            strokeWidth={2.4}
          />
          <span className="text-center text-xs font-bold leading-tight text-ankive-navy xl:text-sm">
            Online Orders
          </span>
        </div>

      
        <div className="flex min-w-0 items-center justify-center gap-2">
          <CalendarDays
            className="h-9 w-9 shrink-0 text-ankive-purple"
            strokeWidth={2.4}
          />
          <span className="text-center text-xs font-bold leading-tight text-ankive-navy xl:text-sm">
            Bookings
          </span>
        </div>

        
        <div className="flex min-w-0 items-center justify-center gap-2">
          <Layers3
            className="h-9 w-9 shrink-0 text-ankive-purple"
            strokeWidth={2.4}
          />
          <span className="text-center text-xs font-bold leading-tight text-ankive-navy xl:text-sm">
            Easy Management
          </span>
        </div>

        
        <div className="flex min-w-0 items-center justify-center gap-2 sm:col-span-2 xl:col-span-1">
          <ShieldCheck
            className="h-9 w-9 shrink-0 text-ankive-purple"
            strokeWidth={2.4}
          />
          <span className="text-center text-xs font-bold leading-tight text-ankive-navy xl:text-sm">
            Secure & Reliable
          </span>
        </div>

      </div>
    </section>
  );
}

export default FeatureBar;
