import { Link } from 'react-router-dom';

import snorlax from '../assets/snorlax.svg';

export function NotFound() {
  return (
    <main className="mt-[54px] pb-4">
      <img
        src={snorlax}
        alt="Snorlax"
        className="mx-auto my-0 desktop:h-[374px] desktop:w-[400px]"
      />

      <div className="mt-6 flex flex-col items-center gap-1 desktop:mt-[26px]">
        <p className="text-xs opacity-60 desktop:text-base">
          error 404: page not found :(
        </p>

        <Link
          to="/"
          className="block text-xs underline opacity-40 desktop:text-base"
        >
          go to home
        </Link>
      </div>
    </main>
  );
}
