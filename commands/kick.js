module.exports = {
    main: function(bot, msg) {
        if (msg.member.hasPermission("KICK_MEMBERS") == true) {
            const mention = msg.mentions.users.first();
            var kickPerms = msg.guild.member(bot.user).hasPermission('KICK_MEMBERS')
            if (!mention) {
                msg.channel.send('Please mention a user, that you would like to kick.')
            }
            else {
                if (!kickPerms) {
                    msg.channel.send("Harmony doesn't have enough permissions to kick any user.")
                }
                else {
                    var kickable = msg.guild.member(mention).kickable
                    if (!kickable) {
                        msg.channel.send(mention + " isn't kickable.")
                    }
                    else {
                        msg.guild.member(mention).kick()
                        msg.channel.send(mention + ' has been kicked.')
                    }
                }
            }
        }
		else {
			msg.reply("I'm sorry, but you do not have the `KICK_MEMBERS` permission to be able to use this command")
		}
    },
    args: '<mention>',
    help: 'Kick a user'
};
