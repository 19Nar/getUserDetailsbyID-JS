/*
// First way
  users.forEach((user) => {   
    
    const {id,name:Name,username,email,address,phone,website,company} = user;

  console.log(id,Name,username,email,address,phone,website,company)
    
  });
 
 //Second way
 users.forEach((user) => {      
    
  const {...rest} = user;

console.log(rest)
 });

  // Third way
users.map((user) => {         
  
  const {id,name:Name,username,email,address,phone,website,company} = user;

console.log(id,Name,username,email,address,phone,website,company)
  
});


//Forth way
users.map((user) => {       
  
  const {...rest} = user;

console.log(rest)
  
});
*/