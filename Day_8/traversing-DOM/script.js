const header = document.getElementsByTagName('header');

const listOfSections = document.querySelectorAll('section');

const selectedSection = document.querySelector('section.current');

const div = document.querySelector('h2.highlight').parentNode.parentNode;

const sectionsWithH2 = Array.from(document.querySelectorAll('h2')).map(child => child.parentNode);

console.log(header);

console.log(listOfSections);

console.log(selectedSection);

//section after the selected section
console.log(selectedSection.nextElementSibling);

//h2 node from section before selected section
console.log(selectedSection.previousElementSibling.children[0]);

console.log(div);

console.log(sectionsWithH2);