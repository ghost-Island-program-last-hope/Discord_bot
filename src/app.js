import Discord from 'discord.io';
//寫法同var Discord require('discord.io');

var bot = new Discord.Client({
    token: "NDYwMzMzOTY5Mzg5NjQ5OTIx.DhDO8w.UfZ2aKoRppnISvXeLH5AU29K8ck",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

const preword = '^' ; //前綴字

bot.on('message', function(user, userID, channelID, message, event) {

    if(message.substring(0,1) !== preword) return //return是中斷字
    const msg = message.substring(1,message.length) //切掉前綴字

    if (msg === "hi") {
        bot.sendMessage({
            to: channelID,
            message: "hi"
        });//關鍵字回應
    }

    if(msg === 'hello'){ //tag人
        bot.sendMessage({
            to: channelID,
            message : `<@${userID}>`
        })
    }

    if(msg ==='革命啦'){ //embed用法
        bot.sendMessage({
            to: channelID,
            message:'共產黨萬歲！',
            embed:{
                color:0x80CE32,
                description:"打倒資本主義！",
                image:{
                    url :'http://imagepreprod.egpic.cn/38950c90220ac6376bfe8429da6194fd.jpeg?x-oss-process=image/resize,w_670'
                }
            }
        })
    }

    if(msg === 'list'){ //清單
        bot.sendMessage({
            to:channelID,
            embed:{
                color:0xffffff,

                author:{
                    name:'FuckingGenius',
                    icon_url:'https://vignette.wikia.nocookie.net/evchk/images/3/3e/Mao_Zedong.jpg/revision/latest?cb=20090503120948',
                },

                title:`大躍進`,
                description:`如何超英趕美`,

                fields:[{
                    name:'毛語錄',
                    value:'一人一本',
                },{
                    name:'土法煉鋼',
                    value:'家裡有鐵的都交上來',
                }],

                timestamp: new Date(),

                footer:{
                    text:'中國共產黨'
                }
            }
        })
    }
});