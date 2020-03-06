let express = require('express');
let app=express();

//Cau hinh













// set ser ver
app.set('port', process.env.PORT || 5000);
app. listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});