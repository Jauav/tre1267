// Create an access token which we will sign and return to the client,
// containing the grant we just created
const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    {identity: identity}
  );
  
  token.addGrant(chatGrant);
  
  // Serialize the token to a JWT string
  console.log(token.toJwt());