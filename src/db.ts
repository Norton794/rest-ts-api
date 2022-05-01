import {Pool} from 'pg'
import config from 'config';
 
const connectionString = config.get<string>('db.dbConfig');

const db = new Pool({connectionString})

export default db