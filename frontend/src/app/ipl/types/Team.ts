
export class Team {

    private teamId:number;
    private teamName:string;
    private location:string;
    private ownerName:string;
    private establishmentYear:number;

    constructor(teamId:number, teamName:string, location:string, ownerName:string, establishmentYear:number){
        this.teamId=teamId;
        this.teamName=teamName;
        this.location=location;
        this.ownerName=ownerName;
        this.establishmentYear=establishmentYear;
    }

    displayInfo():void{
        console.log(`Team ID: ${this.teamId}\nTeam Name: ${this.teamName}\nLocation: ${this.location}`);
    }
  
}