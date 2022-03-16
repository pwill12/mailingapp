require('dotenv').config()

const express = require('express')

const SibApiV3Sdk = require('sib-api-v3-sdk');

const bodyparser = require('body-parser')

// const request = require('request')

// const https = require('https')
// const { response } = require('express')


const app = express()

app.use(express.static('public'))

app.use(bodyparser.urlencoded({ extended: true }))



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {

    let apikey = process.env.Mykey

    const firstname = req.body.fname
    const lastname = req.body.lname
    const email = req.body.email

    // Sib api mailing list
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = apikey;

    var apiInstance = new SibApiV3Sdk.ContactsApi();


    // create contact

    var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
    // createContact.email = email
    createContact = { 'email': email }

    // createContact = { 'lastname': lastname }
    // createContact = { 'LAST_NAME': lastname }
    // createContact.listIds = [2]


    // createContact = {
    //     listIds: [2],
    //     email: email,
    //     updateEnabled: true,
    //     attributes: {
    //         FIRST_NAME: firstname,
    //         LAST_NAME: lastname,
    //         EMAIL: email,
    //     }
    // }

    // call sib app

    apiInstance.createContact(createContact).then(function(data) {

        if (!data) {
            res.send('failed')
        } else {
            res.sendFile(__dirname + '/success.html')
        }

        //     console.log('successful');
        //     res.statusCode(200)
        //     res.send('success')
        // }, function(error) {
        //     console.error(error);

    });

    // apiInstance.createContact(createContact).then(function(err, data) {
    //     if (!err) {
    //         console.log('API called successfully. Returned data: ' + data);
    //         res.send('success')
    //             // }, function(error) {
    //             //     console.error(error);
    //     } else {
    //         console.log(err)
    //     }
    // });




    // const data = {
    //         members: [{
    //             // email_address: email,
    //             // status: 'subscribed',

    //             // merge_fields: {
    //             //     FIRST_NAME: firstname,
    //             //     LAST_NAME: lastname
    //             // }
    //             EMAIL: email
    //         }]
    //     }
    // change the data to a string

    // const jsonData = JSON.stringify(data)


    // // // 

    // const options = {
    //     HOST: 'https://api.sendinblue.com/v3/contacts',

    //     method: 'POST',
    //     // HOST: 'https://us14.api.mailchimp.com',
    //     // path: '/3.0/lists/listId',
    //     path: '/v3/contact',
    //     headers: {
    //         // 'Authorization': 'yourapikey',
    //         'api-key': 'yourapikey',

    //         'Content-Type': 'application/json'
    //     }

    // }


    // // post data to an external resource


    //     const request = https.request(options, function(response) {

    //         // if (response.statuscode === 200) {
    //         //     console.log(response)
    //         // } else {
    //         //     console.log(err)
    //         // }

    //         // 
    //         response.on('data', function(data) {
    //             console.log(JSON.parse(data))
    //         })


    //     })

    //     request.write(jsonData)
    //     request.end()



})

app.listen(8888, function() {
    console.log('started')
})





// api key
// your apikey

// unique id

// yourid
