type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

function NavLink({ href, label, isActive = false, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (!onClick) {
          return;
        }

        e.preventDefault();
        onClick();
      }}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {label}
    </a>
  );
}

export default NavLink;
