import express from 'express';

const app = express();
const PORT = 5163;

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
