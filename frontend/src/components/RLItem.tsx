import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';

import Cycle from './Cycle';
import Edition from './Edition';
import Paint from './Paint';

export default function RLItem({ item, team }: RLItemProps) {
  const { name, src, rarity, paint, bmPaint, edition, primary, accent } = item;
  // Necessary for text shadow to appear properly
  const [textHeight, setTextHeight] = useState(0);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    setTextHeight(nameRef?.current?.offsetHeight ?? 0);
  }, []);

  return (
    <div className="w-5/12 bg-black rounded-lg">
      {/* Team Color / Name */}
      <div
        className={clsx(
          'relative bg-gradient-to-t aspect-w-13 aspect-h-15',
          `from-rarity-${rarity.toLowerCase()}-gradient-b to-rarity-${rarity.toLowerCase()}-gradient-t`,
          // After => Blurred Black Border
          'after:absolute after:z-20 after:-inset-0.5 after:border-4 after:border-black after:rounded-lg after:filter-blur after:content-empty'
        )}
      >
        <img
          src={src}
          className="mx-auto max-w-7/8 h-auto object-contain blend-screen filter-brightness"
          style={{ bottom: textHeight }}
        />
        <div className="absolute z-10 bottom-0 inset-auto flex flex-col h-auto text-center text-base leading-4">
          <Cycle
            className="flex justify-center mb-1.5 w-full"
            style={{ bottom: textHeight }}
          >
            {paint && <Paint>{paint}</Paint>}
            {edition && <Edition rarity={rarity}>{edition}</Edition>}
          </Cycle>
          <p
            ref={nameRef}
            className={`pb-2 border-black text-rarity-${rarity.toLowerCase()} text-shadow`}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

type RLItemProps = {
  item: Item;
  team: 'blue' | 'orange';
};
