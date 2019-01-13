export class Quote {
  public showDetails:boolean;
    constructor(  public quote:string, public author:string, public publisher:string){
      this.showDetails = false
    }
}
