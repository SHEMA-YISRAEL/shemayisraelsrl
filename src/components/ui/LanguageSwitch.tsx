interface Props {
  lang: 'es' | 'en';
}

export default function LanguageSwitch({ lang }: Props) {
  const toggleLang = () => {
    const currentPath = window.location.pathname;
    let newPath: string;

    if (lang === 'es') {
      newPath = `/en${currentPath}`;
    } else {
      newPath = currentPath.replace(/^\/en/, '') || '/';
    }

    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 text-xs font-medium transition-all duration-200"
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-sm">{lang === 'es' ? '🇺🇸' : '🇪🇸'}</span>
      <span>{lang === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
}
