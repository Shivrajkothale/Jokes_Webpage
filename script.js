let tag = document.getElementById("joke-display");
const fetchJoke= async () =>{
    try{
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=racist,sexist,explicit&type=single');
        const data =await response.json();
        if(data.joke){
            tag.innerHTML = data.joke;
        }else{
            tag.innerHTML = `${data.setup} - ${data.delivery}`;
        }
        console.log(data);
    }catch(error){
        console.error('Error Fetching Joke: ',error);
    }
}