interface Passenger {
    phoneNumber: string;
    gender: "M" | "F";
    age: number;
    seat: string;
}

class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        const passengers = details.map((passengerStr): Passenger => {
            const phoneNumber = passengerStr.slice(0, 10);
            const gender = passengerStr.slice(10, 11);
            const age = passengerStr.slice(11, 13);
            const seat = passengerStr.slice(13,14);
            console.log(phoneNumber, gender, age, seat)
            return {
                phoneNumber: phoneNumber,
                gender: gender === 'M'? 'M' : 'F',
                age: Number(age),
                seat: seat
            }
        });

        const seniorPassengers = passengers.filter((passenger)=> passenger.age > 60);

        return seniorPassengers.length
    }
}
