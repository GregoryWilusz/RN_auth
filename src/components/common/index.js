export * from './Button';       // take everything from the Button.js file and export this from this one (index.js)
export * from './Card';         // REMEMBER: to use this method you should simultaneously delete word "default" in Component export, and instead export an object (in {}: ) with the key of ex. Button.
export * from './CardSection';  // e.g. export { Button: Button}; --> it's an object with with a KEY of Button and a value of Button.
export * from './Header';       // the same is: export { Button };
