import { IContactRepository } from '../domain/interfaces/contact-repository.interface';
import { ContactInput, ContactMessageEntity } from '../domain/entities/contact';
import { prisma } from '../database/db';
import * as fs from 'fs';
import * as path from 'path';

export class ContactRepository implements IContactRepository {
  async create(data: ContactInput): Promise<ContactMessageEntity> {
    // 1. Try PostgreSQL Database if Prisma Client is generated
    if (prisma) {
      try {
        const record = await prisma.contactMessage.create({
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            service: data.service || null,
            message: data.message,
          },
        });

        return {
          id: record.id,
          name: record.name,
          email: record.email,
          phone: record.phone || '',
          service: record.service || '',
          message: record.message,
          createdAt: record.createdAt,
        };
      } catch (dbError) {
        console.error('PostgreSQL write failed, falling back to local file system:', dbError);
      }
    }

    // 2. Local File System Fallback (JSON Storage)
    const folderPath = path.join(process.cwd(), 'database');
    const filePath = path.join(folderPath, 'contact-messages.json');

    const newRecord: ContactMessageEntity = {
      id: Math.random().toString(36).substring(2, 11),
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      service: data.service || '',
      message: data.message,
      createdAt: new Date(),
    };

    try {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      let messages: ContactMessageEntity[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        messages = JSON.parse(fileContent || '[]');
      }

      messages.push(newRecord);
      fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');
      console.log(`Saved contact inquiry for ${data.name} to local contact-messages.json`);
    } catch (fsError) {
      console.error('Local file system fallback write failed:', fsError);
    }

    return newRecord;
  }
}
