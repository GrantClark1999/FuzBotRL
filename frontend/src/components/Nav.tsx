import images from 'images';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import NavArrow from './NavArrow';
import NavItem from './NavItem';

// Images to ignore (each side) before overflowing
const numIgnore = 2;

export default function Nav({ onChange }: NavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hiddenWidth, setHiddenWidth] = useState(0);

  useLayoutEffect(() => {
    const shownWidth = navRef.current?.offsetWidth;
    setHiddenWidth(shownWidth ? 40 * images.length - shownWidth + 20 : 0); // 20 = difference between active and inactive
  }, []);

  useEffect(() => {
    const numScrollImages = images.length - 2 * numIgnore;
    const scrollPos =
      activeIndex < numIgnore
        ? 0
        : activeIndex >= images.length - numIgnore
        ? hiddenWidth
        : (hiddenWidth * (activeIndex - numIgnore + 1)) / (numScrollImages + 1);
    console.log(
      `${hiddenWidth} * ${activeIndex - numIgnore + 1} / ${numScrollImages + 1}`
    );
    console.log(scrollPos);
    navRef.current?.scrollTo({ left: scrollPos, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div className="flex bg-navbar shadow-glow">
      <NavArrow
        overflowing={activeIndex >= numIgnore}
        onClick={() =>
          setActiveIndex((prevActive) =>
            prevActive > 0 ? prevActive - 1 : prevActive
          )
        }
      />
      <NavArrow
        right
        overflowing={activeIndex < images.length - numIgnore}
        onClick={() =>
          setActiveIndex((prevActive) =>
            prevActive < images.length - 1 ? prevActive + 1 : prevActive
          )
        }
      />
      <div className="flex flex-1 py-1 w-full overflow-x-scroll" ref={navRef}>
        {images.map((image, index) => (
          <NavItem
            key={index}
            src={image}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

type NavProps = {
  onChange: Dispatch<SetStateAction<string>>;
};
