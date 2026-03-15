import NavLink from './NavLink';

type NavigationProps = {
  onNavigate?: (section: string) => void;
  activeSection?: string;
};

const NAV_ITEMS = [
  { href: '/#inicio', id: 'inicio', label: 'Inicio' },
  { href: '/proyectos', id: 'proyectos', label: 'Proyectos' },
  { href: '/contacto', id: 'contacto', label: 'Contacto' }
];

function Navigation({ onNavigate, activeSection }: NavigationProps) {
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
