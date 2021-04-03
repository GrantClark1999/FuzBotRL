import images from 'images';

import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className="flex px-2 py-1 w-full overflow-hidden bg-navbar shadow-glow">
      {images.map((image) => (
        <NavbarItem name="" src={image} />
      ))}
    </div>
  );
}
