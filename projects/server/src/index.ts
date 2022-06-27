import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/authors', async (req, res) => {
  const allAuthors = await prisma.user.findMany();
  res.send(allAuthors);
});

app.get('/posts', async (req, res) => {
  const allPosts = await prisma.post.findMany();
  res.send(allPosts);
});

app.listen(port, () => {
  console.log('Application running');
});
