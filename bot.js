import SteamUser, { Steam } from 'steam-user';
import { generateAuthCode } from 'steam-totp';
const client = new SteamUser();

const logOnOptions = {
    accountName: 'your_steam_username',
    password: 'your_steam_password',
    twoFactorCode: generateAuthCode('your_steam_shared_secret')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');
  client.setPersona(Steam.EPersonaState.Online);
  client.gamesPlayed(440);
});