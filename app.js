var express = require('express');
var app = express();

app.set('views', './views'); // 指定视图所在的位置
app.set('view engine', 'ejs'); // 注册模板引擎

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('index')
});

app.listen(8080,function(){
  console.log('on port 8080!');
});
