import Image from "next/image";
import Link from "next/link";


const Genrecard = ({ link, img, title, description }: { link: string, img: string, title: string, description: string }) => {
    return (
        <>
            <Link href={'/'}>
                <div className=" cardgenre relative w-[300px] h-[200px] hover:scale-105 hover:shadow-genreShadow transition-all duration-600 ease-custom-ease bg-[#f2f2f2] rounded-[10px] flex items-center justify-center overflow-hidden shadow-smallRed ">
                    <Image
                        src={img}
                        alt="image"
                        loading="lazy"
                        fill
                        className="object-cover"
                    />
                    <div className="card__content">
                        <p className="text-[24px] text-white font-bold">{title}</p>
                        <p className="mt-[10px] text-[14px] text-[#ffffffaf] ">{description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Genrecard;