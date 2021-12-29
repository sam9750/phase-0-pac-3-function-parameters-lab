function introduction(name) {
    return (`Hi, my name is ${name}.`);
  }

introduction("Aki");

function introductionWithLanguage(name ="Sam", language = "Javascript") { 
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name = "Sam" , language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
