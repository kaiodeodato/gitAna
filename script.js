var elementos = document.querySelectorAll('[type = radio]')

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change',function(e){
        let marcado = e.target.value;

        if(marcado == "correta"){

            let el = e.target.previousElementSibling.style.backgroundColor = "rgb(132, 226, 132)"

            let parentNode = e.target.parentNode;
            let els = parentNode.querySelectorAll('[type=radio]');
            for(let n = 0; n < els.length;n++){
                els[n].disabled = true;
            }

        }else if(marcado == "incorreta"){

            let el = e.target.previousElementSibling.style.backgroundColor = "rgb(255, 101, 101)"

            let parentNode = e.target.parentNode;
            let els = parentNode.querySelectorAll('[type=radio]');
            for(let n = 0; n < els.length;n++){
                els[n].disabled = true;

                if(els[n].value == "correta"){
                    els[n].previousElementSibling.style.backgroundColor = "rgb(132, 226, 132)"
                }
                
            }

        }

    })
}