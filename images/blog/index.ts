import generateKey from "../../modules/generateKey"

interface Posts {
    id: number,
    fullname: string,
    username: string,
    text: string,
    likes: number, 
    comments: number,
    avatar: string,
    image_post: string, 
    posted_at: string
}

const blog: Array<Posts> = [
    {   
        id: 1,
        fullname: "Benjamin Thompson",
        username: "benthom22",
        text: "Enjoying the little things in life: a beautiful sunset and a warm cup of tea.",
        likes: 532467,
        comments: 59,
        avatar: "https://a.pomf.cat/ykbrtu.jpg",
        image_post: "https://pomf2.lain.la/f/qc2ykdqa.png",
        posted_at: "10 hours ago"
    }
];

function getRandomBlog(){
    const key = generateKey({ length: blog.length });
    return blog[key];
}

function getBlog(id: number){
    return blog[id-1];
}

function getBlogs(){
    return blog;
}

export { getRandomBlog, getBlog, getBlogs };