import React from 'react';

interface BlogPostProps {
    title: string;
    date: string;
    content: string;
    link:string
}



const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, link }) => {
    const handleRedirect = () => {
        window.location.href = link;
    };
    return (
        <div className="blog-post" onClick={handleRedirect} style={{ cursor: 'pointer' }}>

            <h3 className="blog-post-title">{title}</h3>
            {/* <p className="blog-post-date">{date}</p>
            <div className="blog-post-content">
                {content}
            </div> */}
        </div>
    );
};

export default BlogPost;
