const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: 'ui19co38@iiitsurat.ac.in',
//   from: 'ommahawar76@gmail.com',
//   subject: 'This is my first creation',
//   text: 'I hope this one actually gets to you.',
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ommahawar76@gmail.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    // html:''
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ommahawar76@gmail.com',
    subject: 'Account cancelled',
    text: `Goodbye ${name}. Please tell the reasons for cancelling your account.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
