var users=[
    {
        username:"Bhsakara",
        password:"12345",
        email:"chitturi@gmail.com",
        phone:"5475758767",
        role:"user"
    },
    {    username: "Ravi",   
         password: "23456",    
         email: "ravi@gmail.com",   
          phone: "9123456780",    
          role: "user"  
        },  
    {    
        username: "Sita",    
        password: "34567",    
        email: "sita@gmail.com",    
        phone: "9012345678",    
        role: "admin"  
    },  
        {    
            username: "Kiran",   
             password: "45678",   
              email: "kiran@gmail.com",    
              phone: "9988776655",   
               role: "user" 
             },  
             {    username: "Anjali", 
                   password: "56789",  
                     email: "anjali@gmail.com",    
                     phone: "8899776655",   
                      role: "user" 
                     }
                    ];
function getAll(){
    return users;
}
module.exports={getAll};
