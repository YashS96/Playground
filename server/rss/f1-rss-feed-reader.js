import rssParser from'rss-parser'

let parser = new rssParser();

let feedReader = async ()=>{
   try{
    
    let feed = await parser.parseURL(`https://www.formula1.com/content/fom-website/en/latest/all.xml`);
    
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
        console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
    }
}

feedReader()