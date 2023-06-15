//Counting
document.write("Counting: ")
for(let i = 1; i <= 15; i++){
    document.write (i);
    if(i < 15){
        document.write(", ")
    }
}

//Reverse

document.write("<br><br>"+"Reverse counting : ")
for(let i = 10; i >= 1; i--){
    document.write (i);
    if(i > 1){
        document.write(", ")
    }
}

//Even 
document.write("<br><br>"+ "Even: ")
for(let i = 0; i <= 20; i+=2){
    document.write (i);
    if(i <20){
        document.write(", ")
    }
}


//Odd
document.write("<br><br>"+ "Odd: ")
for(let i = 1; i <= 19; i+=2){
    document.write (i);
    if(i < 19){
        document.write(", ")
    }
}

//Series
document.write("<br><br>" + "Series: ");
for (let i = 2; i <= 20; i +=2) {
  document.write(i + "k");
  if (i < 20) {
    document.write(", ");
  }
}
