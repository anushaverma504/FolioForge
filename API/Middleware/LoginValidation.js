const validation = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if the email exists in the request body
    if (!email) {
      console.log('Email is required.');
      return res.status(400).json({ status: 'Error', message: 'Email is required.' });
    }

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regex pattern
    if (!emailRegex.test(email)) {
      console.log('Enter a valid email address.');
      return res.status(400).json({ status: 'Error', message: 'Enter a valid email address.' });
    }

    // If the email is valid, proceed to the next middleware
    console.log('Validation success');
    next();
  } catch (error) {
    console.log('Error during validation:', error);
    res.status(500).json({ status: 'Error', message: 'Server error during validation.' });
  }
};

module.exports = validation;
