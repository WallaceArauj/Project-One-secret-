import PromptSync from "prompt-sync";
const prompt = PromptSync();
PromptSync

 interface NewPessoa{
     idade: number;
     local: string;
     filhos: number;
     CPF: number;
     nome: string;
     qtsAcessInt: number; //Acesso a Internet.
     qtsPessEmCasa: number; //Qts Pessoas mora na casa.
     comEmprego: number; //Qts pessoas tem emprego.
     ensinoMedio: number; //Qts pessoas com ensino medio.
     ensinoFund: number; //Qts pessoas com ensno fundamental.
     alfabetizada: string; 


}

 abstract class Pessoa{

    private idade: number;
    private local: string;
    private filhos: number;
    private CPF: number;
    private nome: string;
    private qtsAcessInt: number;
    private qtsPessEmCasa: number;
    private comEmprego: number;
    private ensinoMedio: number; 
    private ensinoFund: number;
    
        constructor({idade, local, filhos, CPF, nome, qtsAcessInt, qtsPessEmCasa, 
            comEmprego, ensinoFund, ensinoMedio}: NewPessoa){


        }
            //TODO: retornar idade
    public retorneIdade(): Number{
        return this.idade 

    }



}

export {Pessoa};