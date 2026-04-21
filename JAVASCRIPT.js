function showDiv(value)
{
    document.getElementById("Matematics").classList.add("hidden");
    document.getElementById("Experimental Scienses").classList.add("hidden");
    document.getElementById("Technical Sciences").classList.add("hidden");
    document.getElementById("Computer Sciences").classList.add("hidden");
    document.getElementById("Economics and Management").classList.add("hidden");
    document.getElementById("Literature").classList.add("hidden");
    document.getElementById("Sports").classList.add("hidden");

    if (value=="Mathematics") {
        document.getElementById("Matematics").classList.remove("hidden");
    }
    else if (value=="Experimental Scienses") {
        document.getElementById("Experimental Scienses").classList.remove("hidden");
    }
    else if (value=="Technical Sciences") {
        document.getElementById("Technical Sciences").classList.remove("hidden");
    }
    else if (value=="Computer Sciences") {
        document.getElementById("Computer Sciences").classList.remove("hidden");
    }
    else if (value=="Economics and Management") {
        document.getElementById("Economics and Management").classList.remove("hidden");
    }
    else if (value=="Literature") {
        document.getElementById("Literature").classList.remove("hidden");
    }
    else if (value=="Sports") {
        document.getElementById("Sports").classList.remove("hidden");
    }
}
function calculateAverage()
{
    var section = document.getElementById("sectionSelect").value;
    
}