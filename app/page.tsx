import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import { ThemeButton } from "./ui/theme-changer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 ">
      <div className="flex justify-between h-20 shrink-0 items-end rounded-lg bg-blue-500 dark:bg-blue-950 p-4 md:h-52">
        <AcmeLogo />
        <ThemeButton />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 dark:bg-zinc-800 px-6 py-10 md:w-2/5 md:px-16">
          <p
            className={`${lusitana.className} antialiased text-xl text-gray-800 dark:text-gray-50 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is a sample project built
            with Next JS with the help of the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
          </p>
          <div className="flex gap-2">
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 dark:bg-blue-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 dark:hover:bg-blue-900 md:text-base">
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 dark:bg-blue-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 dark:hover:bg-blue-900 md:text-base">
              <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            height={760}
            width={1000}
            alt=""
            className="hidden md:block"></Image>
          <Image
            src="/hero-mobile.png"
            height={620}
            width={560}
            alt=""
            className="md:hidden"></Image>
        </div>
      </div>
    </main>
  );
}
