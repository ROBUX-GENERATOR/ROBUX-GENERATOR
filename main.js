done=("ROBUX ARE NOT GENERATED YET, TO GENERATE THEM COPY THIS LINE AND COMPOSE AN E-MAIL TO robuxgenerator999@gmail.com ")
maino=("DEAR ROBLOXIAN,")
compose=(" THIS IS AN E-MAIL TO INFORM YOU NOTMARS_GAMER_YT_giveaway. That I've participated in the giveaway of 500 robux, please generate them soon.  ")
understand=("IF YOU STILL DO NOT UNDERSTAND ABOUT HOW TO DO IT, CLICK ON THE ABOVE GIVEN BELOW STEPS FOR E MAIL")
name_of_the_student_array = [];


space=("")
function submit()
{

    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_11 = document.getElementById("name_of_the_student_11").value;

    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_11);


    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = done + maino+ name_of_the_student_array + compose + understand;
    document.getElementById("submit_button").style.display = "none";

}

function steps(){
    window.location = "steps.html";
}
function back(){
    window.location = "index.html";
}