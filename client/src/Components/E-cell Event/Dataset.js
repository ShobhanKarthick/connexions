const dataset = [
  {
    clue: "TV Series",
    answer: "Dark",
    links: [
      "https://i.pinimg.com/originals/50/f2/26/50f2261e4e3a97bf5a5f58af5ec2f845.png",
      "https://mathbooks.unl.edu/PreCalculus/images/imagesChap15/arclength.png",
    ],
  },
  {
    clue: "TV Series",
    answer: "Money Heist",
    links: [
      "https://res.cloudinary.com/hellokittycloud/image/upload/v1594578722/MonicaGellarEverywhereistPost-e1554168816516_dbyed5.png",
      "https://res.cloudinary.com/hellokittycloud/image/upload/v1594578732/download1_cto9rh.jpg",
      "https://i0.wp.com/blog.clinicalmonster.com/wp-content/uploads/sites/3/2015/11/spongebob.jpg?fit=260%2C251",
      "https://res.cloudinary.com/hellokittycloud/image/upload/v1594578728/download_zlhw13.jpg",
    ],
  },
  {
    clue: "TV Series",
    answer: "Peaky Blinders",
    links: [
      "https://www.iowaclinic.com/webres/Image/article-thumbnails/pee_problems_800X533.jpg",
      "https://d1pra95f92lrn3.cloudfront.net/media/thumb/8404_fit512.jpg",
      "https://leapsmag.com/wp-content/uploads/2018/01/blindness_adjusted-3200x2128.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSluMhCSG2EAVKuFQvrP9X9ADBiEUTTQu00uA&usqp=CAU",
    ],
  },
  {
    clue: "TV Series",
    answer: "Sherlock",
    links: [
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-550306,resizemode-1,msid-71288834/markets/stocks/news/this-smallcap-stock-is-down-92-promoter-lapping-up-shares-big-time/stocks-market.jpg",
      "https://icons-for-free.com/iconfiles/png/512/Lock-1320568043107965480.png",
    ],
  },
  {
    clue: "TV Series",
    answer: "Breaking Bad",
    links: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUjoqaW5FAFly1G_8Ofto4qpvujJvdVUj9mw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQskPi_nX4lGFbERjQ4LOBXVppl7CTL8ECOKw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7_TO8CjMYQUh0xrHPlbbf2pcaG9nxeEhe1g&usqp=CAU",
    ],
  },
  {
    clue: "TV series",
    answer: "Game of thrones",
    links: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXSpY8ewb3TuJs2sNdgJBLK260OFxDw9V6dg&usqp=CAU",
      "https://www.thoughtco.com/thmb/H7NWtRZMvXP7BR8qc7d7IJKsTbo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-183282744-f3851402ca91475f981fc8ffa8675149.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYMmiBZqdNEJ9sdUfTbZhtyOfb4xLZd-oIjw&usqp=CAU",
    ],
  },
  {
    clue: "TV Series",
    answer: "The Bing Bang Theory",
    links: [
      "https://res.cloudinary.com/hellokittycloud/image/upload/v1594550148/the_slay6d.jpg",
      "https://d1ilnltdtrvmj1.cloudfront.net/og_images/bigbasket-cashback-and-coupon-offers-83420667.png",
      "https://article.innovadatabase.com/articleimgs/article_images/63723752036493109769349037_2337203559876730_6173757978940801024_o.jpg",
      "https://image.slidesharecdn.com/einsteinstheoryofgeneralrelativity-170223195313/95/einsteins-theory-of-general-relativity-1-638.jpg?cb=1487880052",
    ],
  },
  {
    clue: "Tv Series",
    answer: "Stranger Things",
    links: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Saint_Joseph%27s_Catholic_Church_%28Central_City%2C_Kentucky%29_-_stained_glass%2C_St._Theresa_of_%C3%81vila_detail.jpg/1200px-Saint_Joseph%27s_Catholic_Church_%28Central_City%2C_Kentucky%29_-_stained_glass%2C_St._Theresa_of_%C3%81vila_detail.jpg",
      "https://www.denofgeek.com/wp-content/uploads/2014/09/power-rangers-episodes-fan.jpg?fit=1993%2C1258",
      "https://im.idiva.com/content/2014/Mar/why_you_must_think_positive.jpg",
      "https://yinmiaoyangmeow.files.wordpress.com/2012/05/20120515-210652.jpg",
    ],
  },
  {
    clue: "Movie",
    answer: "Need for Speed",
    links: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhXhv2E9pctSGmW0sF3YFz9HU_e5nmU463A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS594mCgok7BqIxNQG8M7Q5p9wHENDy7EWElA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZbsFu8YY2JN6D11aHdIEqg1kCym3xx2UNLQ&usqp=CAU",
    ],
  },
  {
    clue: "Movie",
    answer: "Avengers",
    links: [
      "https://assets.croma.com/medias/sys_master/images/images/had/h5c/8852526825502/218408_pjpeg.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41nK4dvbnfL._AC_.jpg",
    ],
  },
  {
    clue: "Movie",
    answer: "Beauty and the beast",
    links: [
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/F26F/production/_105636026_gettyimages-1005384726.jpg",
      "https://www.kindpng.com/picc/m/599-5994567_finger-pointing-at-you-png-transparent-png.png",
      "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/31/what-next-for-lipton-and-pg-tips-unilever-s-strategic-tea-review/10657232-5-eng-GB/What-next-for-Lipton-and-PG-Tips-Unilever-s-strategic-tea-review.jpg",
      "https://www.computerscience.gcse.guru/wp-content/uploads/2016/11/AND.png",
      "https://res.cloudinary.com/hellokittycloud/image/upload/v1594550148/the_slay6d.jpg",
      "https://www.netclipart.com/pp/m/410-4100343_satan-devil-lucifer-samael-angel-demon-thedevil-devil.png",
    ],
  },
];

export default dataset;