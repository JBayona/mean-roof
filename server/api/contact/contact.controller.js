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
	    host: 'smtp.gmail.com',
	    //port: 465,
	    //secure: true, // use SSL
	    auth: {
	        user: 'jorgebayona92@gmail.com',
	        pass: 'Bayona10.'
	    }
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

	var bodyTextCustomer = 	'<p>Hi ' + data.name + ',<p>' +
									'<p>Thank you for visit us, somebody calls you in the next 48hrs.</p>' +
									'<p>Best Regards.</p>';

  // setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "jorgebayona92@gmail.com", // sender address
	    to: "jorgebayona92@gmail.com", // list of receivers
	    subject: "A new request was submitted!", // Subject line
	    html: bodyText // body message
	};

	var mailOptionsCustomer = {
			from: "jorgebayona92@gmail.com", // sender address
	    to: "jordavids_22@hotmail.com", // list of receivers
	    subject: "Request submitted!", // Subject line
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