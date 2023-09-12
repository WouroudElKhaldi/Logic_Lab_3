// use propt to take the number of keys from the user 
// and i use switch to switch btween the number of keys 
/* var keysInput = parseFloat(prompt("enter your numper of keys"));

switch (keysInput) {
    cas  e 0:
        alert("we sank together")
        break;
    case 30000 :
        alert("we made it")
    default:
        alert("we need to swim a little bit more!")
        break;
} */

var keys = parseFloat(prompt("enter your numper of keys"));
function result(keys){
        switch (keys) {
        case 0:
           return  ("we sank together" ) ;
        case 30000 :
            return ("we made it");
        default:
            return ("we need to swim a little bit more!");
    }
}
alert(result(keys)) ;