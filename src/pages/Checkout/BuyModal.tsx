import { useEffect, useState } from 'react';

import pikachu from '../../assets/pikachu.svg';
import { Modal } from '../../components/Modal';
import { cn } from '../../utils/cn';

interface BuyModalProps {
  isOpen: boolean;
  onReset: () => void;
}

export function BuyModal({ isOpen, onReset }: BuyModalProps) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timeoutId = setTimeout(() => {
      if (count > 1) {
        setCount((prevState) => prevState - 1);
      }

      if (count === 1) {
        onReset();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, isOpen, onReset]);

  return (
    <Modal open={isOpen}>
      <div
        className={cn(
          'w-[360px] px-11 py-8 desktop:w-[818px] desktop:px-[70px] desktop:py-[50px]',
          'flex flex-col items-center gap-[50px] rounded-[30px] bg-white desktop:gap-[40px]',
        )}
      >
        <p className="text-center text-sm opacity-60 desktop:text-2xl">
          thanks for your preference!
        </p>

        <img
          src={pikachu}
          alt="Pikachu"
          className="h-[184px] w-[184px] desktop:h-[222px] desktop:w-[222px]"
        />

        <p className="whitespace-nowrap text-xs opacity-60 desktop:text-[18px]">
          returning to home in {count}
        </p>
      </div>
    </Modal>
  );
}
