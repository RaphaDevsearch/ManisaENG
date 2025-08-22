// data
const ISA = [
    "ray",
    "roa",
    "telo",
    "efatra",
    "dimy",
    "enina",
    "foto",
    "valo",
    "sivy"
]


// object
class Manisa{
    constructor(){
        this.isa = 0;
        this.isaSoratra = "isa lasa soratra";
    }

    manisa(isa){
        this.isa = isa;
        if(isa > 0 &&isa <10){
            this.isaSoratra = ISA[isa - 1];
        }
        else{
            this.isaSoratra = "miandrasa ny fivoana manaraka ...";
        }
        return this.isaSoratra;
    }

    getSoratra(){
        return this.isaSoratra;
    }

    isaFeo(){
        console.log(`feo : ${this.isaSoratra}`);
    }

    dikateny(){
        console.log(`dikateny hafa ${this.isaSoratra}`);
    }

}

// ui /ux
const inputUser     = document.getElementById('inputUser');
const result        = document.getElementById('result');
const btnTranslate  = document.getElementById('btnTranslate');
const btnReadVoice  = document.getElementById('btnReadVoice');
const resultBox     = document.getElementsByClassName('resultBox')

 


inputUser.addEventListener('change', ()=>{
    if(inputUser.value >=0){
        let manisa = new Manisa();
        result.innerHTML = manisa.manisa(inputUser.value);

        btnTranslate.addEventListener('click', ()=>{
            alert(`translate : ${manisa.getSoratra()}`)
        })

        btnReadVoice.addEventListener('click', ()=>{
            alert(`voice : ${manisa.getSoratra()}`)
        })
    }
    else{
        return;
    }
    
} )

// main 