import BlogPost from "./blogs_component";
import { Container } from "./styles";



export function Blog() {
    const blogDataList = [

        {
            title: "Click here",
            date: "12 jan 2023",
            content: "hfhh", link: "https://auth.geeksforgeeks.org/user/flutterwings/articles"
        }
    ];
    return (
        <Container id="blogs">
            <h2>My Blogs List</h2>
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

