const path = require ("path");
const express = require("express");
const app = express();
const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(3000, () => console.log('servidor corriendo'));
