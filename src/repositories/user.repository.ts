import db from "../db";
import User from "../models/user.model";
import config from 'config';

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `SELECT uuid, username FROM application_user`;

    const { rows } = await db.query<User>(query);

    return rows || [];
  }

  async findById(uuid: string): Promise<User> {
    const query = `SELECT uuid, username FROM application_user WHERE uuid = $1`;
    const { rows } = await db.query<User>(query, [uuid]);
    const [user] = rows;
    return user || {};
  }

  async create(user: User): Promise<string> {
    const query = `INSERT INTO application_user (
        username, password
        ) 
        VALUES ($1, crypt($2, $3))
        RETURNING uuid`

    const values = [user.username, user.password, config.get('db.salt')];

    const {rows} = await db.query<{uuid: string}>(query, values);
    const [newUser] = rows;
    return newUser.uuid || ''
  }
}

export default new UserRepository();
