let myName = "Elliott Parker";
let myField = "Web Development";
let myBio = "I am an artist and a future web dev who enjoys creative pursuits in my free time.";
let myInterests = ["sculpting", "music", "reading", "cooking", "playing video games"];
let lineBreak = " ";

console.log("Name: " + myName.toUpperCase());
console.log("Field: " + myField);
console.log("Description: " + myBio);
console.log(lineBreak);
console.log("My Interests:");
displayInterests();
console.log(lineBreak);
console.log("My Previous Experience:");
displayPosition("Starbucks", "Barista", "making coffee, running the drive-thru, cleaning the store");
displayPosition("Massage Envy", "Sales Associate", "registration, basic secretary work, selling memberships");
displayPosition("Bruster's Ice Cream", "Ice Cream Cake Maker", "making ice cream cakes, filling the cake case, general cleaning");
console.log(lineBreak);
console.log("My Skills:");
displaySkills("barista skills", true);
displaySkills("customer service", false);
displaySkills("ice cream cake decorating", true);
displaySkills("basic design", false);

function displayInterests() {
    for (let i = 0; i < myInterests.length; i++) {
        console.log("* " + myInterests[i]);
    }
}

function displayPosition(companyName, jobTitle, jobDescription) {
        console.log("* " + companyName + " - " + jobTitle + " - " + jobDescription);
    
}

function displaySkills(skillName, isCool) {
    if (isCool === true) {
        console.log("* " + "BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}


