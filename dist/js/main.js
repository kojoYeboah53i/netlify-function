const getWord = async () => {
  
    const res = await fetch('/getword')
    const word = await res.text()

    document.getElementById('word').innerHTML = word;

}

const getUsers = async () => {
    const res = await fetch('/api/users');
    const users = await res.json();
//    console.log(users);
    console.log(users);
    users.forEach(function(user) {
    // users.foreach( function (user) {
        const li = document.createElement('li');
        const text = document.createTextNode(user.name);
        li.appendChild(text);
        document.getElementById('users').appendChild(li);
    }); 
 

}



getWord(); 
getUsers();