let express = require('express');
fs = require('fs');
let app = express();

app.use(express.static('public'));
app.set('view engine','pug');

const http = require('http');
const hostname = 'localhost';
const port = 3001;


let mysql = require('mysql');

app.use(express.json());

const nodemailer = require('nodemailer');




let con = mysql.createConnection({
    host: '77.87.193.214',
    user: 'u_happybirthx',
    password: 'Qmtx6fXP3862',
    database: 'happybirthdaymom',
});

app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);

});

app.get('/', function (req, res) {
    con.query(
        'SELECT * FROM goods',
        function (error,result) {
            if (error) throw error;
            let goods = {};
            for (let i=0; i < result.length; i++){
                goods[result[i]['id']]=result[i];
            }
            console.log(JSON.parse(JSON.stringify(goods)));
            res.render('index',{
                goods: JSON.parse(JSON.stringify(goods))
            });
        }
    );



});

app.get('/production', function(req, res) {
    let catId = req.query.id;

    let cat = new Promise(function (resolve,reject){
        con.query(
            'SELECT * FROM category WHERE id=' +catId,
            function(error,result){
                if (error) reject(error);
               resolve(result);
            });
    });
    let goods = new Promise(function (resolve, reject) {
        con.query(
            'SELECT * FROM goods WHERE category='+catId,
            function (error, result) {
                if (error) reject (error);
                resolve (result);
            });
    });

    Promise.all([cat,goods]).then(function (value) {
        console.log(value[1]);
        res.render('cat', {
            cat: JSON.parse(JSON.stringify(value[0])),
            goods: JSON.parse(JSON.stringify(value[1]))
        });

    });
});

app.get('/contacts', function (req,res) {
    res.render('contacts')
});

app.post('/get-goods-info', function (req,res) {
    console.log(req.body);
    if (req.body.key != 0) {
    con.query('SELECT id,name,cost,art,image FROM goods WHERE id IN (' + req.body.key.join(',') + ')', function (error, result, fields) {
        if (error) throw error;
        console.log(result);
        let goods = {};
        for (let i = 0; i < result.length; i++) {
            goods[result[i]['id']] = result[i];
        }
        res.json(goods);
    });
}
    else {
        res.send('0');
    }
});

app.get('/cart', function (req,res) {
    res.render('cart');
});

app.get('/price', function (req, res) {
    let filePath = "/views/price.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.post('/finish-order',function (req,res) {
    console.log(req.body);
   if (req.body.key != 0) {
       let key = Object.keys(req.body.key);
       con.query('SELECT id,name,cost,art FROM goods WHERE id IN (' + key.join(',') + ')', function (error,result,fields) {
           if (error) throw error;
           console.log(result);
           sendMail(req.body,result).catch(console.error);
           res.send('1');
       });
   }
   else {
       res.send('0');
   }
});


async function sendMail(data,result) {

    let mail = '<h2>Заказ "Интер-Альфа"</h2>';
    let total = 0;
    for (let i = 0; i < result.length; i++) {
        mail += `<p>${result[i]['name']} - ${data.key[result[i]['id']]}м² -  ${result[i]['cost']*data.key[result[i]['id']]} грн </p>`
        total += result[i]['cost']*data.key[result[i]['id']];
    }

console.log(mail);
    mail += '<hr>';
    mail += `Всего ${total} грн`;
    mail += `<hr>Телефон : ${data.phone}`;
    mail += `<hr>Заказчик : ${data.username}`;
    mail += `<hr>E-mail : ${data.mail}`;
    mail += `<hr>Служба доставки : ${data.delivery}`;
    mail += `<hr>Адрес доставки : ${data.adress}`;
    mail+= `<hr> Комментарий : ${data.comment}`;

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
           user: testAccount.user,
           pass: testAccount.pass
        }
    });
let mailOption = {
    from: '<kotoboy@gmail.com>',
    to: "kotoboy@gmail.com," +data.mail,
    subject: 'Заказ "Интер-Альфа',
    text: 'Ваш заказ отправлен в формате HTML',
    html: mail
};

let info = await transporter.sendMail(mailOption);
console.log("MessageSent: %s",info.messageId);
console.log("PreviewSent : %s", nodemailer.getTestMessageUrl(info));
return true;

}

app.get('/goods', function (req,res) {
    res.render('goods');
});

app.get('/gost', function (req,res) {
    res.render('gost');
});

app.post('/get-category-list', function (req,res) {
    con.query('SELECT id,category,image FROM category', function (error,result,fields) {
      if (error) throw error;
      res.json(result);
    });
});

app.get('/GOST/g2715-75', function (req, res) {
    let filePath = "/views/GOST/g2715-75.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/g3187-76', function (req, res) {
    let filePath = "/views/GOST/g3187-76.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/g3306-88', function (req, res) {
    let filePath = "/views/GOST/g3306-88.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/g3826-82', function (req, res) {
    let filePath = "/views/GOST/g3826-82.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/g5336-80', function (req, res) {
    let filePath = "/views/GOST/g5336-80.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/g6613-86', function (req, res) {
    let filePath = "/views/GOST/g6613-86.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/ty14-4-507-99', function (req, res) {
    let filePath = "/views/GOST/ty14-4-507-99.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/ty1276-001-38279335-2012', function (req, res) {
    let filePath = "/views/GOST/ty1276-001-38279335-2012.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/ty1276-002-38279335-2013', function (req, res) {
    let filePath = "/views/GOST/ty1276-002-38279335-2013.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/ty1276-003-38279335-2013', function (req, res) {
    let filePath = "/views/GOST/ty1276-003-38279335-2013.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});
app.get('/GOST/ty25-93-13-004-38279335-2017', function (req, res) {
    let filePath = "/views/GOST/ty25-93-13-004-38279335-2017.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});











