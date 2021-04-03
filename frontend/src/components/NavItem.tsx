import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export default function NavItem({ src, active, ...props }: NavbarItemProps) {
  return (
    <div
      className={clsx(
        'flex-grow-0 flex-shrink-0 mx-0.5 w-9 h-8 rounded cursor-pointer transition-all duration-250',
        'hover:bg-white hover:bg-none',
        active
          ? 'w-14 bg-none bg-white'
          : 'from-navbar-gradient-b to-navbar-gradient-t bg-gradient-to-t'
      )}
      {...props}
    >
      <img
        src={src}
        className={clsx(
          'w-full h-full object-contain',
          'hover:filter-menu-active',
          active && 'filter-menu-active'
        )}
      />
    </div>
  );
}

type NavbarItemProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  active?: boolean;
};
