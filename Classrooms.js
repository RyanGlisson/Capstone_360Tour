         
  function disappear() {
  var elem = document.getElementById("type");
   
   
             if (elem.value == "ITTable")
    {
        var block = document.getElementsByClassName("table")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("table")[0];
        block.style.display = "none";
           
    }
      if (elem.value == "MATable")
    {
        var block = document.getElementsByClassName("ma_table")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("ma_table")[0];
        block.style.display = "none";
           
    }

          if (elem.value == "CSTable")
    {
        var block = document.getElementsByClassName("cs")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("cs")[0];
        block.style.display = "none";
           
    }
             if (elem.value == "ECTable")
    {
        var block = document.getElementsByClassName("ec_table")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("ec_table")[0];
        block.style.display = "none";
           
    }
               if (elem.value == "CivilTable")
    {
        var block = document.getElementsByClassName("civil_table")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("civil_table")[0];
        block.style.display = "none";
           
    }
                 if (elem.value == "IndustrialTable")
    {
        var block = document.getElementsByClassName("industrial_table")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("industrial_table")[0];
        block.style.display = "none";
           
    }
 
                 if (elem.value == "ChemicalTable")
    {
        var block = document.getElementsByClassName("chemical_table")[0];
        block.style.display = "block";
    }
   
    else{
        var block = document.getElementsByClassName("chemical_table")[0];
        block.style.display = "none";
           
    }
   
   
     
   
}
