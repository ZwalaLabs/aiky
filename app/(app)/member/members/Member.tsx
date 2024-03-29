import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

function Member({
    photo,
    name,
    location,
    about,
    socialHandles 
}:{
    photo: string;
    name: string;
    location: string;
    about: string;
    socialHandles: string;
}){
    
    return (
        <Card className="w-[600px] py-6 px-2 gap-4 flex items-center">
            <CardContent className='border-2 rounded-full w-[100px] h-[100px]'>
                <img src={photo} alt="Profile Pic" />
            </CardContent>
            <CardDescription>
                <CardTitle className='py-2'>{name}</CardTitle>
                <small className="py-2">{location}</small>
                <p>{about}</p>
                {/* <a href={socialHandles} target="_blank" rel="noreferrer">
                    Social Media
                </a> */}
            </CardDescription>
        </Card>
    )
}

export default Member;