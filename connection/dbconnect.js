/**
 * Created by Pranav on 26-05-2017.
 */
/** This initialisation is likely to happen once in the entire application. It creates connection pool for the current database, refer the bookshelf instance returned by this throughout the library**/

var knex = require('knex') ({
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tutorial'
    }
});

var bookshelf = require('bookshelf')(knex);

/*var User = bookshelf.Model.extend({
    tableName: 'users'
});*/

module.exports = bookshelf;

// now we can use this file anywhere where we wish to perform some database related queries