
export class Vote {
    private voteId: number;
    private email: string;
    private category: string;
    private cricketerId: number;
    private teamId: number;

    constructor(voteId: number, email: string, category: string, cricketerId: number, teamId: number){
        this.voteId=voteId;
        this.email=email;
        this.category=category;
        this.cricketerId=cricketerId;
        this.teamId=teamId;
    }

    displayInfo(): void{
        console.log(`Vote ID: ${this.voteId}\nEmail: ${this.email}`);
    }
}