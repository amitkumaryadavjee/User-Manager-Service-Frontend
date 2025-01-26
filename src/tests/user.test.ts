import { createUser, getUsers, deleteUser } from "../services/userService";
import { User } from "../interfaces/UserInterfaces";

describe("User Service Tests", () => {
  it("should add a new user", async () => {
    const initialUsers = await getUsers();
    const newUser: User =  {
          "id": 1,
          "firstName": "Emily",
          "lastName": "Johnson",
          "maidenName": "Smith",
          "age": 28,
          "gender": "female",
          "email": "emily.johnson@x.dummyjson.com",
          "phone": "+81 965-431-3024",
          "username": "emilys",
          "password": "emilyspass",
          "birthDate": "1996-5-30",
          "image": "https://dummyjson.com/icon/emilys/128",
          "bloodGroup": "O-",
          "height": 193.24,
          "weight": 63.16,
          "eyeColor": "Green",
          "ip": "42.48.100.32",
          "macAddress": "47:fa:41:18:ec:eb",
          "university": "University of Wisconsin--Madison",
          "ein": "977-175",
          "ssn": "900-590-289",
          "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
          "role": "admin",
          "hair": {
              "id": null,
              "color": "Brown",
              "type": "Curly"
          },
          "address": {
              "id": null,
              "address": "626 Main Street",
              "city": "Phoenix",
              "state": "Mississippi",
              "stateCode": "MS",
              "postalCode": "29112",
              "country": "United States",
              "coordinates": {
                  "lat": -77.16213,
                  "lng": -92.084824
              }
          },
          "bank": {
              "id": null,
              "cardExpire": "03/26",
              "cardNumber": "9289760655481815",
              "cardType": "Elo",
              "currency": "CNY",
              "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
          },
          "company": {
              "id": null,
              "name": "Dooley, Kozey and Cronin",
              "department": "Engineering",
              "title": "Sales Manager",
              "address": {
                  "id": null,
                  "address": "263 Tenth Street",
                  "city": "San Francisco",
                  "state": "Wisconsin",
                  "stateCode": "WI",
                  "postalCode": "37657",
                  "country": "United States",
                  "coordinates": {
                      "lat": 71.814525,
                      "lng": -161.150263
                  }
              }
          },
          "crypto": {
              "id": null,
              "coin": "Bitcoin",
              "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
              "network": "Ethereum (ERC20)"
          }
      };
    await createUser(newUser);
    const updatedUsers = await getUsers();
    expect(updatedUsers.length).toBe(initialUsers.length + 1);
  });

  it("should delete a user", async () => {
    const initialUsers = await getUsers();
    const userToDelete = initialUsers[0];
    await deleteUser(userToDelete.id);
    const updatedUsers = await getUsers();
    expect(updatedUsers.length).toBe(initialUsers.length - 1);
    expect(updatedUsers.find((b) => b.id === userToDelete.id)).toBeUndefined();
  });

  it("should fetch all users", async () => {
    const users = await getUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
