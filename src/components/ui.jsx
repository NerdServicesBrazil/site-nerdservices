/* Peças pequenas reaproveitadas pelas seções. */
export function SectionHead({ eyebrow, title, accent, text, center = false, id }) {
  return (
    <div className={`reveal max-w-3xl mb-12 md:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={id} className="h-sec mt-4 mb-4">
        {title} {accent && <span className="hl">{accent}</span>}
      </h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 text-brand-l shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* Selo da OmniNerd AI (logo oficial em public/brand) */
export function AiMark({ className = 'h-6 w-6' }) {
  return <img src="/brand/omninerd-ai-mini-dark.svg" alt="" className={className} width="24" height="24" />;
}
