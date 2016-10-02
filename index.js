'use strict'
let exp = require('express');
let app = exp();
app.listen('8080', function() {
    console.log('mycss server listening on 8080');
})

app.use(exp.static(__dirname));
