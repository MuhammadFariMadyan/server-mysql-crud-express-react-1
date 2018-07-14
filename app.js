const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const siswa = require('./routes/siswa');
var cors = require('cors');

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

app.set('views', __dirname+'/views/')
app.set('view engine','ejs')

app.use(cors());

//body parser
app.use(bodyParser.urlencoded({
	extended: false
  }));

// routes
app.use('/', router);
app.use('/siswa', siswa);

const port = process.env.PORT || 3200;

app.listen(port, () => console.log(`Server starts on ${port}`));
