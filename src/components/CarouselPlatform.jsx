
export default function CarouselPlatform() {
  return (
    <div className="pointer-events-none absolute inset-0">

      {/* Soft purple lighting */}
      <div className="absolute bottom-4 left-1/2 h-28 w-[85%] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-[45px]" />

      {/* Outer glowing orbit */}
      <div
        className="absolute bottom-[65px] left-1/2 h-[155px] w-[96%] rounded-[50%] border-[3px] border-[#FFE8D9] shadow-[0_0_12px_#FFB6F9,0_0_30px_#FF8DEB,0_0_55px_#A020F0] [transform:translateX(-50%)_rotateX(65deg)]"
      />

      {/* Cylindrical platform */}
      <div className="absolute bottom-[35px] left-1/2 h-[65px] w-[76%] -translate-x-1/2">

        {/* Front vertical face */}
        <div className="absolute inset-x-0 bottom-0 h-[45px] rounded-b-[50%] bg-gradient-to-b from-[#A93AFF] via-[#7600DB] to-[#320067] shadow-[0_15px_35px_rgba(109,0,245,0.45)]" />

        {/* Top surface */}
        <div className="absolute -top-[8px] h-[48px] w-full rounded-[50%] border-[3px] border-[#FFD5FF] bg-gradient-to-r from-[#A344FF] via-[#F0A8FF] to-[#7B00E8] shadow-[0_0_25px_rgba(255,150,255,0.75)]" />

        {/* Inner illuminated ring */}
        <div className="absolute left-1/2 top-[4px] h-[25px] w-[65%] -translate-x-1/2 rounded-[50%] border-2 border-white/70 shadow-[0_0_15px_#FFD5FF]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-0 h-[30px] w-[45%] -translate-x-1/2 rounded-full bg-white/40 blur-xl" />
      </div>
    </div>
  );
}