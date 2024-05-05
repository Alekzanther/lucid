import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b to-[#000] from-[#261132] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <SignedOut>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            lucid
          </h1>
          <p className="text-lg text-center text-gray-300">
            OKRs. Connect work to impact. From start to summit.
          </p>
        </SignedOut>
        <SignedIn>
          <h1 className="font-extrabold tracking-tight text-white sm:text-[5rem]">
            An ambitious and inspiring Objective
          </h1>
          <div className="container mx-auto md:mx-8">
            <h2 className="text-xl card bg-gray-800 bg-opacity-50 p-4 rounded-lg mb-4">
              Key result 1
            </h2>
            <h2 className="text-xl card bg-gray-800 bg-opacity-50 p-4 rounded-lg mb-4">
              Key result 2
            </h2>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
