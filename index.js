const Discord = require("discord.js");

const token = "NDgzMjk0NDY2ODU4NTQ5Mjc4.DmRXFQ.W3MjgPNa3OQV2fFATRNFXeovk8E";

const Music = require('discord.js-musicbot-addon');

const ytdl = require('ytdl-core');

const streamOptions = { seek: 0, volume: 0.25 };

const prefix = "Alexa";

var client = new Discord.Client();

client.on("ready" , function() {
    console.log("Ready")

 client.user.setStatus("Online")

 client.user.setGame("Plays Despacito" , "https://www.twitch.tv/bulllitt");
});

Music.start(client, {
  prefix: ">",
  maxQueueSize: "100",
  disableLoop: true,
  leaveHelp: "Broken piece of shit.",
  leaveAlt: ["lve","leev","un1c0rns"],
  helpCmd: 'help',
  leaveCmd: 'leave',
  ownerOverMember: true,
  botOwner: '123456789101112',
  youtubeKey: 'AIzaSyCenKhrDOvctBbLGaJLHui45XgxUKmaeU0'
});



client.on("message" , function(message) {


  if (message.content == "Alexa play despacito") {
    message.channel.sendMessage("Playing despacito");
  }

 if(message.content === 'Alexa play despacito') {
  const channel =message.member.voiceChannel;

  channel.join()
  .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=OD7AdmG9QfM', { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
  })
  .catch(console.error);

 }

 if(message.content == "Alexa stop") {
    const channel =message.member.voiceChannel;

    channel.join()
    .then(connection => {
        const dispatcher = connection.playFile('x').on("end" , () => {
            connection.disconnect();
        })
    })
    .catch(console.error);
 }

 if (message.content == "omg this is so sad alexa play despacito") {
    message.channel.sendMessage("Oki doki fam :ok_hand:");
  }

 if(message.content === 'omg this is so sad alexa play despacito') {
    const channel =message.member.voiceChannel;

    channel.join()
    .then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=CS9OO0S5w2k', { filter : 'audioonly' });
      const dispatcher = connection.playStream(stream, streamOptions);
    })
    .catch(console.error);
 }


});


client.login(process.env.BOT_TOKEN);
