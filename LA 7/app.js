const express = require('express');
const app = express();
const PORT = 3000;
// Define routes and their respective handlers
app.get('/', (req, res) => {
res.send('THIS IS HOME');
});
app.get('/one', (req, res) => {
res.send('THIS IS PAGE ONE');
});
app.get('/two', (req, res) => {
res.send('THIS IS PAGE TWO');
});
app.get('*', (req, res) => {
res.status(404).send('Page Not Found');
});
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});