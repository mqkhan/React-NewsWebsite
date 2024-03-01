import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
        {/*
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-start text-xl ">
          <Link href="/" className="text-gray-200 mr-4 no-underline">
            Home
          </Link>
          <Link href="/sports" className="text-gray-200 mr-4 no-underline">
            Sports
          </Link>
          <Link href="/business" className="text-gray-200 no-underline">
            Business
          </Link>
        </div>
  </nav> */}
      <div className="container justify-between mx-auto py-2 my-4 sm:my-6 w-full xl:max-w-[80%] 2xl:max-w-[50%]">
        {children}</div>
    </div>
  );
}
