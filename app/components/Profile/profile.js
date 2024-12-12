
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Profile({name, src}){

    return(
        <div className="outline outline-3 flex justify-between gap-3 p-3 rounded outline-gray-200">
           <Avatar>
                <AvatarImage src={src} />
                <AvatarFallback>RANDOM</AvatarFallback>
            </Avatar>
            <h1 className="font-bold text-[24px]">
                {name}
            </h1>
        </div>
    )
}