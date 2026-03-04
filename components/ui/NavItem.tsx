type NavItemProps = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const NavItem = ({ title, icon: Icon }: NavItemProps) => {
  return (
    <li className="flex pl-10 py-8 items-start hover:bg-secondary hover:text-secondary-foreground hover:border-r-6 cursor-pointer">
      <Icon className="mr-3 w-7 h-7" />
      {title}
    </li>
  );
};
