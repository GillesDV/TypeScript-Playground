export function echoString(wordToEcho: string) : void{
  console.log(`${wordToEcho}, ${wordToEcho}, ${wordToEcho}, ...`);
}

export function sum(firstNumber: number, secondNumber: number){
  return firstNumber + secondNumber;
}

export function booleanParadoxFunction(boolValue: boolean){
  console.log(`THIS SENTENCE IS FALSE: ${boolValue}`); 
}

export function generateArray(){
  let myArray: Array<Number>;
  myArray = [1,2,3];
  return myArray;
}

export function generateTuple(){
  let myTuple: [string, string];
  myTuple = ["jsmith", "John Smith"];
}

export function generateEnum(){
  enum color {Red = 1, Green = 2, Blue = 3};
  return color.Green;
}

export function throwError(): never{
  throw new Error("you blew up the app. Now your computer will blow up.");
}

export function calculateLength(someValue: any): number{
  let length: number = (someValue as string).length;
  return length
}