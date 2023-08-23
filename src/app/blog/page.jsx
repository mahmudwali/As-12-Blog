import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const page = async () => {
    const posts = await getAllPosts();
    return (
      <div>
      
        <section className="container mx-auto">
            

            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    posts.map((post)=>{
                        return (


                            
                                <Link href={`/bycategory/details/${post.id}`}>
                                <div key={post.id} className="card w-full  bg-gray-300 rounded-lg m-2">
                                <figure><img className="rounded-lg mb-6 h-44" src={post.img} alt="car!" /></figure>
                                    <h1 className="title font-bold px-6 mb-2">{post.title}</h1>
                                    <h1 className="title px-6 pb-4">{post.short}</h1>

                                </div>
                                </Link>


                            
                            
                        
                            
                        )
                    })
                }
            </div>
        </section>
        
      </div>
    );
  };
  
  export default page;