// Add your code here
const submitData = async (name, email) => {
let req = await fetch('http://localhost:3000/users',{
method: 'POST',
headers: {'Content-type': 'application.json'},
body:JSON.stringify(name, email)
})
let res = await req.json

console.log(res)
}

submitData('hi', 'there')