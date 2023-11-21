import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4 flex-col sm:flex-row">
        <div className="flex-shrink-0">
          <NavbarItem className="bg-leik-red px-2">LEIK</NavbarItem>
        </div>
        <div className="flex items-center space-x-4 flex-col sm:flex-row mt-4 sm:mt-0">
          <NavbarItem>KONTAKT</NavbarItem>
          <NavbarItem>TEAM</NavbarItem>
          <NavbarItem>INTERAKTIVT</NavbarItem>
          <NavbarItem>UNDERVISNING</NavbarItem>
        </div>
      </div>
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
