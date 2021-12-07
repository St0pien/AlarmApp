import * as SQLite from 'expo-sqlite';

export default class DB {
  static init() {
    this.db = SQLite.openDatabase('stepien_jakub_4id2.db');
    this.db.transaction(transaction => {
      transaction.executeSql(
        'CREATE TABLE IF NOT EXISTS alarms (id integer primary key not null, hour text);'
      );
    });
  }

  static addAlarm(hour) {
    this.db.transaction(transaction => {
      transaction.executeSql(`INSERT INTO alarms (hour) VALUES ('${hour}')`);
    });
  }

  static getAlarms() {
    return new Promise((resolve, reject) =>
      this.db.transaction(transaction => {
        transaction.executeSql(
          'SELECT * FROM alarms',
          [],
          (_, results) => {
            resolve(results.rows._array);
          },
          (_, err) => {
            reject(err);
          }
        );
      })
    );
  }

  static delete(id) {
    this.db.transaction(transaction => {
      transaction.executeSql(`DELETE FROM alarms WHERE id = ${id}`);
    });
  }
}
