import Link from "next/link";
import GitHubSvg from "../assets/svgs/github-logo.svg";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex h-16 items-center justify-between px-4 py-12 md:px-6 bg-[rgb(241,245,249)] bg-opacity-75 rounded-lg shadow-lg border-b-4 border-transparent hover:border-b-gray-300">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold">
            <span className="text-green-400">Rick </span>
            <span className="text-black"> and </span>
            <span className="text-yellow-400">Morty</span>
            <span className="text-black"> App</span>
          </span>
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <GitHubSvg className="w-10 h-10 fill-black lg:w-12 lg:h-12" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
    </div>
  );
}
