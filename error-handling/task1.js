const value = 100;
const nearLimit = 90;
const limit = 100;

function valueValidate(a, b, c) {
  try {
    if (a > b) {
      throw new RangeError(" Value is greater than nearLimit");
    }
  } catch (error) {
    console.log(error.message);
    try {
      if (a > c) {
        throw new RangeError("value is greater then Limit");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

valueValidate(101, 90, 100)