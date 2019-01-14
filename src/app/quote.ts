export class Quote {
  public showDetails:boolean;
    constructor(  public quote:string, public author:string, public publisher:string,public quotedDate:Date, public upvote:number,public downvote:number){
      this.showDetails = false;
    }
}
