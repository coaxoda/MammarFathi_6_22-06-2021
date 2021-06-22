const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                    // maximum-length : 8
.has().uppercase()                              // Min. 1 cap caracter
.has().lowercase()                              // Min. 1 low cap
.has().digits()                                 // Min. have 1 number
.has().not().spaces()                           // Do not contain space
.is().not().oneOf(['azerty', '123456789', 'password1']);  // Password basic Blacklist 

module.exports = passwordSchema;