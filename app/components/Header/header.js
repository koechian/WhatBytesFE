import { Divide } from "lucide-react";
import Profile from "../Profile/profile";
import Image from "next/image";


export default function Header(){
    return(
        <div className="w-full p-2 border-b-2 bg-white border-gray-300 sticky top-0 z-50">
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 items-center">
            <Image src={'/logo.png'} alt="WhatBytes Logo" width={100} height={100}/>
                    <h1 className="text-[46px] font-bold">WhatBytes</h1>
                </div>
                <div>
                    <Profile name={'Rahil Siddique'} src={'https://xsgames.co/randomusers/avatar.php?g=male'}/>
                </div>
            </div>
        </div>
    )
}