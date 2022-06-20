class Validator {
  constructor() {}

  isEmail(str) {
    let reEmail = /\S+@\S+\.\S+/;
    return reEmail.test(str);
  }

  isDomain(str) {
    let reDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return reDomain.test(str);
  }

  isDate(str) {
    let reDate = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    return reDate.test(str);
  }

  isPhone(str) {
    let rePhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return rePhone.test(str);
  }
}

const validateThese = new Validator();
console.log(validateThese.isEmail("temotsuladze99@gmail.com"));
console.log(validateThese.isDomain("facebook.com"));
console.log(validateThese.isDate("06/20/2020"));
console.log(validateThese.isPhone("+995599474551"));
