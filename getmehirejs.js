function validation(){
    
    let inputname = document.getElementById("name").value;
    let inputeducation = document.getElementById("education").value;
    let inputdate = document.getElementById("date").value;
    let lengthname = inputname.length;
    let lengtheducation = inputeducation.length;
    let lengthdate = inputdate.length;
   
        
        if(lengthname > 2){
             if(lengtheducation >1){
                if(lengthdate >5){
                    alert("You have registered auccesfully !")
                }
                else{
                    alert("invalid Date")
                }
             }
             else{
                 alert("invalid Education Qualification")
             }
        }
        else{
            alert("invalid Name");
        }
    
    


}