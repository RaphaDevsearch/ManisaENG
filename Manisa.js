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
class Manisa{
    constructor(){
        this.isa = 0;
        this.isaSoratra = "isa lasa soratra";
    }

    manisa(isa){
        this.isa = isa;
        if(this.isa <10){
            this.isaSoratra = ISA[isa - 1];
        }
        else{
            this.isaSoratra = "miandrasa ny fivoana manaraka ...";
        }
        return this.isaSoratra;
    }

    isaFeo(){
        console.log(`feo : ${this.isaSoratra}`);
    }

    dikateny(){
        console.log(`dikateny hafa ${this.isaSoratra}`);
    }

}


let manisa = new Manisa();

console.log(manisa.manisa(8));
manisa.isaFeo()
manisa.dikateny()