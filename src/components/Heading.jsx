import Link from "next/link";
import Container from "./Container";
'use-client'
const Heading = () => {
    const navigation=[
        {title:'Home', href:'/'},
        {title:'Cart', href:'/card'},
        {title:'Categories', href:'/categories'},
        {title:'Favorite', href:'/favorite'},

    ]
    return (
          <header className="bg-green-900">
      <Container >
            <div className="flex justify-between items-center p-6">
            <h1 className="text-xl text-white font-semibold"><span className="text-orange-600">E-</span>Bazar</h1>
            <div>
                <ul className="space-x-6 ">
                    {navigation.map(item=>
                        <Link className="text-white hover:text-orange-600" href={item.href} key={item.title}>{item.title}</Link>
                    )}
                </ul>

            </div>
            <button className="text-xl text-white border border-orange-600 w-20 h-10 rounded-md hover:bg-orange-600">Login</button>
            </div>
      </Container>
        </header>
    );
};

export default Heading;