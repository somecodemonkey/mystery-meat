var dirs = 'nesw';
var EnvParser = require('./parsers/env-parser.js');


function bot (state, callback) {
    var env = EnvParser(state.game);
    console.log(env.map(), env.heroes());

    var i = Math.floor(Math.random() * 4);
    var dir = dirs[i];
    callback(null, dir);
}

module.exports = bot;
if (require.main === module)
    require('vindinium-client').cli(bot);