export interface User1 {
    id: string;
    title: string;
    author: string;
  }
  
  export interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface Address {
    id: number | null;
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
    coordinates: Coordinates;
  }
  
  export interface Hair {
    id: number | null;
    color: string;
    type: string;
  }
  
  export interface Bank {
    id: number | null;
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  }
  
  export interface Company {
    id: number | null;
    name: string;
    department: string;
    title: string;
    address: Address;
  }
  
  export interface Crypto {
    id: number | null;
    coin: string;
    wallet: string;
    network: string;
  }
  
  export interface User {
    id: number ;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    ip: string;
    macAddress: string;
    university: string;
    ein: string;
    ssn: string;
    userAgent: string;
    role: string;
    hair: Hair;
    address: Address;
    bank: Bank;
    company: Company;
    crypto: Crypto;
  }
  