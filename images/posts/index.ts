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

const posts: Array<Posts> = [
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
    },
    {
        id: 2,
        fullname: "Emily Wilson",
        username: "emwilson89",
        text: "Discovered an amazing book that I couldn't put down!",
        likes: 245290,
        comments: 106,
        avatar: "https://a.pomf.cat/uskdjm.jpg",
        image_post: "https://pomf2.lain.la/f/zlirgfx.png",
        posted_at: "3 days ago"
    },
    {
        id: 3,
        fullname: "Alexander Davis",
        username: "alexdavis23",
        text: "Had an awesome workout session at the gym today.",
        likes: 12015,
        comments: 301,
        avatar: "https://a.pomf.cat/dfyjjj.jpg",
        image_post: "https://pomf2.lain.la/f/acof1nb8.png",
        posted_at: "1 week ago"
    },
    {
        id: 4,
        fullname: "Olivia Carter",
        username: "olicart17",
        text: "Tried making homemade sushi rolls and they turned out delicious!",
        likes: 87612,
        comments: 40,
        avatar: "https://a.pomf.cat/thkrhq.jpg",
        image_post: "https://pomf2.lain.la/f/yo66ohqd.png",
        posted_at: "1 month ago"
    },
    {
        id: 5,
        fullname: "Ethan Jhonson",
        username: "ethjohn45",
        text: "Feeling inspired after attending an incredible art exhibition.",
        likes: 64301,
        comments: 168,
        avatar: "https://a.pomf.cat/vsglja.jpg",
        image_post: "https://pomf2.lain.la/f/t4ropc0e.png",
        posted_at: "10 hours ago"
    },
    {
        id: 6,
        fullname: "Sophia Anderson",
        username: "sophand88",
        text: "Volunteered at an animal shelter and it was so rewarding.",
        likes: 9892,
        comments: 610,
        avatar: "https://a.pomf.cat/fahczh.jpg",
        image_post: "https://pomf2.lain.la/f/n7cjp3sy.png",
        posted_at: "5 days ago"
    },
    {
        id: 7,
        fullname: "Lucaz Martinez",
        username: "luckymart76",
        text: "Just returned from a refreshing weekend getaway.",
        likes: 4027,
        comments: 1180,
        avatar: "https://a.pomf.cat/sjgauv.jpg",
        image_post: "https://pomf2.lain.la/f/qwimq83r.png",
        posted_at: "2 weeks ago"
    },
    {
        id: 8,
        fullname: "Avabrown",
        username: "avabrown21",
        text: "Celebrating a small victory: organized my messy closet.",
        likes: 1763,
        comments: 163,
        avatar: "https://a.pomf.cat/pudphi.jpg",
        image_post: "https://pomf2.lain.la/f/s5xwwjbu.png",
        posted_at: "1 minute ago"
    },
    {
        id: 9,
        fullname: "William Taylor",
        username: "wittay34",
        text: "Discovered a game-changing meditation technique.",
        likes: 3178,
        comments: 893,
        avatar: "https://a.pomf.cat/sczmaa.jpg",
        image_post: "https://pomf2.lain.la/f/6l9en2m.jpg",
        posted_at: "9 hours ago"
    },
    {
        id: 10,
        fullname: "Mia Garcia",
        username: "miagarc29",
        text: "Reminiscing about cherished childhood memories.",
        likes: 1056,
        comments: 749,
        avatar: "https://a.pomf.cat/ocxhyd.jpg",
        image_post: "https://pomf2.lain.la/f/36suxl7a.jpg",
        posted_at: "15 days ago"
    },
];

function getRandomPost(){
    const key = generateKey({ length: posts.length });
    return posts[key];
}

function getPost(id: number){
    return posts[id-1];
}

function getPosts(){
    return posts;
}

export { getRandomPost, getPost, getPosts };