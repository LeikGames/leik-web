import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import IndexNavButton from './components/IndexNavButton';

export default function Home() {
  return (
    <main className="prose prose-xl px-6 mx-auto max-w-screen-2xl">
      <div className="mt-12 mb-12 flex flex-col sm:items-end space-y-2 index-nav">
        <IndexNavButton className="bg-leik-red">Kontakt</IndexNavButton>
        <IndexNavButton className="bg-leik-blue">Team</IndexNavButton>
        <IndexNavButton className="bg-leik-gray">Interaktivt</IndexNavButton>
        <IndexNavButton className="bg-leik-yellow">Undervisning</IndexNavButton>
      </div>
      :==0
    </main>
  );
}
