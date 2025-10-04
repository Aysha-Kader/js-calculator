let mark1=parseInt(prompt("Enter your mark 1"));
let mark2=parseInt(prompt("Enter your mark 2"));
let mark3=parseInt(prompt("Enter your mark 3"));
let mark4=parseInt(prompt("Enter your mark 4"));
let mark5=parseInt(prompt("Enter your mark 5"));


let total= mark1 + mark2  +mark3+mark4+mark5;
let avg=total/5;

let grade;
if(avg>=90){
    grade="A+";
}
else if(avg>=80){
    grade="A";
}
else if(grade>=70){
    grade="B";
}
else if(avg>=60){
    grade="C";
}
else if(avg>=50){
    grade="D";
}
else{
    grade="F";
}

alert("Total mark="+ total+"\nAverage="+ avg+ "\nGrade="+grade);