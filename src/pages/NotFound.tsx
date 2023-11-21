import { Link } from 'react-router-dom';

import snorlax from '../assets/images/snorlax.svg';

export function NotFound() {
  return (
    <main className="mt-[54px] pb-4">
      <img
        src={snorlax}
        alt="Snorlax"
        className="mx-auto my-0 desktop:w-[400px] desktop:h-[374px]"
      />

      <div className="mt-6 desktop:mt-[26px] flex flex-col items-center gap-1">
        <p className="text-xs desktop:text-base opacity-60">
          error 404: page not found :(
        </p>

        <Link
          to="/"
          className="text-xs desktop:text-base underline opacity-40 block"
        >
          go to home
        </Link>
      </div>
    </main>
  );
}
