export class Denuncia{
    title: String;
    description: String;
    owner:String;
    date: Date;
    denunciados: [];
    comments: [];
   

    constructor(title: String,
        image:String,
        description: String,
        owner: String,
        date: Date,

        denunciados: [],
        comments: [],
        vote_average: Number,
        vote_count: Number){
            this.title=title;
           this.denunciados=denunciados;
            this.description= description;
            this.owner=owner;
            this.date=date;
            this.comments= comments;
  
        }
}