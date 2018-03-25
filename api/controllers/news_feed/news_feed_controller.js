let newsCollection = require('../../../models/news_collection.json');
let count = 0;
var readNews = function (socket) {
    ++count;
    console.log(count);
    if (newsCollection && newsCollection[count]) {
        console.log(newsCollection[count])
        socket.emit('news', {
            news: newsCollection[count]
        });
    } else {
        socket.emit('news', {
            error: 'Oops! No news found.'
        });
    }
}
module.exports.readNews = readNews;