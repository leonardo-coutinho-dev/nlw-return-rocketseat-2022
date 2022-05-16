import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.send('Hey, what do you need boy?')
})

app.listen(3333, () => {
  console.log('HTTP Server running');
});
