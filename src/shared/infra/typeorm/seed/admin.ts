import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidv4();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "admin", driver_license, created_at) values(
      '${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'xxx-xxxx', 'now()'
    )`,
  );

  await connection.close;
}

create().then(() => console.log('User admin created'));
