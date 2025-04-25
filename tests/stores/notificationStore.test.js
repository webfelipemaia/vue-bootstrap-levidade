import { createPinia, setActivePinia } from 'pinia';
import { useNotificationStore } from '../../src/store/Notifications';

describe('Notification Store - Full Tests', () => {
  let store;

  beforeEach(() => {
    // Criar uma instância do Pinia
    const pinia = createPinia();
    
    // Ativar o Pinia antes de usar qualquer store
    setActivePinia(pinia);

    // Agora podemos instanciar a store
    store = useNotificationStore(pinia);

    // Limpar os itens antes de cada teste
    store.items = [];
  });

  it('should add a notification item', () => {
    const newItem = { text: 'Test Notification' };
    store.createItem(newItem);
    expect(store.items.length).toBe(1);
    expect(store.items[0].text).toBe('Test Notification');
  });

  it('should update an existing notification item', () => {
    const newItem = { text: 'Test Notification' };
    store.createItem(newItem);
    const itemId = store.items[0].id;
    const updatedItem = { text: 'Updated Notification' };
    store.updateItem(itemId, updatedItem);
    expect(store.items[0].text).toBe('Updated Notification');
  });

  it('should delete an existing notification item', () => {
    const newItem = { text: 'Test Notification' };
    store.createItem(newItem);
    const itemId = store.items[0].id;
    store.deleteItem(itemId);
    expect(store.items.length).toBe(0);
  });

  it('should return total items correctly', () => {
    expect(store.totalItems).toBe(0);
    store.createItem({ text: 'Test Notification' });
    expect(store.totalItems).toBe(1);
  });

  it('should return hasNotifications correctly', () => {
    expect(store.hasNotifications).toBe(false);
    store.createItem({ text: 'Test Notification' });
    expect(store.hasNotifications).toBe(true);
  });

  it('should return the correct notification by ID', () => {
    store.createItem({ text: 'Test Notification' });
    const itemId = store.items[0].id;
    const foundItem = store.getItemById(itemId);
    expect(foundItem.text).toBe('Test Notification');
  });

  it('should delete an item correctly', () => {
    store.createItem({ text: 'Test Notification' });
    const itemId = store.items[0].id;
    store.deleteItem(itemId);
    const foundItem = store.getItemById(itemId);
    expect(foundItem).toBeUndefined();
  });
});
