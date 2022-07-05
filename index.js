// Add your code here
const submitData = async (nameInput, emailInput) => {


try {
let req = await fetch('http://localhost:3000/users',{
method: 'POST',
headers: {'Content-type': 'application/json', 'Accept': 'application/json'},
body:JSON.stringify({name: nameInput, email: emailInput})
})
let res = await req.json()
return res
console.log(res.id)
}
catch{
let err = document.createElement('p')
err.innerText = res
document.body.append(err)
}


}

submitData('hi', 'there')