const express = require ("express");
const app = enpress();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// Pathlocalstrategy

app.get('/*', function(req, res){
    res.sendfile(path.join(__dirname + '/dist/index.html'));
} )

console.log("Listening");