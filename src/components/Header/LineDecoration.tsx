import { cn } from '../../utils/cn';

export function LineDecoration() {
  return (
    <div
      className="relative h-[30px] bg-[#262628] desktop:h-9"
      style={{
        boxShadow:
          '0px 10px 5px 2px rgba(255, 255, 255, 0.50), 0px 0px 10px 6px #000 inset',
      }}
    >
      <div
        className={cn(
          'flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#262628] desktop:h-20 desktop:w-20',
          'absolute -top-[11px] left-[50%] -translate-x-1/2 desktop:-top-[22px]',
          'shadow-[0_0_5px_3px_#000_inset]',
        )}
      >
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full bg-white desktop:h-[60px] desktop:w-[60px]',
            'shadow-[-3px_-4px_4px_2px_rgba(0,0,0,0.25)_inset]',
          )}
        >
          <div
            className={cn(
              'h-[22px] w-[22px] rounded-full bg-white desktop:h-8 desktop:w-8',
              'drop-shadow-[2px_7px_6px_rgba(0,0,0,0.25)]',
            )}
          />
        </div>
      </div>
    </div>
  );
}
