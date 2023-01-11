// const env = require('../../environment');

// console.log('env: ', env);
export class Configuration {
  public static readonly mongoDBs = {
    atlas: {
      protocol: 'mongodb+srv',
      database: 'ukraine_now',
      host: 'ukraine-now-mongo:V3FOC99GhcedN26f@cluster0.um2gvlr.mongodb.net',
    },
  };
}
