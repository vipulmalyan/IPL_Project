export class TicketBooking {
    private bookingId: number
    private email: string
    private matchId: number
    private numberOfTickets: number

    constructor(bookingId: number, email: string, matchId: number, numberOfTickets: number){
        this.bookingId=bookingId;
        this.email=email;
        this.matchId=matchId;
        this.numberOfTickets=numberOfTickets;
    }

    displayInfo(): void{
        console.log(`Booking ID: ${this.bookingId}\nEmail: ${this.email}\nNumber of Tickets: ${this.numberOfTickets}`);
    }

}