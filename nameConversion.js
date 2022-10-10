 
//  functions returning converted strings
 let toCamelCase = (str) => {
    // let str = "welcome to my house"   
    
    return str.split(' ').reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

let toPascalCase = (str) => {
    return str.replace(/(:^\w|[A-Z]|\b\w)/g, function(word, index)
            {
                return index == 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        }

let toSnakeCase = (str) => {
   return str.match(/[A-Z]\d{2,}(?=[A-Z][a-z]+[0-9])|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(s => s.toLowerCase()).join("_");
}

let toScreamingSnakeCase = (str) => {
    return str.match(/[A-Z]\d{2,}(?=[A-Z][a-z]+[0-9])|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(s => s.toUpperCase()).join("_");
 }

let toKebabCase = (str) => {
    return str.match(/[A-Z]\d{2,}(?=[A-Z][a-z]+[0-9])|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(s => s.toLowerCase()).join("-");
}

let toScreamKebabCase = (str) => {
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9])|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(s => s.toUpperCase()).join("-");
}

// on Button Event, displaying converted string

document.querySelector("#convert-btn").addEventListener("click", () => {
    let inputString = document.querySelector("#text").value;

    let camleCaseString = toCamelCase(inputString);
    document.querySelector(".cases_div .case_div #camel-case").innerHTML = camleCaseString;

    let pascalCase = toPascalCase(inputString);
    document.querySelector(".cases_div .case_div #pascal-case").innerHTML = pascalCase;

    let snakeCaseString = toSnakeCase(inputString);
    document.querySelector(".cases_div .case_div #snake-case").innerHTML = snakeCaseString;

    let screamingSnakeCase = toScreamingSnakeCase(inputString);
    document.querySelector(".cases_div .case_div #screaming-snake-case").innerHTML = screamingSnakeCase;

    let KebabCase = toKebabCase(inputString);
    document.querySelector(".cases_div .case_div #kebab-case").innerHTML = KebabCase;

    let screamKebabCase = toScreamKebabCase(inputString);
    document.querySelector(".cases_div .case_div #screaming-kebab-case").innerHTML = screamKebabCase;

})