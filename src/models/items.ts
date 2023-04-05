import { v4 as uuidv4 } from "uuid";

export function fakeData () {
    
    const names = ["John Doe", "Jane Day", "Mariah Carol", "Paul Rivers"];
    const randomNames = Math.floor(Math.random() * names.length);

    return {
        id: uuidv4(),
        quantity: Math.random(),
        name: names[randomNames],
        description: "Lorem ipsum dolor sit amet.",
        createdAt: new Date(),
    };
    
}
