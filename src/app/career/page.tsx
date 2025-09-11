import Link from "next/link";

export default function CareerPage() {
  // each articles as article

  return (
    <div>
      <Link
        className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-slate-500 transition"
        href={{ pathname: "/career" }}
      >
        Education
      </Link>
      <Link href={{ pathname: "/career/work" }}>Work</Link>
    </div>
  );
}
