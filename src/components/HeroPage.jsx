import HeroButtons from "./HeroButtons"

function HeroPage() {
  return (

    <>


<div className="inline-flex items-center gap-2 rounded-full bg-ankive-lavender px-5 py-2">
  <span className="text-xl">🚀</span>
  <span className="text-sm font-bold text-ankive-purple">
    The Local Business Platform
  </span>
</div>
   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold leading-[1.15] tracking-tight text-ankive-navy">
     Connect Local{" "}
     <span className="text-ankive-purple">
       Businesses
     </span>
     <br />
     and{" "}
     <span className="relative inline-block text-ankive-orange">
       Customers
   
   <svg
     className="absolute -bottom-3 left-[40%] h-5 w-[60%]"
     viewBox="0 0 200 20"
     preserveAspectRatio="none"
     aria-hidden="true"
   >
     <path
       d="M3 17 Q95 3 197 10 Q115 8 3 19 Z"
       fill="#FF6500"
     />
   </svg>
   
     </span>{" "}
     Online.
   </h1>

<p className="mt-5 max-w-[600px] text-base font-medium leading-relaxed text-ankive-navy/80 sm:text-lg xl:text-xl">
  Websites, orders and bookings — all in one place.
</p>

   <HeroButtons />
 
   </>
  )
}
export default HeroPage