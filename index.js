function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, languge) {
    return `Hi, my name is ${name} and I am learning to program in ${languge}.`;
}

function introductionWithLanguageOptional(name, languge = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${languge}.`
}