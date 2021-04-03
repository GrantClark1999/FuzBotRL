import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavArrow({
  overflowing,
  right,
  className,
  ...props
}: NavArrowProps) {
  return (
    <div
      className={clsx(
        className,
        'relative my-1 px-1 h-8 cursor-pointer from-navbar-arrow',
        // Overflow shading
        'after:absolute after:z-0 after:inset-0 after:opacity-0',
        'after:pointer-events-none after:transition-all after:duration-500',
        'after:content after:from-navbar-overflow',
        right
          ? 'order-last mr-1 rounded-r bg-gradient-to-l'
          : 'order-first ml-1 rounded-l bg-gradient-to-r',
        overflowing && 'after:opacity-100',
        right
          ? 'after:-left-full after:right-full after:bg-gradient-to-l'
          : 'after:left-full after:-right-full after:bg-gradient-to-r'
      )}
      {...props}
    >
      <FontAwesomeIcon
        icon={right ? faChevronRight : faChevronLeft}
        size="lg"
        className="my-auto h-8 filter-glow"
      />
    </div>
  );
}

type NavArrowProps = HTMLAttributes<HTMLDivElement> & {
  overflowing?: boolean;
  right?: boolean;
};
