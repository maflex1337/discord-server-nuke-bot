module.exports.run = async (client, message, args) => {

    message.guild.members.cache.forEach(member => {
        member.timeout(4000, `mafoş mut`);
    });
}

module.exports.help = {

    name: "allmute"
    
}