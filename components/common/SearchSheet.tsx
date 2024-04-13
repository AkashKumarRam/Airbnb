"use client"
import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MobileNav from '../base/MobileNav'
import { Search } from 'lucide-react'
import SearchSheetNav from '../base/SearchSheetNav'
import DatePicker from './DatePicker'
import { Button } from '../ui/button'
import { addDays, format, differenceInDays, parse } from "date-fns"
import { useRouter, useSearchParams } from 'next/navigation'


export default function SearchSheet({ session }: { session: any }) {

  const [open, setOpen] = useState(false)
  const router = useRouter()
  const params = useSearchParams()

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    }
  ])

  const [search, setSearch] = useState<string>("")
  const [searchedParams, setSearchedParams] = useState({
    country: "",
    days: ""
  })

  const handleDateChange = (data: any) => {
    setDateState([data?.selection])
  }

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


  const handleSubmit = () => {
    const startDate = format(dateState[0].startDate, "dd-MM-y");
    const endDate = format(dateState[0].endDate, "dd-MM-y");
    router.replace(`/?country=${search}&startDate=${startDate}&endDate=${endDate}`);
    setOpen(() => false)
  }


  return (
    <div>
      <Sheet open={open}>
        <SheetTrigger asChild>
          <div className='w-full md:w-auto cursor-pointer' onClick={() => setOpen(true)}>
            <div className='hidden md:flex items-center space-x-2 border rounded-3xl p-2 '>
              <span className='text-sm pl-2'>{searchedParams.country !== "" ? searchedParams.country : "Anywhere"}</span>
              <span>|</span>
              <span className='text-sm'>{searchedParams.days !== "" ? searchedParams.days : "Any week"}</span>
              <span>|</span>
              <span className='text-sm text-gray-400'>Add Guest</span>
              <span className='bg-brand text-white p-2 rounded-full'><Search height={17} width={17} /></span>
            </div>
            <div>
              <MobileNav />
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side="top" >
          <SheetHeader>
            <SheetTitle>
              <SearchSheetNav session={session} searchInputCallback={setSearch} />
            </SheetTitle>
            <SheetDescription>
              <div className='text-center'>
                <DatePicker state={dateState} dateChangeCallback={handleDateChange} />

                <div className='flex space-x-4 justify-center items-center my-5'>
                  <Button className='bg-brand' onClick={handleSubmit}>Search</Button>
                  <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

