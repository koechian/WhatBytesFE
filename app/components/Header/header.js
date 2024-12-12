import { Divide } from "lucide-react";
import Profile from "../Profile/profile";
import Image from "next/image";


export default function Header(){
    return(
        <div className="w-full p-3 border-b-2 border-gray-300 sticky top-1">
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