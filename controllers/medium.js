var medium = require('medium-sdk')
const mediumProfile = 'https://api.medium.com/v1/me'
var client = new medium.MediumClient({clientId: process.env.MEDIUM_CLIENTID, clientSecret: process.env.MEDIUM_SECRET})

var redirectURL = 'http://eslavely.com/medium/callback';

var url = client.getAuthorizationUrl('secretState', redirectURL, [medium.Scope.BASIC_PROFILE, medium.Scope.LIST_PUBLICATIONS])

// (Send the user to the authorization URL to obtain an authorization code.)

exports.getBlogs = () => {
    client
        .exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL, function (err, token) {
            client
                .getUser(function (err, user) {
                    console.log("in get blog")
                    console.log(user)
                    let userId = user.id;

                    // Now get posts

                    client.getPublicationsForUser((data) => {
                        console.log(data);
                    })
                })
        })

};