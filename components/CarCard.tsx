'use client'
import Image from "next/image"
import { useState } from "react"
import { CarProps } from "@/types"
import CustomButton from "./CustomButton"


interface CarCardProps {
    car: CarProps
}

export default function CarCard({car} :CarCardProps){
   const {city_mpg, year,make , model, transmission,drive} = car
  console.log(car)

    return(
        <div className="flex flex-col text-black p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
        <div className=" w-full flex justify-between items-start gap-2">
            <div className="text-[22px] leading-[26px] font-bold capitalize">
             <h2>
                {make} {model}
             </h2>

             <p>
                <span>
                    car rent..
                </span>
             </p>
             </div>
        </div>
    </div>
    )
   
}