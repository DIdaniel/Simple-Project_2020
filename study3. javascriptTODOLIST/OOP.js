'use strict';




class Song {
  constructor(title, writer, singer, released){
    this.title = title;
    this.writer = writer;
    this.singer = singer;
    this.released = new Date(released);
  }
  
  getRealesedDay(){
    return this. released.getDay();
  }

  getSongInfo(){
    return  `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
  }

}



// 인스턴스 

const song1 = new Song('love yourself', 'eminem', 'eminem', '1991-07-11');
const song2 = new Song('hater', 'joe', 'eminem', '2055-05-20');


console.log(song1.getSongInfo(), song2.getSongInfo());


