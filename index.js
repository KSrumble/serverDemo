//const express = require('express');
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})