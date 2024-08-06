const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
  ],
});
const delay = ms => new Promise(res => setTimeout(res, ms));

client.on('ready', async () => {
  try {
    const guild = client.guilds.cache.get('983854211844431922'); // ID вашего сервера
    const members = await guild.members.fetch();

    for (const [, member] of members) {
      try {
        const dmChannel = await member.createDM();
        await dmChannel.send('Привет! Давно небыл на нашем сервере ты однако... А мы скучаем без тебя и ждем в нашем крутом мега розыгрыше! Ссылка на сервер: https://discord.gg/EzaZqREztu); //сообщение рассылки
        await delay(10000); // Задержка в 10 секунд
      } catch (error) {
        if (error.code === 50007) {
          console.log(`Пропускаю ${member.user.tag}, потому что ЛС закрыт.`); //уведомление о там что ЛС пользователя закрыт
        } else {
          console.error(`Ошибка при отправке сообщения ${member.user.tag}:`, error); //сообщение об ошибке отправки сообщения
        }
      }
    }
  } catch (error) {
    console.error('Ошибка при получении участников сервера:', error); //сообщение ошибки получения игроков
  }
});


client.login('MTI3MDQ5MDgwMDA4OTczMTA5Mg.G7z0jQ.eMFoLG4XO8kZPk-9-c1sNetdEkqVzW62auk3dU'); //токен вашего бота
