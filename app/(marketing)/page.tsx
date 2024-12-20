import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div
          className="mb-4 flex items-center border shadow-sm p-4 bg-sky-600
         text-indigo-100 rounded-full uppercase"
        >
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-poppins font-semibold">
          Taskify helps team move
        </h1>
        <div
          className="text-3xl md:text-6xl bg-gradient-to-r from-lime-400 to-cyan-500
         text-white px-4 p-2 rounded-md pb-4 w-fit font-poppins font-semibold"
        >
          work foward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, ans reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign up" className="font-poppins">
          Get Taskify for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
