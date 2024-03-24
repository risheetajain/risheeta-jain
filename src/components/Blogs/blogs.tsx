import BlogPost from "./blogs_component";
import { Container } from "./styles";



export function Blog() {
    const blogDataList = [

        {
            title: "Blog Post 1",
            date: "",
            content: ""
        }
    ];
    return (
        <Container id="blogs">
            <h2>My Blogs</h2>
            <div className="blogs">



                <div className="blog-list">
                    {blogDataList.map((blogData, index) => (
                        <BlogPost key={index} {...blogData} />
                    ))}
                </div>



            </div>
        </Container>
    );
}

