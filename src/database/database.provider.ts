import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const DATA_SOURCE = Symbol('DATA_SOURCE');

export const databaseProvider: Provider = {
  provide: DATA_SOURCE,
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'presentationnest',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Attention a cet argument
    });

    return dataSource.initialize();
  },
};