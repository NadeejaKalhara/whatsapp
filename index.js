
const TeleBot = require('telebot');
const bot = new TeleBot("5353629531:AAFxt8atCemi9FTIh8ovErmCeuPt7euxkt0");
bot.start();
const { Client } = require('whatsapp-web.js');
const client = new Client();
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});


const doSomething = (phone,message) => {
    if (phone == undefined || message == undefined) {
        res.send({ status:"error", message:"please enter valid phone and message" })
    } else {
        client.sendMessage(phone + '@c.us', message).then((response) => {
         
        console.log({ status:'success', message: `Message successfully sent to ${phone}` })
        bot.sendMessage(-1001755288889, `Message successfully sent to ${phone}`)
            
        }).catch((err) => {
            bot.sendMessage(-1001755288889, err)
        });
    }
 }


 async function doSomething1(phone,message) {
    // ...
    try {
        if  (phone == undefined || message == undefined) {
            res.send({ status:"error", message:"please enter valid phone and message" })
        } else {
            await client.sendMessage(phone + '@c.us', message).then((response) => {
             
            console.log({ status:'success', message: `Message successfully sent to ${phone}` })
            bot.sendMessage(-1001755288889, `Message successfully sent to ${phone}`)
                
            })
        }
      // ...
    } catch (err) {
      // ... handle it locally
      bot.sendMessage(-1001755288889, "Error")
    }
    // ...
  };


client.on('ready', () => {
    console.log('Client is ready!');

});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }


});



client.initialize();

bot.on('text', (msg) => {
    if (msg.text.includes("||||")){
    const phone = msg.text.split("||||")[0] 
    const message = msg.text.split("||||")[1] 
    doSomething1(phone,message)
    }
})