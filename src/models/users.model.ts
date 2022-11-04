import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces';

const createUser = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  return {
    id: insertId,
    ...user,
  };
};

export default {
  createUser,
};