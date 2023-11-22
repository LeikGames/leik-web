import Link from 'next/link';

export default function IndexNavButton(props: {
  children: string;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={
        props.className + ' text-black no-underline text-3xl text-center py-1'
      }
    >
      {props.children.toUpperCase()}
    </Link>
  );
}
