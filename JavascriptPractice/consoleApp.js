let myName = 'Scott Jaworski';
console.log(myName.toUpperCase());

console.log("Former Archaeologist, aspiring Programmer");
console.log("Late 20s man with really long hair trying to retrain into a VERY different carreer than what he went to college for");
console.log("Warhammer 40k");
console.log("Building/painting plastic models, mostly Warhammer and Gundam");
console.log("Table Top RPGS");
console.log("Video Games(Lots of rpgs and strategy)");
console.log("Sport Fencing (Sabre)")
console.log("Historical Fencing (Longsword)")

let company = "James Madison's Montpelier";
let title = "Staff Archaeologist";
let description = "Excavated late 18th century/early 19th century quarters for people enslaved by Madison and explained the archaeology project and its findings to site visitors as part of Montpelier's puplic archaeology program";

function displayPosition() {
    console.log(company);
    console.log(title);
    console.log(description);
};

displayPosition();

let skills = [ 
    {
     skill: "Javascript",
     isCool: false
    },
    {
     skill: "Python",
     isCool: false
    },
    {
    skill: "I can make a really, really good grilled cheese sandwich",
    isCool: true
    },    
    {
    skill: "I had a very good parry/riposte when I fenced sabre back in college",
    isCool: false
    }   
]

function checkSkill(skills) {
    displaySkill(skills.skill, skills.isCool)
}

function displaySkill(skill, isCool){
    
    if (isCool == true ){
    console.log("BAM: " + skill);
} else if (isCool == false) {
    console.log(skill);
}
}


skills.map(checkSkill);
