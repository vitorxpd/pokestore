import toast from 'react-hot-toast';

export function feedback(text: string) {
  toast(text, {
    className: 'text-[10px] desktop:text-sm text-center',
  });
}
