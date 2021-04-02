import { Children, HTMLAttributes, useEffect, useState } from 'react';
import { a, useTransition } from 'react-spring';

export default function Cycle({
  children,
  style,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  const [index, setIndex] = useState(0);
  const [elements] = useState(Children.toArray(children));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const transition = useTransition(elements[index], {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transition((animatedStyles, item) => (
        <a.div
          style={{ position: 'absolute', ...animatedStyles, ...style }}
          {...otherProps}
        >
          {item}
        </a.div>
      ))}
    </>
  );
}
