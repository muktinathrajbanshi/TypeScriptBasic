interface Namepro{
 firstName:string, 
 lastName:string
}


let namets = ( namepro: Namepro ) => {
    console.log(namepro.firstName + " " + namepro.lastName);
}

namets({
    firstName:"Muktinath", 
    lastName:"Rajbanshi"
});