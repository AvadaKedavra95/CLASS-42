



function setup(){
    var name="Tushar";
    console.log(name);
    console.log(name.length);
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    //Arithmetic operations
    console.log(3+0);
    console.log(3/0);
    console.log(3*0);
    console.log(3-0);
    console.log(60%10);
    console.log("A"+"B");
    console.log("A"-"B");
    //comparison operators
    console.log(2>3);
    console.log(2<3);
    console.log(2===3);
    //condtional programming
    if(2+2===5){
      console.log(":)");
    
    }
    else{
      console.log(":(");
    }

    switch(Math.round(random(1,2))){
      case 1: console.log("heads");
      break;
      case 2:console.log("tails");
      break;
      default:break;
    }

    //loops
    for(var i=0;i<=10;i+=2){
      console.log(i)
    }

    var n=1;
    while(n<10){
      console.log(n)
      n+=2
    }

    array1 = [1,2,"a","b"];
    

    array1.push("c");
    array1.pop();
   console.log(array1)
   
   console.log(circumference(14));
   
  }



  function circumference(r){
     var circumference = (22/7)*2*r

     return circumference;
  }