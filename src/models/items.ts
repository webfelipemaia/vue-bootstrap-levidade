import { v4 as uuidv4 } from "uuid";

export function fakeNotificationData () {
    
    const messages = [
        "Lorem ipsum dolor sit amet", 
        "Ut enim ad minim veniam", 
        "Duis aute irure dolor in reprehenderit in voluptate velit", 
        "Excepteur sint occaecat cupidatat non proident"];
    const randomMessages = Math.floor(Math.random() * messages.length);

    const templateType = ["primary","secondary","success","warning","danger","info","light","dark","default"];
    const randomTemplateTypes = Math.floor(Math.random() * templateType.length);

    return {
        id: uuidv4(),
        text: messages[randomMessages],
        comment: "Sample comment text here",
        type: templateType[randomTemplateTypes],
        createdAt: new Date(),
    };
    
}
