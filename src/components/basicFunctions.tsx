export function echoString(wordToEcho: string){
  console.log(`${wordToEcho}, ${wordToEcho}, ${wordToEcho}, ...`);
}

export function sum(firstNumber: number, secondNumber: number){
  return firstNumber + secondNumber;
}

export function booleanParadoxFunction(boolValue: boolean){
  console.log(`THIS SENTENCE IS FALSE: ${boolValue}`); 
}

export function createGibberishObject(){
  const paradoxTrigger = true;

  return paradoxTrigger;
}