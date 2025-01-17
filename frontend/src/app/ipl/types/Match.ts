export class Match {
    private matchId: number;
    private firstTeamId: number;
    private secondTeamId: number;
    private matchDate: Date;
    private venue: string;
    private result: string;
    private status: string;
    private winnerTeamId: number;

    constructor(matchId: number, firstTeamId: number, secondTeamId: number, matchDate: Date, venue: string, result: string, status: string, winnerTeamId: number){
        this.matchId=matchId;
        this.firstTeamId=firstTeamId;
        this.secondTeamId=secondTeamId;
        this.matchDate=matchDate;
        this.venue=venue;
        this.result=result;
        this.status=status;
        this.winnerTeamId=winnerTeamId;
    }

    displayInfo():void{
        console.log(`Match ID: ${this.matchId}\nDate: ${this.matchDate}\nVenue: ${this.venue}`);
    }
}