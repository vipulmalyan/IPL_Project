export class User {
    private userId: number;
    private fullName: string;
    private username: string;
    private password: string;
    private email: string;
    private role: string;

    constructor(userId: number, fullName: string, username: string, password: string, email: string, role: string){
        this.userId=userId;
        this.fullName=fullName;
        this.username=username;
        this.password=password;
        this.email=email;
        this.role=role;
    }

    displayInfo(): void{
        console.log(`User ID: ${this.userId}\nFull Name: ${this.fullName}\nEmail: ${this.email}`);
    }
}