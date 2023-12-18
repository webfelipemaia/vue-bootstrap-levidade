export interface INotify {
    
    createNewItem(item: object): void;
    updateItem(id: string, payload: object): void;
    deleteItem(id: string): void;
    findIndexById(id: string): number;
}