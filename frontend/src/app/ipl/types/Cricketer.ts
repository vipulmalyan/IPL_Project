export class Cricketer {

    private cricketerId: number; 
    private teamId: number;
    private cricketerName: string; 
    private age: number; 
    private nationality: string; 
    private experience: number; 
    private role: string; 
    private totalRuns: number; 
    private totalWickets: number;     

    constructor(cricketerId: number, teamId: number, cricketerName: string, age: number, nationality: string, experience: number, role: string, totalRuns: number, totalWickets: number){
        this.cricketerId=cricketerId; 
        this.teamId=teamId; 
        this.cricketerName=cricketerName ; 
        this.age=age; 
        this.nationality=nationality; 
        this.experience=experience; 
        this.role=role; 
        this.totalRuns=totalRuns; 
        this.totalWickets=totalWickets; 
    }

    displayInfo():void{
        console.log(`Cricketer ID: ${this.cricketerId}\nTeam ID: ${this.teamId}\nName: ${this.cricketerName}`);
    }
   
}





