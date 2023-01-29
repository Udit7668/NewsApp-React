import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles=[
              {
                "source": { "id": null, "name": "Gizmodo.com" },
                "author": "Lucas Ropek",
                "title": "OG Bitcoin Core Developer Claims Hack Drained Nearly All His BTC",
                "description": "Even cryptocurrency’s most accomplished tech wizards apparently aren’t immune from the occasional wallet-draining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone swiped hundreds of BTC from his accounts late last year—l…",
                "url": "https://gizmodo.com/bitcoin-price-hack-217-btc-og-developer-luke-dashjr-1849944799",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8e3b3fe0595dfbab3656a5ba0e06e2c.jpg",
                "publishedAt": "2023-01-03T20:48:00Z",
                "content": "Even cryptocurrencys most accomplished tech wizards apparently arent immune from the occasional wallet-draining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone… [+2723 chars]"
              },
              {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Bitcoin rises 5.5% to $19897 - Reuters",
                "description": "Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.",
                "url": "https://www.reuters.com/technology/bitcoin-rises-55-19897-2023-01-13/",
                "urlToImage": "https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg",
                "publishedAt": "2023-01-13T22:24:00Z",
                "content": "Jan 13 (Reuters) - Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is up 20.6% from the year's … [+277 chars]"
              },
              {
                "source": { "id": null, "name": "Benzinga" },
                "author": "Mehab Qureshi",
                "title": "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
                "description": "<ol><li>Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls'  Benzinga\r\n</li><li>Bitcoin roars past $20K in surprise surge. Can the rally last?  Fortune\r\n</li><li>Bitcoin rises 5.6% to $210…",
                "url": "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
                "urlToImage": "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
                "publishedAt": "2023-01-16T02:50:45Z",
                "content": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]"
              },
              {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Cryptoverse: Bitcoin digs in for a bumpy new year - Reuters",
                "description": "Bitcoin's looking steady in 2023. But it's only been a week.",
                "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-digs-bumpy-new-year-2023-01-10/",
                "urlToImage": "https://www.reuters.com/resizer/X3Jk6UQ0SKvWNnppKO5lu9_yqog=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ILQYPK7MD5I4LM3ZX2OQXO7HQ4.jpg",
                "publishedAt": "2023-01-10T06:15:00Z",
                "content": "Jan 10 (Reuters) - Bitcoin's looking steady in 2023. But it's only been a week.\r\nCryptocurrencies have crept into the new year, licking their wounds after the carnage of 2022. The overall global cryp… [+3311 chars]"
              },
              {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Salvadoran lawmakers pass digital asset issuance law in bitcoin ... - Reuters",
                "description": "El Salvador, which became the first country in the world to recognize bitcoin as a legal tender two years ago, approved on Wednesday a law that would regulate the issuance of other digital assets by both the state and private entities.",
                "url": "https://www.reuters.com/technology/salvadoran-lawmakers-pass-digital-asset-issuance-law-bitcoin-haven-2023-01-11/",
                "urlToImage": "https://www.reuters.com/resizer/rkaBfdVh5pslz1PlX9dSgLx_LdQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7W3WX6L65FKZFBSETGBOPRFN7E.jpg",
                "publishedAt": "2023-01-11T21:57:00Z",
                "content": "SAN SALVADOR, Jan 11 (Reuters) - El Salvador, which became the first country in the world to recognize bitcoin as a legal tender two years ago, approved on Wednesday a law that would regulate the iss… [+1928 chars]"
              },
              {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Cryptoverse: Bitcoin is back with a bonk - Reuters",
                "description": "Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.",
                "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-is-back-with-bonk-2023-01-17/",
                "urlToImage": "https://www.reuters.com/resizer/jPD5gWOp4iaNFHGJCoc9M20WksQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MLQZOZNWTZLSRJTK4RZJLSI364.jpg",
                "publishedAt": "2023-01-17T06:16:00Z",
                "content": "Jan 17 (Reuters) - Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.\r\nThe No.1 cryptocurrency has clocked a 26% gain in January, leapi… [+4367 chars]"
              },
              {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Davos 2023: Scaramucci's SkyBridge bets on $35k bitcoin, targets ... - Reuters.com",
                "description": "SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view was \"overly bullish\".",
                "url": "https://www.reuters.com/technology/davos-2023-scaramuccis-skybridge-bets-35k-bitcoin-targets-credit-2023-01-16/",
                "urlToImage": "https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg",
                "publishedAt": "2023-01-16T17:56:00Z",
                "content": "DAVOS, Switzerland, Jan 16 (Reuters) - SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view … [+1366 chars]"
              },
              {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Silvergate and other crypto-linked stocks climb as bitcoin notches its highest price in 5 months",
                "description": "Silvergate stock surged more than 12% on Monday after bitcoin hit $23,000 over the weekend.",
                "url": "https://markets.businessinsider.com/news/stocks/silvergate-stock-price-si-coinbase-coin-crypto-bitcoin-notches-highs-2023-1",
                "urlToImage": "https://i.insider.com/63cea934b9a04b0019eda8ef?width=1200&format=jpeg",
                "publishedAt": "2023-01-23T17:20:50Z",
                "content": "Silvergate and other crypto-linked stocks are climbing after bitcoin notched a five-month high over the weekend.\r\nThe crypto-focused bank is up over 12% at $15.45 on Monday, after diving earlier this… [+2724 chars]"
              },
              {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "MicroStrategy just did was CEO Michael Saylor once said would never happen: it sold bitcoin",
                "description": "\"Never. No. We're not sellers,\" Saylor said in January. \"We're only acquiring and holding bitcoin, right? That's our strategy.\"",
                "url": "https://markets.businessinsider.com/news/currencies/microstrategy-bitcoin-sale-first-time-ever-michael-saylor-margin-call-2022-12",
                "urlToImage": "https://i.insider.com/63ac7e1c3e42ed001855b8dd?width=1200&format=jpeg",
                "publishedAt": "2022-12-28T17:58:14Z",
                "content": "MicroStrategy sold bitcoin for the first time, after CEO Michael Saylor said early this year that such a sale would never happen.\r\nCiting tax reasons, the enterprise-software firm sold 704 bitcoins o… [+1277 chars]"
              }
      ]

      constructor(){
        super();
     console.log("Hello from news constructor")
    //creating state in class based component
    this.state={
        articles:this.articles,
        loading:false
    }

    }

  render() {
    return (
      <div  className='container my-3'>
         <h2>MonkeyNews-Top Headline</h2>
       <div className="row">
       {this.state.articles.map((element)=>{
   return <div className="col-md-4" key={element.url}>
   <NewsItems title={element.title.slice(0,40)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
    </div>
      })}

       </div>
      </div>
    )
  }
}

export default News
