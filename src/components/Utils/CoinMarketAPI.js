// import axios from "axios";
// const rp = require('request-promise');


// export default {
//   allCryptoCoins: function() {
//     const requestOptions = {
//       method: 'GET',
//       uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//       qs: {
//         start: 1,
//         limit: 5000,
//         convert: 'USD'
//       },
//       headers: {
//         'X-CMC_PRO_API_KEY': '1c76830c-9c66-4ac4-841a-79bd663c7059'
//       },
//       json: true,
//       gzip: true
//     };
//     rp(requestOptions).then(response => {
//       console.log('API call response:', response);
//       return response;
//     }).catch((err) => {
//       console.log('API call error:', err.message);
//       return ("Uh Oh! Something went wrong!");
//     });
    
//   },

//   getCryptoCoin: function() {
//       return ("Work in progress");
//   }
// }