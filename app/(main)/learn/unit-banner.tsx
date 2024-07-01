import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props={
    title:string;
    description:string;
};

export const UnitBanner=({title,description}:Props)=>{
    return (
        <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
            <div className="space-y-2.5">
                <h3>{title}</h3>
                <p className="text-lg">{description}</p>

            </div>
            <Link href="/lesson" >
            <Button variant="secondary" className="hidden 2xl:flex border-2 border-b-4 active:border-b-2" size="lg">
                <NotebookText className="mr-2"/>
                Continue
            </Button>


            </Link>

        </div>
    )
}