// getAllUsers()

fetch('https://api.github.com/users/sekhazharhossain')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))