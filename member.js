function skillsMember(){
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["JavaScript", "HTML", "CSS"],
        calculateNumbers: function(var1, var2){
            return var1 + var2;
        }
    };
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.calculateNumbers(5, 5)); 
}