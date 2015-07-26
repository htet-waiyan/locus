var shwedagon={
  name:"Shwedagon",
  content:{
      about:"The Shwedagon Pagoda; ကျာ် လ္ဂုၚ်, officially named Shwedagon Zedi Daw and also known as the Great Dagon Pagoda and the Golden Pagoda, is a gilded stupa located in Yangon, Myanmar.",
      detail:"Historians and archaeologists maintain that the pagoda was built by the Mon people between the 6th and 10th centuries CE.[1] However, according to legend, the Shwedagon Pagoda was constructed more than 2,600 years ago, making it the oldest Buddhist stupa in the world.[2] According to tradition, Taphussa and Bhallika — two merchant brothers from the city of Balkh in what is currently Afghanistan — met the Lord Gautama Buddha during his lifetime and received eight of the Buddha's hairs. The brothers traveled to Burma and, with the help of the local ruler, King Okkalapa, found Singuttara Hill, where relics of other Buddhas preceding Gautama Buddha had been enshrined.",
      link:"https://en.wikipedia.org/wiki/Shwedagon_Pagoda"
  },
  recommend:0,
  coordinates:{
    lat:"16.798380",
    lgt:"96.149620"
  },
  attractions:[{
    name:"",
    content:{about:"",detail:""}
  }],
  images:['localhost:3000/api/v1/images/sdg1.png','localhost:3000/api/v1/images/sdg2.jpg','localhost:3000/api/v1/images/sdg3.jpg','localhost:3000/api/v1/images/sdg4.jpg','localhost:3000/api/v1/images/sdg5.jpg']
}

var inleLake={
  name:"Inle Lake",
  content:{
    about:"Inle Lake is a freshwater lake located in the Nyaungshwe Township of Taunggyi District of Shan State, part of Shan Hills in Myanmar.",
    detail:"The best time of the year to visit is during September and October. The ceremonial Hpaung Daw U Festival, which lasts for almost three weeks, is closely followed by the Thadingyut festival of lights. Inthas and Shan turn out in their best clothes in great numbers to celebrate the Buddhist Lent. Traditional boat racing, with dozens of leg-rowers in Shan dress in a team on each boat, is a famous event during the Hpaung Daw U Festival.",
    link:"https://en.wikipedia.org/wiki/Inle_Lake"
  },
  recommend:0,
  coordinates:{
    lat:"20.595524",
    lgt:"96.911248"
  },
  attractions:[{
    name:"",
    content:{about:"",detail:""}
  }],
  images:['localhost:3000/api/v1/images/inle1.jpg','localhost:3000/api/v1/images/inle2.jpg','localhost:3000/api/v1/images/inle3.jpg','localhost:3000/api/v1/images/inle4.jpg','localhost:3000/api/v1/images/inle5.jpg']
}

var places=[shwedagon,inleLake];

var db=connect("localhost:27017/gdl-dev");
var row=db.place.insert(inleLake,{w:1,ordered:true});

print("Inserted : "+row+" documents");
