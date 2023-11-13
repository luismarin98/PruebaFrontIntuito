////////////////////////////
//Interfaces principales////
////////////////////////////

export interface BilboardRequest {
    id: string;
    date: string;
    starttime: string;
    endTime: string;
    movie: MovieRequest;
    room: RoomRequest;
}

export interface BookingRequest {
    date: string;
    customer: CustomerRequest
    seat: SeatRequest;
    billboard: BilboardRequest;
}

////////////////////////////
//Interfaces secundarias////
///////////////////////////

export interface RoomRequest {
    id: string;
    name: string;
    number: string;
}

export interface SeatRequest {
    id: string;
    number: string;
    row: string;
    room: RoomRequest
}

export interface MovieRequest {
    id: string;
    name: string;
    genero: string;
    edadPermitida: string;
    duracion: string;
}

export interface CustomerRequest {
    id: string;
    document: string;
    name: string;
    lastName: string;
    age: string;
    phone: string;
    email: string;
}