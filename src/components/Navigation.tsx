import { useLanguage } from '../context/LanguageContext';
import NavLink from './NavLink';

type NavigationProps = {
  onNavigate?: (section: string) => void;
  activeSection?: string;
};

function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { href: '/#inicio', id: 'inicio', label: t('navigation.inicio') },
    { href: '/proyectos', id: 'proyectos', label: t('navigation.proyectos') },
    { href: '/contacto', id: 'contacto', label: t('navigation.contacto') }
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
