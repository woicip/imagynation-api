import chalk from 'chalk';
import express from 'express';
import { Request, Response } from 'express';
import { getBeach, getBeaches } from '../images/beachs';
import { getUser, getRandomUser, getUsers } from '../images/user';

const app = express();
const port = 3366;

app.get('/', (req: Request, res: any) => {
    res.status(200).send({ date: new Date(), message: "Welcome to Imagy API" });
});

app.get('/beach', (req: Request, res: any) => {
    const beach = getBeach();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send({ date: new Date(), url: beach });
});

app.get('/beaches', (req: Request, res: any) => {
    const beaches = getBeaches();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).send({ date: new Date(), urls: beaches });
});

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

app.listen(port, () => console.log(`Imagy service is running on ${chalk.greenBright(`http://localhost:${port}`)}`));