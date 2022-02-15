import Parser from 'rss-parser'

let parser = new Parser();

let topStories = async () => {
    try{
        let feed = await parser.parseURL(`http://feeds.feedburner.com/ndtvnews-top-stories?format=xml`)
        console.log(feed.title)
        console.log()

        feed.items.forEach(item => {
            console.log(item.title)
            console.log()
        })
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log(`!!!!!!!!!!!!`)
    }
}

// NDTV
// World -> http://feeds.feedburner.com/ndtvnews-world-news?format=xml
// India -> http://feeds.feedburner.com/ndtvnews-india-news?format=xml

// The Hindu
// https://www.thehindu.com/news/national/feeder/default.rss
// https://www.thehindu.com/news/international/feeder/default.rss
// https://www.thehindu.com/business/feeder/default.rss
// https://www.thehindu.com/sport/feeder/default.rss
// https://www.thehindu.com/entertainment/feeder/default.rss

// BBC
// http://feeds.bbci.co.uk/news/rss.xml
// http://feeds.bbci.co.uk/news/world/rss.xml
// http://feeds.bbci.co.uk/news/business/rss.xml
// http://feeds.bbci.co.uk/news/politics/rss.xml
// http://feeds.bbci.co.uk/news/science_and_environment/rss.xml
// http://feeds.bbci.co.uk/news/technology/rss.xml

// UN
// https://news.un.org/feed/subscribe/en/news/all/rss.xml
// https://news.un.org/feed/subscribe/en/news/topic/health/feed/rss.xml
// https://news.un.org/feed/subscribe/en/news/topic/human-rights/feed/rss.

// INDIA Today
// https://www.indiatoday.in/rss/home
// https://www.indiatoday.in/rss/1206514
// https://www.indiatoday.in/rss/1206584

topStories()