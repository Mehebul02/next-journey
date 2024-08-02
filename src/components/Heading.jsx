"use client"
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";

const Heading = () => {
    const navigation=[
        {title:'Home', href:'/'},
        {title:'Cart', href:'/cart'},
        {title:'Categories', href:'/categories'},
        {title:'Products', href:'/products'},
        {title:'Favorite', href:'/favorite'},

    ]
    const pathName = usePathname()
    console.log(pathName);
    return (
          <header className="bg-green-900">
      <Container >
            <div className="flex justify-between items-center p-6">
            <h1 className="text-xl text-white font-semibold"><span className="text-orange-600">E-</span>Bazar</h1>
            <div>
                <ul className="flex gap-x-5 items-center tracking-wide ">
                    {navigation.map(item=>
                        <Link  className={`text-white hover:text-orange-600 underline underline-offset-4 ${item?.href === pathName && 'text-orange-600'}`} href={item.href} key={item.title}>{item.title}</Link>
                    )}
                </ul>

            </div>
            </div>
      </Container>
        </header>
    );
};

export default Heading;