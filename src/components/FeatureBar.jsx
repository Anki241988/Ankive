
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
                 bg-white/75 px-4 py-5 shadow-[0_6px_25px_rgba(109,0,245,0.18)]
                 backdrop-blur-lg
                 xl:rounded-full xl:px-6"
    >
      <div className="flex flex-wrap items-center justify-center gap-y-5 xl:flex-nowrap">

        {/* Professional Website */}
        <div className="flex w-full items-center justify-center gap-3 sm:w-1/2 xl:flex-1">
          <Laptop className="h-9 w-9 shrink-0 text-ankive-purple" strokeWidth={2.4} />
          <span className="text-sm font-bold whitespace-nowrap text-ankive-navy xl:text-base">
            Professional Website
          </span>
        </div>

        <div className="hidden h-10 w-px bg-ankive-purple/30 xl:block" />

        {/* Online Orders */}
        <div className="flex w-full items-center justify-center gap-3 sm:w-1/2 xl:flex-1">
          <ShoppingCart className="h-9 w-9 shrink-0 text-ankive-orange" strokeWidth={2.4} />
          <span className="text-sm font-bold whitespace-nowrap text-ankive-navy xl:text-base">
            Online Orders
          </span>
        </div>

        <div className="hidden h-10 w-px bg-ankive-purple/30 xl:block" />

        {/* Bookings */}
        <div className="flex w-full items-center justify-center gap-3 sm:w-1/2 xl:flex-1">
          <CalendarDays className="h-9 w-9 shrink-0 text-ankive-purple" strokeWidth={2.4} />
          <span className="text-sm font-bold whitespace-nowrap text-ankive-navy xl:text-base">
            Bookings
          </span>
        </div>

        <div className="hidden h-10 w-px bg-ankive-purple/30 xl:block" />

        {/* Easy Management */}
        <div className="flex w-full items-center justify-center gap-3 sm:w-1/2 xl:flex-1">
          <Layers3 className="h-9 w-9 shrink-0 text-ankive-purple" strokeWidth={2.4} />
          <span className="text-sm font-bold whitespace-nowrap text-ankive-navy xl:text-base">
            Easy Management
          </span>
        </div>

        <div className="hidden h-10 w-px bg-ankive-purple/30 xl:block" />

        {/* Secure & Reliable */}
        <div className="flex w-full items-center justify-center gap-3 sm:w-1/2 xl:flex-1">
          <ShieldCheck className="h-9 w-9 shrink-0 text-ankive-purple" strokeWidth={2.4} />
          <span className="text-sm font-bold whitespace-nowrap text-ankive-navy xl:text-base">
            Secure & Reliable
          </span>
        </div>

      </div>
    </section>
  );
}

export default FeatureBar;
