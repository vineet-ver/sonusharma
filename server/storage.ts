import { 
  type User, type InsertUser,
  type Booking, type InsertBooking,
  type Contact, type InsertContact
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking methods
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: number): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContact(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookingStore: Map<number, Booking>;
  private contactStore: Map<number, Contact>;
  private userId: number;
  private bookingId: number;
  private contactId: number;

  constructor() {
    // Initialize with empty maps for development
    this.users = new Map();
    this.bookingStore = new Map();
    this.contactStore = new Map();
    this.userId = 1;
    this.bookingId = 1;
    this.contactId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.userId++,
      ...insertUser
    };
    this.users.set(user.id, user);
    return user;
  }

  // Booking methods
  async createBooking(bookingData: InsertBooking): Promise<Booking> {
    const booking: Booking = {
      id: this.bookingId++,
      createdAt: new Date(),
      ...bookingData
    };
    this.bookingStore.set(booking.id, booking);
    return booking;
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookingStore.get(id);
  }

  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookingStore.values());
  }

  // Contact methods
  async createContact(contactData: InsertContact): Promise<Contact> {
    const contact: Contact = {
      id: this.contactId++,
      createdAt: new Date(),
      ...contactData
    };
    this.contactStore.set(contact.id, contact);
    return contact;
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return this.contactStore.get(id);
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contactStore.values());
  }
}

export const storage = new MemStorage();
