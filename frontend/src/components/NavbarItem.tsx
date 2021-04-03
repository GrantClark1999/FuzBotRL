import clsx from 'clsx';

export default function NavbarItem({ name, src }: NavbarItemProps) {
  return (
    <div
      className={clsx(
        'flex-grow-0 flex-shrink-0 mx-0.5 w-9 h-8 bg-gradient-to-t rounded transition-all ease-in from-navbar-gradient-b to-navbar-gradient-t',
        'hover:w-14 hover:bg-white hover:bg-none'
      )}
    >
      <img
        src={src}
        className={clsx(
          'w-full h-full object-contain',
          'hover:filter-menu-active'
        )}
      />
    </div>
  );
}

type NavbarItemProps = {
  name: string;
  src: string;
};
