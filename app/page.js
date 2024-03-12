import NewsCard from "@/components/NewsCard";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() { // Changed from async function to regular function
  return (
    <>
      <div>
      
        <Suspense fallback={<Loading />}>
          <NewsCard />
        </Suspense>
      </div>
    </>
  );
}
