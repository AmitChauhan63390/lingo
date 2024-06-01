import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItems } from "./sidebar-items";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(" h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col", className,)}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                    <h1 className="font-extrabold text-2xl text-green-600 tracking-wide">Lingo</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1 ">
                <SidebarItems label="Learn" href="/learn" iconSrc="learn.svg" />
                <SidebarItems label="Leaderboard" href="/leaderboard" iconSrc="leaderboard.svg" />
                <SidebarItems label="Quests" href="/quests" iconSrc="quests.svg" />
                <SidebarItems label="Shop" href="/shop" iconSrc="shop.svg" />

            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>


            </div>
        </div>
    )
}