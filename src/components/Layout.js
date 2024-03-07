import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="container justify-between mx-auto py-2 my-4 sm:my-6 w-full xl:max-w-[80%] 2xl:max-w-[50%]">
        {children}
      </div>
    </div>
  );
}
