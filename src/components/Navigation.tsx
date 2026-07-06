import { useLanguage } from '../context/LanguageContext';
import NavLink from './NavLink';

type NavigationProps = {
  onNavigate?: (section: string) => void;
  activeSection?: string;
};

function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const { t, language } = useLanguage();

  const NAV_ITEMS = [
    { href: '/#inicio', id: 'inicio', label: t('navigation.inicio') },
    { href: '/sobre-mi', id: 'sobre-mi', label: t('navigation.sobre') },
    { href: language === 'en' ? '/wordpress-en' : '/wordpress', id: 'wordpress', label: t('navigation.wordpress') },
    { href: '/proyectos', id: 'proyectos', label: t('navigation.proyectos') },
    { href: language === 'en' ? '/contacto-en' : '/contacto', id: 'contacto', label: t('navigation.contacto') }
  ];

  return (
    <nav className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-8 justify-center">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={activeSection === item.id}
          onClick={onNavigate && item.href.startsWith('/#') ? () => onNavigate(item.id) : undefined}
        />
      ))}
    </nav>
  );
}

export default Navigation;
