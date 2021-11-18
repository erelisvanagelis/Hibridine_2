import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
  {
    name: 'AdvertsDB',
    location: 'default',
    createFromLocation: '~AdvertsDB.db',
  },
  () => {
    console.log('OK veikia');
  },
  (error) => {
    console.log('Error:' + error);
  },
);

export const init = () => {
  db;
};

export const insertAdvert = (userid, title, description, price) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO advert (userid, title, description, price) VALUES (?, ?, ?, ?);',
        [userid, title, description, price],
        (tx, result) => {
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        },
      );
    });
  })
  return promise;
};

export const updateAdvert = (id, title, description, price) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE advert SET title = ?, description = ?, price = ? WHERE id = ?',
        [title, description, price, id],
        (tx, result) => {
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        },
      );
    });
  })
  return promise;
};

export const selectAdverts = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM advert', [], (tx, result) => {
          resolve(result);
          console.log(result);
        },
        (tx, err) => {
          reject(err);
        }
      );
    });
  });
  return promise
}

export const deleteAdvert = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM Advert WHERE id=?', [id], (tx, result) => {
          console.log(result)
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        }
      );
    });
  });
  return promise
}

export const insertUser = (name, surname, password, phone) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx_) => {
      tx_.executeSql(
        'INSERT INTO User (name, surname, password, phone) VALUES (?,?,?,?);',
        [name, surname, password, phone],
        (_, result) => {
          resolve(result);
          console.log('Ivesta')
        }, 
        (_, err) => {
          console.log('Neivesta');
          reject(err);
        }
      )
    })
  })
  return promise;
};

export const selectUserByNamePassword = (name, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user WHERE name = ? and password = ?;',
        [name, password],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};