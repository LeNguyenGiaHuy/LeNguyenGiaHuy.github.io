let express = require('express');
let app=express();

//Cau hinh
app.use(express.static(__dirname + '/public'));

// use view engine 
let expressHbs=require('express-handlebars');
let hbs=expressHbs.create({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+ '/views/layouts/',
    partialsDir:__dirname+'/views/partials/'
});
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');


// define routes
app.get('/',(req,res)=>{
    res.render('index');
});

// set ser ver
app.set('port', process.env.PORT || 5000);
app. listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});