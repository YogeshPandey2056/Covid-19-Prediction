function terms_changed(termsCheckBox){
    //If the checkbox has been checked
    if(container.checked){
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("op1").disabled = false;
    } else{
        //Otherwise, disable the submit button.
        document.getElementById("op1").disabled = true;
    }
  }