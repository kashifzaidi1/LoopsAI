import Logo from "./Logo";

const footerLinks = {
  Products: [
    { label: "BookAI", href: "https://f2320574.bookai-32i.pages.dev/" },
    { label: "SupportAI", href: "#" },
    { label: "LeadAI", href: "#" },
    { label: "Custom AI", href: "#" },
  ],
  Company: [
    { label: "About LoopsAI", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "#case-study" },
    { label: "Documentation", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20 lg:mb-32">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-8">
              <Logo />
            </div>
            <p className="text-[#86868B] text-base font-medium leading-relaxed max-w-xs mb-8">
              AI agents that automate your business. Built for the future of productivity.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#86868B] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-8 text-[#1D1D1F]">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#86868B] text-sm font-semibold hover:text-[#1D1D1F] transition-colors duration-300">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8">
            <p className="text-[#86868B] text-[13px] font-medium">&copy; {new Date().getFullYear()} LoopsAI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#86868B] text-[13px] font-medium hover:text-[#1D1D1F] transition-colors">United States</a>
              <a href="#" className="text-[#86868B] text-[13px] font-medium hover:text-[#1D1D1F] transition-colors">Support</a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-[#1D1D1F] uppercase tracking-wider">
            <span>Built by</span>
            <Logo showWordmark={false} />
            <span>LoopsAI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
