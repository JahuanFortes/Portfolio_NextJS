import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
export default async function HomePage() {
  // const data = await fetch("src/constants/webservice.json");
  // const posts = await data.json();
  const articleId = 100;
  return (
    // each articles as article
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {/* img to the left */}
      <Link href={`/${articleId}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              src="https://placehold.co/414x314"
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black-500 font-semibold">
              Company retreats
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Incredible accommodation for your team
            </div>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </Link>

      <div className="md:flex">
        <div className="md:shrink-0 order-1 md:order-2">
          <img
            src="https://placehold.co/414x314"
            className="h-48 w-full object-cover md:h-full md:w-48"
          />
        </div>

        {/* img to the right */}
        <div className="p-8 order-2 md:order-1">
          <div className="uppercase tracking-wide text-sm text-black-500 font-semibold">
            Company retreats
          </div>
          <a
            href="/[articleId]"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
}
