"use client"
import { Search, SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { differenceInDays, parse } from "date-fns"

export default function MobileNav() {
    const [searchedParams, setSearchedParams] = useState({
        country: "",
        days: ""
      })
      const params = useSearchParams()

      useEffect(() => {

        const endDateParam = params?.get("endDate");
        const startDateParam = params?.get("startDate");
    
        if (endDateParam && startDateParam) {
          const endDate = parse(endDateParam, "dd-MM-y", new Date());
          const startDate = parse(startDateParam, "dd-MM-y", new Date());
    
          const difference = differenceInDays(endDate, startDate);
    
          if (difference !== null && difference !== undefined && !isNaN(difference)) {
            setSearchedParams({
              ...searchedParams,
              country: params.get("country") || "",
              days: `${difference} days`
            });
          } else {
            console.error("Difference in days is not valid.");
          }
        } else {
          console.error("One or both parameters are missing in the URL.");
        }
      }, [params]);

    return (
        <div className='m-3 md:hidden'>
            <div className='flex justify-between items-center border rounded-3xl px-3 py-1'>
                <div className='flex items-center'>
                    <Search />

                    <div className='flex flex-col ml-5'>
                        <span className='text-sm font-semibold'>{searchedParams.country !== "" ? searchedParams.country : "Anywhere"}</span>
                        <span className='text-sm font-semibold'>{searchedParams.days !== "" ? searchedParams.days : "Any week"} . Add Guest</span>
                    </div>
                </div>
                <SlidersHorizontal />
            </div>

            
        </div>
    )
}
