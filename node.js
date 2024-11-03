// EVEN ODD PROGRAM 
confirm("Check This is Even or ODD")
let user_input = Number(prompt("Enter Any Number for Check This is Even or ODD ")) ;
if(user_input===0){
    document.write("0 is Nutral Number ") ;
}else if(user_input%2===0){
    document.write(`${user_input} is Even Number `);
}else if(user_input%2 !==0){
    document.write(`${user_input} is Odd Number `);
}