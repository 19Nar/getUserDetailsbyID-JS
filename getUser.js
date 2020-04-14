users.map((user) => {         
    
    const {id,name:Name,username,email,address,phone,website,company} = user;
    console.log(id,Name,username,email,address,phone,website,company)
})
  
  
const inputs = document.querySelectorAll("input");
const [userID, button] = inputs;
const userDetails = document.querySelectorAll(".userDetails");

var foundUser = false

button.onclick = () => {
  users.map((user) => {
    //for (let i=0;i<users.length;i++){
      if (user.id == userID.value) {
          const { id, name: Name, username, email, 
                  address: { street, suite, city, zipcode, geo: { lat, lng } }, 
                  phone, website, company: { name, catchPhrase, bs } } = user;

          console.log(id, Name, username, email, street, suite, city, zipcode, lat, lng, 
              phone, website, name, catchPhrase, bs)
              
          const infoDetails = JSON.stringify(user);
          userDetails.innerText = `Name: ${name}\nUsername: ${username}\nE-mail: ${email}
          \naddress: ${street},${suite},${city},${zipcode}\nGeo: ${lat}, ${lng}
          \nPhone: ${phone}\nWebsite: ${website}\nCompany: ${name},${catchPhrase},${bs}`;
          foundUser = true;
          infoDetails
     // }
    }
  })
  if (!foundUser){
    alert("There is no user with such an ID")
}
};



