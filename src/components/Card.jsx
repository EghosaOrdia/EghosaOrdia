const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 .4 0 0 0 0 .3 0 0 0 0 .2 0 0 0 .5 0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function Card({ no, title, body, icon, className, big }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl p-6 text-[#1c1a17]
        shadow-[0_1px_0_rgba(255,255,255,.7)_inset,0_10px_24px_-12px_rgba(70,45,20,.35)]
        transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-[0_18px_30px_-14px_rgba(70,45,20,.45)]
        motion-reduce:transition-none motion-reduce:hover:transform-none
        after:pointer-events-none after:absolute after:inset-2 after:rounded-xl
        after:border after:border-dashed after:border-[#3c2d19]/30 after:content-['']
        ${className}`}
    >
      {/* paper grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative z-10 flex items-center justify-between font-['Courier_Prime',monospace] text-xs tracking-[0.14em] opacity-70">
        <span>{no}</span>
        <span className="grid h-11 w-11 -rotate-[8deg] place-items-center rounded-full border-[1.5px] border-[#3c2d19]/45">
          <svg
            viewBox="0 0 24 24"
            className="h-[22px] w-[22px] fill-none stroke-[#3b2f20] stroke-[1.6]"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={icon} />
          </svg>
        </span>
      </div>

      <h3 className="relative z-10 mb-2 mt-5 font-['Fraunces',Georgia,serif] text-[22px] font-semibold leading-tight">
        {title}
      </h3>
      <p className="relative z-10 text-[15px] leading-relaxed text-[#4a4236]">
        {body}
      </p>

      {big && (
        <div
          aria-hidden="true"
          className="relative z-10 mt-auto text-right font-['Fraunces',serif] text-[90px] italic leading-[.8] text-[#783c1e]/15 md:text-[150px]"
        >
          {big}
        </div>
      )}
    </article>
  );
}
