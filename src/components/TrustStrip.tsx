const partners = [
  { name: 'OpenAI',     label: 'OpenAI' },
  { name: 'Anthropic',  label: 'Anthropic' },
  { name: 'n8n',        label: 'n8n' },
  { name: 'Make',       label: 'Make.com' },
  { name: 'Zapier',     label: 'Zapier' },
  { name: 'WhatsApp',   label: 'WhatsApp API' },
  { name: 'SAP',        label: 'SAP Business One' },
  { name: 'Supabase',   label: 'Supabase' },
  { name: 'Pipedrive',  label: 'Pipedrive CRM' },
  { name: 'Cursor',     label: 'Cursor AI' },
  { name: 'HubSpot',    label: 'HubSpot' },
  { name: 'Lovable',    label: 'Lovable' },
];

const TrustStrip = () => {
  // Duplicate for seamless loop
  const all = [...partners, ...partners];

  return (
    <div className="py-12 border-y border-white/6 overflow-hidden"
         style={{ background: 'rgba(17,24,39,0.6)' }}>
      <p className="text-center text-xs tracking-widest uppercase text-brand-muted mb-8 px-4">
        Tecnologias e plataformas que dominamos
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to right, rgba(17,24,39,0.9), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to left, rgba(17,24,39,0.9), transparent)' }} />

        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {all.map((p, i) => (
            <div
              key={i}
              className="mx-6 flex items-center gap-2 px-5 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 hover:border-brand-indigo/40"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'Exo 2, sans-serif',
              }}
            >
              <span className="text-sm font-semibold text-brand-muted hover:text-white transition-colors">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
