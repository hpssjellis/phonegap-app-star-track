/*!
 * Module dependencies.
 */

var connect = require('connect'),
    phonegap = require('connect-phonegap'),
    app = connect();

/*!
 * Create Connect server using the PhoneGap middleware.
 */

   app.use(phonegap());
   console.log('Ctrl-C to quit');


   var port = process.env.PORT || 3000;
   
   
   console.log('Enter into Phonegap Developer App the Address. Port = '+port+' IP= '+process.env.IP);
   console.log('');
   console.log('Click the link below and select open');
   console.log('http://'+process.env.C9_HOSTNAME);
   app.listen(port);
