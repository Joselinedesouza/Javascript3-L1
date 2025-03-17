//Primo esercizio
class User {
  //Creiamo la nostra classe con gli oggetti che andrò mi servirano.
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName; //proprità di un oggetto
    this.lastName = lastName; //proprità di un oggetto
    this.age = age; //proprità di un oggetto
    this.location = location; //proprità di un oggetto
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} più giovane ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}
const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luigi", "Verdi", 25, "Milano");
const user3 = new User("Sara", "Bianchi", 30, "Milano");
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user3.compareAge(user1));
