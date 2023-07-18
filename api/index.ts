import chalk from 'chalk';
import express from 'express';
import { Request, Response } from 'express';
import { getBeach, getBeaches } from '../images/beachs';
import { getUser, getRandomUser, getUsers } from '../images/user';
import { getPost, getRandomPost, getPosts } from '../images/posts';

const app = express();
const port = 3366;

app.get('/', (req: Request, res: any) => {
    res.status(200).send({ date: new Date(), status: "OK", message: "Welcome to Imagynation API" });
});

// app.get('/beach', (req: Request, res: any) => {
//     const beach = getBeach();
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//     res.status(200).send({ date: new Date(), url: beach });
// });

// app.get('/beaches', (req: Request, res: any) => {
//     const beaches = getBeaches();
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//     res.status(200).send({ date: new Date(), urls: beaches });
// });


// user
app.get('/random-user', (req: Request, res: any) => {
    const user = getRandomUser();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send({ date: new Date(), user: user });
});

app.get('/user/:id?', (req: Request, res: any) => {
    const { id } = req.params;
    if(id === undefined) return res.status(400).send({ status: "BAD_REQUEST", message: "Please insert ID param of a user like /user/1" });
    const user = getUser(parseInt(id));
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    if(parseInt(id) > 10 || parseInt(id) < 1) return res.status(400).send({ status: "BAD_REQUEST", message: "Data given is out of range." });
    res.status(200).send({ date: new Date(), user: user });
});

app.get('/users', (req: Request, res: any) => {
    const users = getUsers();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send({ date: new Date(), users: users });
});

// posts
app.get('/posts', (req: Request, res: Response) => {
    const posts = getPosts();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send({ date: new Date(), posts: posts });
})

app.get('/post/:id?', (req: Request, res: any) => {
    const { id } = req.params;
    if(id === undefined) return res.status(400).send({ status: "BAD_REQUEST", message: "Please insert ID param of a post like /post/1" });
    const post = getPost(parseInt(id))
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    if(parseInt(id) > 10 || parseInt(id) < 1) return res.status(400).send({ status: "BAD_REQUEST", message: "Data given is out of range." });
    res.status(200).send({ date: new Date(), post: post });
})

app.get('/random-post', (req: Request, res: any) => {
    const user = getRandomPost();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send({ date: new Date(), user: user });
});

app.listen(port, () => console.log(`Imagynation service is running at ${chalk.greenBright(`http://localhost:${port}`)}`));