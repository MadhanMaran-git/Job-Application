"use client"
import { Briefcase } from "lucide-react";
import Link from "next/dist/client/link";


export default function Navbar(){
    return(
        <nav className="border-b border-gray-400 bg-white">
            <div className="container max-auto flx h-13 item-center px-3">
                <Link href='/' 
                className="flex item-center gap-2  text-2xl font-semibold text-primary" >
                <Briefcase></Briefcase>Job Tracker
                </Link>
            </div>
        </nav>
    )
}