import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export default function Edition({
  children: name,
  rarity,
  className,
  ...props
}: EditionProps) {
  return (
    <div className="w-full text-white font-rl tracking-wider">
      <p
        className={clsx(
          'py-0.5 w-full bg-gradient-to-r bg-center from-transparent via-black overflow-hidden bg-250',
          `text-shadow-${rarity.toLowerCase()}`,
          className
        )}
        {...props}
      >
        {name.replace('_', ' ')}
      </p>
    </div>
  );
}

type EditionProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children: string;
  rarity: Rarity;
};
