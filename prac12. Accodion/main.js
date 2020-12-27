let btnCollapse = document.getElementById('btn-collapse'),
    heading = document.getElementsByClassName('panel-heading'),
    question = document.getElementsByClassName('panel-question'),
    answer = document.getElementsByClassName('panel-body');

// heading 클릭하면 할 일

for(var i=0; i<heading.length; i++){
    heading[i].addEventListener('click', function(e){
      for(var j=0; j<question.length; j++ ){
        question[j].classList.remove('active');
        e.target.parentNode.classList.add('active');
        activateBody();
      }
    });
}

function activateBody(){
    for(var x=0; x<heading.length; x++){
        answer[x].style.display = 'none';
    }
    var activePanel = document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display = "block";
}

activateBody();

//Button 누르면 다 안보이게

btnCollapse.addEventListener('click', function(){
    for(var y=0; y<answer.length; y++){
        answer[y].style.display = 'none';
    }
})