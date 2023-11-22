import Link from 'next/link';

export default function Navbar(props: { hideNav?: boolean }) {
  let navItems = (
    <div className="flex items-center space-x-4 flex-col sm:flex-row mt-4 sm:mt-0">
      <NavbarItem>KONTAKT</NavbarItem>
      <NavbarItem>TEAM</NavbarItem>
      <NavbarItem>INTERAKTIVT</NavbarItem>
      <NavbarItem>UNDERVISNING</NavbarItem>
    </div>
  );

  let blurb = (
    <div className="flex-grow mx-8 prose-xl text-center sm:text-left">
      <p>
        Utvikling og publisering av spill og interaktive opplevelser,
        undervisning og opplæring.
      </p>
    </div>
  );

  return (
    <nav className="bg-white p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between py-4 flex-col sm:flex-row mx-auto max-w-screen-2xl">
        <div className="flex-shrink-0">
          <NavbarItem className="bg-leik-red px-2">LEIK</NavbarItem>
        </div>
        {!props.hideNav ? navItems : blurb}
      </div>
      <hr className="my-8 h-0.5 border-t-0 bg-black opacity-100 max-w-screen-2xl mx-auto" />
    </nav>
  );
}

function NavbarItem(props: { children: React.ReactNode; className?: string }) {
  return (
    <Link
      href="/"
      className={props.className + ' text-black no-underline text-3xl'}
    >
      {props.children}
    </Link>
  );
}
