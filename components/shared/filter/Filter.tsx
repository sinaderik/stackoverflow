"use client"
import React from 'react';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]
const Filter = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
       <div className="w-full">
           <Popover open={open} onOpenChange={setOpen}>
               <PopoverTrigger asChild>
                   <Button
                       variant="outline"
                       role="combobox"
                       aria-expanded={open}
                       className="w-full md:max-w-[200px] justify-between background-light900_dark200 text-dark100_light900"
                   >
                       {value
                           ? frameworks.find((framework) => framework.value === value)?.label
                           : "Select a filter"}
                       <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                   </Button>
               </PopoverTrigger>

               <PopoverContent className="w-full md:max-w-[200px] background-light900_dark200 text-dark100_light900 p-0">
                   <Command className="w-full">
                       <CommandList className="w-full">
                           <CommandEmpty>No framework found.</CommandEmpty>
                           <CommandGroup className="border-4 w-full">
                               {frameworks.map((framework) => (
                                   <CommandItem
                                       className="px-0 gap-0"
                                       key={framework.value}
                                       value={framework.value}
                                       onSelect={(currentValue) => {
                                           setValue(currentValue === value ? "" : currentValue)
                                           setOpen(false)
                                       }}
                                   >
                                       {framework.label}
                                   </CommandItem>
                               ))}
                           </CommandGroup>
                       </CommandList>
                   </Command>
               </PopoverContent>
           </Popover>
       </div>
    )
};

export default Filter;