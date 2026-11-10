
import { UsersRound, Check, ArrowRight } from "lucide-react";
import CustomerImage from "../assets/image/customer.png";

function CustomerCard() {
  return (
    <div
      className="flex min-w-0 flex-col overflow-hidden rounded-[32px]
                 border border-white/90
                 bg-gradient-to-br from-orange-50 via-orange-50/70 to-white
                 p-4 shadow-[0_8px_30px_rgba(255,101,0,0.12)]
                 sm:p-5 xl:flex-row xl:items-center xl:gap-5"
    >
    
      <div className="w-full shrink-0 xl:w-[45%]">
        <img
          src={CustomerImage}
          alt="CustomerImage"
          className="h-64 w-full rounded-[28px] object-cover
                     sm:h-72 xl:h-[290px]"
        />
      </div>


      <div className="flex min-w-0 flex-1 flex-col justify-center py-5 xl:py-2">

    
        <div className="mb-3 flex items-center gap-3">
          <UsersRound
            className="h-9 w-9 shrink-0 text-ankive-orange"
            strokeWidth={2.5}
          />

          <h2 className="text-2xl font-extrabold tracking-tight text-ankive-navy">
            For Customers
          </h2>
        </div>

        <p className="mb-4 text-base font-medium leading-snug text-ankive-navy">
          Find and order from your favorite local businesses.
        </p>

     
        <ul className="mb-6 space-y-3">
          <li className="flex items-center gap-3">
            <Check
              className="h-6 w-6 shrink-0 text-ankive-orange"
              strokeWidth={4}
            />
            <span className="text-sm font-semibold text-ankive-navy sm:text-base">
              Explore nearby businesses
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Check
              className="h-6 w-6 shrink-0 text-ankive-orange"
              strokeWidth={4}
            />
            <span className="text-sm font-semibold text-ankive-navy sm:text-base">
              Order food, book services
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Check
              className="h-6 w-6 shrink-0 text-ankive-orange"
              strokeWidth={4}
            />
            <span className="text-sm font-semibold text-ankive-navy sm:text-base">
              Support local in your area
            </span>
          </li>
        </ul>

       
        <a
          href="#"
          className="inline-flex w-fit items-center justify-center gap-3
                     rounded-full bg-gradient-to-r
                     from-ankive-orange to-orange-500
                     px-6 py-3 text-sm font-bold text-white
                     shadow-[0_6px_18px_rgba(255,101,0,0.25)]
                     transition-transform duration-300
                     hover:-translate-y-1 hover:text-white
                     sm:text-base"
        >
          Explore Businesses
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default CustomerCard;
