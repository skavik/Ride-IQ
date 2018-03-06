var idea = document.querySelector('.idea');
var option = document.querySelector('.option');
var textOption = document.querySelector('.section5-text-osnovOption');
var textIdea = document.querySelector('.section5-text-osnov');

idea.addEventListener('click', ideaClick );
option.addEventListener('click', optionClick);

function ideaClick () {
    idea.classList.toggle("activIdea");
    option.classList.toggle("activOption");
    textOption.style.display = "none";
    textIdea.style.display = "block";
};

function optionClick () {
    idea.classList.toggle("activIdea");
    option.classList.toggle("activOption");
    textOption.style.display = "block";
    textIdea.style.display = "none";
}