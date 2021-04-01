import clsx from 'clsx';

export default function RLItem() {
  return (
    <div className="w-32">
      <div
        className={clsx(
          'relative bg-gradient-to-b rounded-lg from-rl-premium-dark to-rl-premium-light aspect-w-13 aspect-h-15',
          'after:absolute after:inset-0 after:border-4 after:border-black after:rounded-lg after:filter-blur after:content-empty'
        )}
      ></div>
    </div>
  );
}
