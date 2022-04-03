export interface UserRegisterSend {
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userType?: UserType;
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