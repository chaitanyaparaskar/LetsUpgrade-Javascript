let friends=[
    {
        name:"Mayuri",
        age:17,
        country:"India",
        hobbies: ["playing karate"," travelling"]
    },
    {
        name:"Krishna",
        age:18,
        country:"India",
        hobbies: ["singing raps"," making new friends"]
    },
    {
        name:"Harsh",
        age:32,
        country:"Nepal",
        hobbies: ["football lover "," making new friends"]
    
    }
      ]
     function condition1(){
       for(i=0;i<friends.length;i++)
        if(friends[i].age<30){
            let object= friends[i];
            console.log("Name- "+object.name +", Age-"+object.age+ ", Hobbies-"+object.hobbies)
         }
        
      
      }
      function condition2(){
        for(i=0;i<friends.length;i++)
        if(friends[i].country=="India"){
           let object= friends[i];
           console.log("Name- "+object.name +", Age-"+object.age+ ", Hobbies-"+object.hobbies)
      }


      }




      //condition1();
      condition2();
         