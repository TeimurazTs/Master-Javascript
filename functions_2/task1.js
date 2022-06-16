const mix = (...cb) => {
  try {
    let passit;
    for (let i = 0; i < cb.length; i++) {
      if (typeof cb[i] !== "function")
        throw new TypeError("I ain't doin it :)) cause it ain't function :)) ");
      passit = cb[i](passit);
    }
  } catch(error) { 
    console.log(error.message)
  }
};

// dzalian saintereso Task iko :nice-one:

mix(
  () => {
    return 0;
  },
  (prev) => {
    return prev + 1;
  },
  (prev) => {
    return prev * 2;
  },
  (prev) => {
    return prev + 5;
  },
  (prev) => {
    return prev + 5;
  },
  (prev) => {
    return prev + 5;
  },
  (prev) => {
    console.log(prev + 5)
  },
);
