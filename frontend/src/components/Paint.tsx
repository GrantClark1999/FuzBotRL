import clsx from 'clsx';
import { HTMLAttributes } from 'react';

// Paints that should have black text for contrast
const blackText = ['LIME', 'ORANGE', 'TITANIUM_WHITE', 'SAFFRON'];

export default function Paint({
  children: name,
  className,
  ...props
}: PaintProps) {
  return (
    <div className="font-rl">
      <p
        className={clsx(
          'px-1.5 py-0.5 rounded-md',
          // Text Color
          blackText.includes(name) ? 'text-black' : 'text-white',
          // Background Color
          `bg-paint-${name.toLowerCase()}`,
          className
        )}
        {...props}
      >
        {name.replace('_', ' ')}
      </p>
    </div>
  );
}

type PaintProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children: Paint;
};
