import { create } from 'venom-bot';

class ZapApi {
  createSession(sessionName) {
    create(
      sessionName,
      undefined,
      (statusSession, session) => {
        // return: isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
        console.log('Status Session: ', statusSession);
        // create session wss return "serverClose" case server for close
        console.log('Session name: ', session);
        return `Sessão ${sessionName}, criada com sucesso`;
      },
      undefined
    )
      .then((client) => {
        this.startSession(client).then(() => {});
      })
      .catch((error) => {
        return error;
      });
  }

  startSession(client) {
    client.onMessage((message) => {
      if (
        message.body.toUpperCase() === 'Oi'.toUpperCase() &&
        message.isGroupMsg === false
      ) {
        client
          .sendText(
            message.from,
            `Olá ${message.chat.contact.pushname}, eu sou o Rusky`
          )
          .then((result) => {
            console.log('Result: ', result); // return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); // return object error
          });
      }
    });
  }
}

export default new ZapApi();
