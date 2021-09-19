import Language from './language/pt-br.json';
import FullName from './validators/full-name';
import Email from './validators/email';
import Password from './validators/password';

class SgFormValidator {

  constructor(){

    return {
      fieldModel:{
        message: "",
        value: "",
        isValid: false
      },
      fullName: new FullName(Language.fullName),
      email: new Email(Language.email),
      password: new Password(Language.password)
    };
  }

}

export default SgFormValidator;
