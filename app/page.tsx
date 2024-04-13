import Navbar from "@/components/base/Navbar";
import Categories from "@/components/common/Categories";
import HomeCard from "@/components/common/HomeCard";
import Toast from "@/components/common/Toast";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home({searchParams}:{searchParams?:{[key:string]:string | undefined}}) {

  const supabase = createServerComponentClient({ cookies })

  const query = supabase.from("homes").select("id ,image,city ,title ,country ,city ,price")

  if(searchParams?.country){
    query.ilike("country", `%${searchParams?.country}%`)
  }

  if(searchParams?.category){
    query.contains("categories", [searchParams?.category])
  }

 const {data:homes,error} = await query

  return (
    <div>
      <Toast />
      <Navbar />
      <Categories />

      {homes && homes?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10">
          {homes?.map((item) => (
            <HomeCard home={item} key={item.id} />
          ))}
        </div>
      )}

      {homes && homes.length <= 0 && (<h1 className="text-brand font-bold mt-5 text-2xl text-center">No Airbnb Found</h1>)}
    </div>
  );
}
