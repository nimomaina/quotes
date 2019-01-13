export class Quote {
  public showDetails:boolean;
    constructor(  public quote:string, public author:string, public publisher:string,public quotedDate:Date){
      this.showDetails = false
    }
}
