const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use('/api', orderRoutes);

app.listen(port, () => {
  console.log(`Order Service is running on http://localhost:${port}`);
});
