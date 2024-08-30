const validation = async (req, res, next) => {
    try {
      const { email } = req.body;
  
      // Check if the email exists
      if (!email) {
        console.log('Email is required.');
        // res.status(400).send({ status: 'Enter required'});
        throw new Error('Email is required.');
      }
  
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Check if the email matches the regex pattern
      if (!emailRegex.test(email)) {
        console.log('Enter a valid email address.');
        // res.status(400).send({ status: 'Enter valid email'});
        throw new Error('Email is invalid.');
      }
  
      // If the email is valid, proceed to the next middleware
      console.log('Success');
      next();
    } catch (error) {
      console.log('Error: ', error);
      res.status(400).send({ status: 'Enter valid email', message: error.message });
    }
  };
  
  module.exports = validation;
  