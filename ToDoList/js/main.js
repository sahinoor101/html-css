function darkmode(){
    let nav;
    nav=document.querySelector("nav");
    console.log(nav);
    nav.classList.add('nav_dark');
    
}
function checked(i){
    console.log(i);
    if(i.classList.contains('green'))
    {
        i.classList.remove('green');
    }
    else{
        i.classList.add('green');
    }
}
