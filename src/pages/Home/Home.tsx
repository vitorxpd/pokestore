import { useEffect, useRef, useState } from 'react';

import { cn } from '../../utils/cn';

import { Card } from './components/Card';
import { FilterButton } from './components/FilterButton';

export function Home() {
  const [filterIsFixed, setFilterIsFixed] = useState(false);

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function scrollMonitor() {
      if (!containerRef.current) {
        return;
      }

      window.scrollY >= containerRef.current.offsetTop
        ? setFilterIsFixed(true)
        : setFilterIsFixed(false);
    }

    window.addEventListener('scroll', scrollMonitor);

    return () => {
      window.removeEventListener('scroll', scrollMonitor);
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="max-w-[1440px] mx-auto my-0 pt-[72px] desktop:pt-11 pb-[30px] desktop:pb-20 px-4 flex justify-center relative"
    >
      <FilterButton
        className={cn(
          'top-2 desktop:top-11 right-[14px] desktop:right-[-18px]',
          filterIsFixed ? 'fixed desktop:absolute' : 'absolute',
        )}
      />

      <ul className="grid grid-cols-[repeat(2,calc(180px+24px))] desktop:grid-cols-[repeat(4,calc(275px+37px))] gap-[14px] desktop:gap-[38px]">
        <Card />
      </ul>
    </main>
  );
}
