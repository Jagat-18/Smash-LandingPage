

    function dltdata(index,button){
         let usertable = JSON.parse(localStorage.getItem("data")) || [];
         usertable.splice(index, 1);
            localStorage.setItem("data", JSON.stringify(userdata));
            
            var row = button.parentElement.parentElement;
            row.remove();
    }
