function valid(){
    var fn = document.form.fname.value;
    var un = document.form.uname.value;
    var em = document.form.email1.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pas = document.form.pass.value;
    var cur = document.form.cpass.value;
    var pho = document.form.pnum.value;

    if(fn == ""){
        alert("Please enter a valid name");
    }
   
    else if( un== ""){
        alert("Please enter a valid user name");
    }
    else if(em = "" || em.match(mailformat)){
        alert("Please enter a valid email address");

    }
    else if(pas.length < 8){
        alert("Please enter a valid password");
    }
    else if(pas != cur){
        alert("Please enter the same password again");
    }
    else if(pho.length  <10 || pho.length > 10){
        alert("Please enter a valid phone number");
    }
    

   
}