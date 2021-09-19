class Password {

  constructor(message){

    this.message = message;

  }

  validate(val){

    if(!!val){

        if(val.length > 50){

            return {
              message: this.message.maxLength,
              status: false
            };
        }

        if(val.length < 8){

            return {
              message: this.message.minLength,
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

export default Password;
