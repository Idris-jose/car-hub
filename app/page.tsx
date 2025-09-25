import Image from "next/image";
import { Hero,CustomFilter,SearchBar,CarCard } from "../components";
import { fetchcars } from "@/utils";


export default async function Home() {
   const allcars = await fetchcars()

   const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars
  return (
   <main className="overflow-hidden">
     <Hero />

     <div className="mt-12 sm:px-16 px-6 py-4 max-w" id="discover">
       <div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
        <h1 className="text-4xl font-extrabold">car catalouge</h1>
        <p>Explore the cars you might like</p>
       </div>

       <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
         <SearchBar />

         <div className="flex justify-start flex-wrap items-center gap-2">
               <CustomFilter title="fuel" />
               <CustomFilter title="year" />
         </div>
       </div>

       {!isDataEmpty ? (
         <section className="text black">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {allcars?.map((car) => (
              <CarCard  car={car}/>
            ))}

          </div>
         </section>
       ): (
        <div>
          <h2 className="text-black">oops, no result</h2>
          <p className="text-red-500">{allcars.message}</p>
          </div>
       )}

     </div>
  </main>
  )
}
