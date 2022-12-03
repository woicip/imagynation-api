import generateKey from "../../modules/generateKey"

interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    avatar: string
}

const users: Array<User> = [
    {   
        id: 1,
        name: "Alex Basherman",
        email: "alex.basherman@email.com",
        phone: "+1 (733) 991-3371",
        avatar: "https://a.pomf.cat/ykbrtu.jpg"
    },
    {
        id: 2,
        name: "Founche Daman",
        email: "founcheDaman12@mail.com",
        phone: "+1 (968) 558-4041",
        avatar: "https://a.pomf.cat/uskdjm.jpg"
    },
    {
        id: 3,
        name: "George A. William",
        email: "georgeawilliam@mail.com",
        phone: "+1 (626) 830-3705",
        avatar: "https://a.pomf.cat/dfyjjj.jpg"
    },
    {
        id: 4,
        name: "Jane Elsie",
        email: "janeElsie22@mail.com",
        phone: "+1 (456) 634-6471",
        avatar: "https://a.pomf.cat/thkrhq.jpg"
    },
    {
        id: 5,
        name: "Josh Arthur",
        email: "arthur.josh@mail.com",
        phone: "+1 (934) 759-2524",
        avatar: "https://a.pomf.cat/vsglja.jpg"
    },
    {
        id: 6,
        name: "Julian Wan",
        email: "wan.julian997@mail.com",
        phone: "+1 (582) 538-1427",
        avatar: "https://a.pomf.cat/fahczh.jpg"
    },
    {
        id: 7,
        name: "Nyla Green",
        email: "greennyla@mail.com",
        phone: "+1 (592) 987-3988",
        avatar: "https://a.pomf.cat/sjgauv.jpg"
    },
    {
        id: 8,
        name: "Olivia Harris",
        email: "olivia.harris@mail.com",
        phone: "+1 (653) 535-6929",
        avatar: "https://a.pomf.cat/pudphi.jpg"
    },
    {
        id: 9,
        name: "Rebecca Garcia",
        email: "garciarebecca990@mail.com",
        phone: "+1 (566) 599-5062",
        avatar: "https://a.pomf.cat/sczmaa.jpg"
    },
    {
        id: 10,
        name: "Tania Grace",
        email: "tania.grace9@mail.com",
        phone: "+1 (292) 777-5239",
        avatar: "https://a.pomf.cat/ocxhyd.jpg"
    },
];

function getRandomUser(){
    const key = generateKey({ length: users.length });
    return users[key];
}

function getUser(id: number){
    return users[id-1];
}

function getUsers(){
    return users;
}

export { getRandomUser, getUser, getUsers };