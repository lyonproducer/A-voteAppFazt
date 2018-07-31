export class Link {

    title: string;
    link: string;
    vote: number;

    constructor(title:string, link:string, votes?:number){

        this.title=title;
        this.link=link;
        this.vote=votes || 0;
    }

    voteUp(){
        this.vote++; 
    }

    voteDown(){
        this.vote--;
    }
}