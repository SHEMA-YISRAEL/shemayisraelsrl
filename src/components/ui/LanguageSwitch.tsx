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

  const isES = lang === 'es';

  return (
    <button
      onClick={toggleLang}
      aria-label={isES ? 'Switch to English' : 'Cambiar a Español'}
      className="
        relative
        flex items-center justify-center
        h-8 min-w-[64px]
        px-2
        rounded-md
        text-xs font-medium tracking-wide
        text-white/70 hover:text-white
        transition-colors duration-200
      "
    >
      <div className="flex items-center justify-center gap-1.5">
        <span
          className={`
            w-6 h-6 flex items-center justify-center
            rounded
            bg-white/5 border border-white/10
          `}
        >
          {isES ? '🇪🇸' : '🇺🇸'}
        </span>

        <span className="leading-none pt-0.5">
          {isES ? 'ES' : 'EN'}
        </span>
      </div>
    </button>
  );
}