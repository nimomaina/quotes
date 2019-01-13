export class Quote {
  public showDetails:boolean;
  public highestVote:boolean;
    constructor(  public quote:string, public author:string, public publisher:string,public quotedDate:Date, public upvote:number,public downvote:number){
      this.showDetails = false;
      this.highestVote = false;
    }
}
