import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-8 text-center">
        <Link href="/components/display-name">
          Click me if you wanna know my name.
        </Link>
      </div>
    </>
  );
}
