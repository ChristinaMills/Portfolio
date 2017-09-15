const express = require( 'express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use( express.static( './public') );

app.get('/projects', function( request, response ) {
    response.sendFile( '/data/sourceData.json', {root: './public'} );
});

app.listen(PORT, function() {
    console.log(`You are on PORT: ${PORT}`);
});

