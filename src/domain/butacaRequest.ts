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

//90%
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

//ya esta
export interface MovieRequest {
    id: string;
    name: string;
    genero: string;
    edadPermitida: string;
    duracion: string;
}

//ya esta
export interface CustomerRequest {
    id: string;
    document: string;
    name: string;
    lastName: string;
    age: string;
    phone: string;
    email: string;
}