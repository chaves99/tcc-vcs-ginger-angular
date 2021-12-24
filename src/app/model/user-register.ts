export interface UserRegisterSend {
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface UserRegisterReceived {
    id: number;
    name: string;
    username: string;
    email: string;
    userType: UserType;
}

export enum UserType {
    STUDENT = "STUDENT", 
    TEACHER = "TEACHER",
}