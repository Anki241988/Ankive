
import { Store, Check, ArrowRight } from "lucide-react";
import ownerImage from "../assets/image/shopkeeper.png";

function BuisnessOwnerCard() {
  return (
    <div
      className="flex min-w-0 flex-col overflow-hidden rounded-[32px]
                 border border-white/90 bg-gradient-to-br
                 from-ankive-lavender via-purple-50 to-white
                 p-4 shadow-[0_8px_30px_rgba(109,0,245,0.12)]
                 sm:p-5 xl:flex-row xl:items-center xl:gap-5"
    >
      {/* Left Section - buisness Owner Image */}
      <div className="w-full shrink-0 xl:w-[45%]">
        <img
          src={ownerImage}
          alt="ShopkeeperImage"
          className="h-64 w-full rounded-[28px] object-cover
                     sm:h-72 xl:h-[290px]"
        />
      </div>

      {/* Right Section - buisness Owner Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center py-5 xl:py-2">

        {/* Heading */}
        <div className="mb-3 flex items-center gap-3">
          <Store
            className="h-9 w-9 shrink-0 text-ankive-purple"
            strokeWidth={2.5}
          />

          <h2 className="text-2xl font-extrabold tracking-tight text-ankive-navy">
            For buisness Owners
          </h2>
        </div>

        {/* Description */}
        <p className="mb-4 text-base font-medium leading-snug text-ankive-navy">
          Create, manage and grow your buisness online.
        </p>

        {/* Features */}
        <ul className="mb-6 space-y-3">
          <li className="flex items-center gap-3">
            <Check
              className="h-6 w-6 shrink-0 text-ankive-purple"
              strokeWidth={4}
            />
            <span className="text-sm font-semibold text-ankive-navy sm:text-base">
              Get a professional website
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Check
              className="h-6 w-6 shrink-0 text-ankive-purple"
              strokeWidth={4}
            />
            <span className="text-sm font-semibold text-ankive-navy sm:text-base">
              Accept orders & bookings
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Check
              className="h-6 w-6 shrink-0 text-ankive-purple"
              strokeWidth={4}
            />
            <span className="text-sm font-semibold text-ankive-navy sm:text-base">
              Manage your buisness easily
            </span>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex w-fit items-center justify-center gap-3
                     rounded-full bg-gradient-to-r
                     from-ankive-purple to-fuchsia-600
                     px-6 py-3 text-sm font-bold text-white
                     shadow-[0_6px_18px_rgba(109,0,245,0.25)]
                     transition-transform duration-300
                     hover:-translate-y-1 hover:text-white
                     sm:text-base"
        >
          Get Started as Owner
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default BuisnessOwnerCard;
