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
            <div className="flex justify-between p-6">
            <h1>E-Bazar</h1>
            <div>
                <ul className="space-x-6">
                    {navigation.map(item=>
                        <Link href={item.href} key={item.title}>{item.title}</Link>
                    )}
                </ul>

            </div>
            <button>Login</button>
            </div>
      </Container>
        </header>
    );
};

export default Heading;