class FullName {

  constructor(message){

    this.message = message;

  }

  validate(val){

    if(!!val){

      const regExp = /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;

      if(!regExp.test(val)){

          return {
            message: this.message.invalidFormat,
            status: false
          };
      }

      return {
        message: this.message.success,
        status: true
      };


    }else{
      return {
        message: this.message.empty,
        status: false
      };
    }

  }

  isValid(event){

    event.preventDefault();

    const value = event.target.value;
    const validator = this.validate(value);

    return {
      isValid : validator.status,
      message : validator.message,
      value   : value
    };

  }

}

export default FullName;
