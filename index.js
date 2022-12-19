const RTPStream = require('node-rtp-stream');

const stream = new RTPStream({
  local: {
    port: 5004
  }
});

stream.on('data', (data) => {
  // Aquí puedes manejar los datos de audio que llegan al servidor
});

stream.on('error', (error) => {
  // Aquí puedes manejar los errores del servidor
});
