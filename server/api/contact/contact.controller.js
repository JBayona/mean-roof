'use strict';

var _ = require('lodash');
// Get list of contacts
exports.index = function(req, res) {
  res.json([]);
};

// Send an email when the contact form is submitted
exports.sendMail = function(req, res) {

  var nodemailer = require('nodemailer');
  var smtpConfig = {
	    host: 'box428.bluehost.com',
	    port: 465,
	    secure: true, // use SSL
	    auth: {
	        user: 'info@hnsca.com',
	        pass: 'Amanda@hns2016'
	    },
	    requireTLS: true,
	    //debug: true
   };
  var transporter = nodemailer.createTransport(smtpConfig);
  var data = req.body;
  var bodyText = 	'<p>Hi Amanda,<p>' +
									'<p>The following request was submitted:</p>' +
									'<p><b>Name: </b>' + data.name +'</p>' +
									'<p><b>Address: </b>'+ data.address + '</p>' +
									'<p><b>City: </b>' + data.city + '</p>' + 
									'<p><b>State: </b>' + data.state + '</p>' +
									'<p><b>Zip: </b>' + data.zip + '</p>' +
									'<p><b>Phone: </b>' + data.phone + '</p>' +
									'<p><b>Email: </b>' + data.email + '</p>' +
									'<p>Best Regards.</p>';

	var bodyTextCustomer = 	'<p>Hello ' + data.name + ',<p>' +
									'<p>Thank you for requesting information from Howard & Sons Inc. We are very excited by the possibility of giving you the best service and quality work possible.</p>' +
									'<p>Depending on which area you are located in, one of our qualified service providers will be in contact with you shortly using the contact information you provided on the website.</p>' +
									'<p>We would like to let you know, we respect your privacy and will never sell your contact information, however you have been added to our newsletter list.  (We promise to not fill your inbox with junk mail or useless information.)</p>' +
									'<p>Thank you again for reaching out to us, and please remember a representative will be contacting you within the next 48 hours, so if you get a call from a number you don\'t recognize, its probably us!</p>' + 
									'<p>Have a great rest of your day!</p>' +
									'<p>The Howard & Sons Team</p>';

  // setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "info@hnsca.com", // sender address
	    to: 'amanda.hermes@gmail.com',
	    //cc: "jorgebayona92@gmail.com,ne.delgado@gmail.com", // list of receivers
	    subject: "New website contact request", // Subject line
	    html: bodyText // body message
	};

	var mailOptionsCustomer = {
		from: "info@hnsca.com", // sender address
	    to: data.email, // list of receivers
	    //cc: 'ne.delgado@gmail.com,amanda.hermes@gmail.com',
	    subject: "Your request has been received", // Subject line
	    html: bodyTextCustomer  // body message
	};

	transporter.sendMail(mailOptions, function(error, response){
		    if(error){
		       console.log(error);
		    }else{

		        console.log(response.response);
		        data.firstMail = true;
		    }
	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});

	transporter.sendMail(mailOptionsCustomer, function(error, response){
		    if(error){
		       console.log(error);
		    }else{

		        console.log(response.response);
		        data.secondMail = true;
		    }
	});


  res.json(data);

};