const express = require( 'express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use( express.static( './public') );

app.get('/projects', function( request, response ) {
    response.sendFile( '/data/sourceData.json', {root: './public'} );
});

app.get('/about', function( request, response ){
    app.aboutController.init();
})


app.listen(PORT, function() {
    console.log(`You are on PORT: ${PORT}`);
});

