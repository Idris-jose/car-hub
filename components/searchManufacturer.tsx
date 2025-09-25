'use client'
import Image from "next/image"
import { Fragment, useState } from "react"
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react"
import { manufacturers } from "@/constans"
import { SearchManufacturerProps } from "@/types"

export default function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
  const [query, setQuery] = useState("")

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* Button with car logo */}
          <ComboboxButton className="absolute top-1/2 left-3 -translate-y-1/2">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car logo"
              className="opacity-70"
            />
          </ComboboxButton>

          {/* Input */}
          <ComboboxInput
            className="w-full h-12 pl-10 pr-4 rounded-l-full max-sm:rounded-full bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-gray-900 placeholder-gray-400"
            placeholder="Search manufacturer..."
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

         <Transition
  as={Fragment}
  leave="transition ease-in duration-100"
  leaveFrom="opacity-100"
  leaveTo="opacity-0"
  afterLeave={() => setQuery("")}
>
  <ComboboxOptions className=" mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white shadow-lg border border-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm z-10">
    {filteredManufacturers.length === 0 && query !== "" ? (
      <ComboboxOption
        value={query}
        className="relative cursor-default select-none py-2 pl-10 pr-4"
      >
        Create "{query}"
      </ComboboxOption>
    ) : (
      filteredManufacturers.map((item) => (
        <ComboboxOption
          key={item}
          value={item}
          className={({ active }) =>
            `relative cursor-pointer select-none py-2 pl-10 pr-4 rounded-md ${
              active ? "bg-blue-100 text-blue-900" : "text-gray-900"
            }`
          }
        >
          {item}
        </ComboboxOption>
      ))
    )}
  </ComboboxOptions>
</Transition>

        </div>
      </Combobox>
    </div>
  )
}

