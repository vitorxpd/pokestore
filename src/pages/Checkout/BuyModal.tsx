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
          'w-[360px] desktop:w-[818px] px-11 desktop:px-[70px] py-8 desktop:py-[50px]',
          'flex flex-col items-center gap-[50px] desktop:gap-[40px] bg-white rounded-[30px]',
        )}
      >
        <p className="text-sm desktop:text-2xl text-center opacity-60">
          thanks for your preference!
        </p>

        <img
          src={pikachu}
          alt="Pikachu"
          className="w-[184px] desktop:w-[222px] h-[184px] desktop:h-[222px]"
        />

        <p className="text-xs desktop:text-[18px] whitespace-nowrap opacity-60">
          returning to home in {count}
        </p>
      </div>
    </Modal>
  );
}
