import Link from "next/link";
import Image from "next/image";
import "@/app/ui/global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-[100vh]">
        <header>
          <span>Logo</span>
          <img
            src="https://via.placeholder.com/303x433.png"
            alt="pic-of-me"
            className="mx-auto "
          />
          <nav className="flex items-center mx-44 md:mx-auto my-5 bg-teal-500 p-6">
            <ul className="contents">
              <li className="flex-1">
                <Link
                  href={{
                    pathname: "/",
                  }}
                >
                  About me
                </Link>
              </li>
              <li className="flex-1">
                <Link
                  href={{
                    pathname: "/career",
                  }}
                >
                  Career
                </Link>
              </li>
              <li className="flex-1">
                <Link
                  href={{
                    pathname: "/projects",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="">
                <Link
                  href={{
                    pathname: "/contact",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className=" p-2 bg-gray-200 flex justify-center items-center">
          <span> &copy; {new Date().getFullYear()} Jahuan Fortes</span>
        </footer>
      </body>
    </html>
  );
}
