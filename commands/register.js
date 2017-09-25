const Discord = require('discord.js');
const version = require('../package.json').version;
exports.run = (client, message, args) => {
message.delete();

let guild = message.guild;
if (guild.id != '191539621119655936') {
  return;
}

if (guild.member(message.author).roles.find("name", "小学生" || "name", "中学生" || "name", "高校生" || "name", "大学生")) {
  message.channel.send('you already log your Identity');
  return;
}

let embed = new Discord.RichEmbed()
    .setAuthor("🔷(-Register Panel-)🔷")
    .setColor("#ff6666")
    .addField("💮Please Confirm Your Ages💮", "💓 = 小学生 ,💗 = 中學生 ,💙 = 高校生 ,💚 = 大學生")
    .setFooter('御坂網絡 ' + (version) + ' ©️ Copyright <2017> | <小北> ','https://i.imgur.com/Fta2jMg.jpg')
message.channel.send({embed}).then(function (message){
  message.react('💗');
  message.react('💙');
  message.react('💚');
  message.react('💓');
  message.delete(12000);
});
    client.on('messageReactionAdd', (messageReaction, user) => {
      var getprocessC = require('../util/processC.js');

      if (messageReaction.emoji == '💗' && !user.bot) {
        let num = 1;
        getprocessC.processC(client, message, num);
        setTimeout(function(){
          message.channel.fetchMessages({limit: 2}).then(messages => message.channel.bulkDelete(messages));
        }, 2000);

      } else if (messageReaction.emoji == '💙' && !user.bot) {
          let num = 2;
          getprocessC.processC(client, message, num);
          setTimeout(function(){
            message.channel.fetchMessages({limit: 2}).then(messages => message.channel.bulkDelete(messages));
          }, 2000);

      } else if (messageReaction.emoji == '💚' && !user.bot) {
          let num = 3;
          getprocessC.processC(client, message, num);
          setTimeout(function(){
            message.channel.fetchMessages({limit: 2}).then(messages => message.channel.bulkDelete(messages));
          }, 2000);
      } else if (messageReaction.emoji == '💓' && !user.bot) {
        let num = 4;
        getprocessC.processC(client, message, num);
        setTimeout(function(){
          message.channel.fetchMessages({limit: 2}).then(messages => message.channel.bulkDelete(messages));
        }, 2000);
      }
    })
    setTimeout(function () {
      client.removeAllListeners('messageReactionAdd');
    },12000);
}
