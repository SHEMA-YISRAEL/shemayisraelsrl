import { useState } from 'react';

interface NavLink {
  href?: string;
  label: string;
  children?: {
    href: string;
    label: string;
    subtitle?: string;
    iconRoute?: string;
  }[];
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0f2337]/98 backdrop-blur-md border-b border-white/10 shadow-xl">
          <nav className="px-4 py-6 flex flex-col gap-2">
            {links.map((link) => (
              <div key={link.label}>
                {!link.children ? (
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-white/80 hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenGroup(openGroup === link.label ? null : link.label)
                      }
                      className="w-full flex justify-between items-center py-2 text-white/80 hover:text-white"
                    >
                      {link.label}
                      <span>{openGroup === link.label ? '−' : '+'}</span>
                    </button>

                    {openGroup === link.label && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-white/70 hover:text-white"
                          >
                            {child.iconRoute} {child.label}
                            {child.subtitle && (
                              <span className="block text-xs text-white/40">
                                {child.subtitle}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}