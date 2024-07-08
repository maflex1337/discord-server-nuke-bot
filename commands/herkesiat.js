module.exports.run = async (client, message, args) => {

    message.guild.members.cache.forEach(member => {
        member.kick(`mafoş`);
    });
}

module.exports.help = {

    name: "allkick"
    
}