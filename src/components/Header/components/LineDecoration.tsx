import { cn } from '../../../utils/cn';

export function LineDecoration() {
  return (
    <div
      className="h-[30px] desktop:h-9 bg-[#262628] relative"
      style={{
        boxShadow:
          '0px 10px 5px 2px rgba(255, 255, 255, 0.50), 0px 0px 10px 6px #000 inset',
      }}
    >
      <div
        className={cn(
          'w-[52px] h-[52px] desktop:w-20 desktop:h-20 bg-[#262628] flex justify-center items-center rounded-full',
          'absolute -top-[11px] desktop:-top-[22px] left-[50%] -translate-x-1/2',
          'shadow-[0_0_5px_3px_#000_inset]',
        )}
      >
        <div
          className={cn(
            'w-10 h-10 desktop:w-[60px] desktop:h-[60px] bg-white flex justify-center items-center rounded-full',
            'shadow-[-3px_-4px_4px_2px_rgba(0,0,0,0.25)_inset]',
          )}
        >
          <div
            className={cn(
              'w-[22px] h-[22px] desktop:w-8 desktop:h-8 bg-white rounded-full',
              'drop-shadow-[2px_7px_6px_rgba(0,0,0,0.25)]',
            )}
          />
        </div>
      </div>
    </div>
  );
}
