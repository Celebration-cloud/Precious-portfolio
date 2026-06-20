import { ContactInput, ContactMessageEntity } from '../entities/contact';

export interface IContactRepository {
  create(data: ContactInput): Promise<ContactMessageEntity>;
}
