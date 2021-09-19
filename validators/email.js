class Email {

  constructor(message){

    this.message = message;

  }

  validate(val){

    if(!!val){

        const regExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

export default Email;
