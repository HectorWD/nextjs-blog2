import Link from "next/link";
import Layout from "../../components/Layout";

export default function Proyectos({data}){
    return(
        <Layout>
            {data.map(({id,name,email,body})=>(
            <div key={id}>
              
                <Link href={`/proyectos/${id}`}>
                <a>
                <h3>{id} -- {name} -- {email} </h3>
                </a>
                </Link>
                 
              <p> {body} </p>
            </div>
          ))}
        </Layout>
    );
}

export async function getStaticProps(){
    try {
      const res=await fetch('https://jsonplaceholder.typicode.com/comments');
      const data= await res.json();
  
      return{
        props:{data}
      }
    } catch (error) {
      console.log(error)
    }
  } 