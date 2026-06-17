/* =========================================================
   10 Strangers 100 Stories — data.js
   미디어 메타데이터. 6명 × 10질문 = 60개 (Aku [3] 없음 → 59)
   ========================================================= */

const PEOPLE = ['Aku', 'Andrea', 'Chunem', 'Soakie', 'Toha', 'Yuyu'];

const QUESTIONS = [
  { n: 1,  name: 'Where you are'      },
  { n: 2,  name: 'Home for now'       },
  { n: 3,  name: 'Everyday carry'     },
  { n: 4,  name: 'A favorite spot'    },
  { n: 5,  name: 'A comfort food'     },
  { n: 6,  name: 'A trace of home'    },
  { n: 7,  name: 'Proof of belonging' },
  { n: 8,  name: 'The local language' },
  { n: 9,  name: 'Mother tongue'      },
  { n: 10, name: 'In the future'      },
];

/* =========================================================
   미디어 목록
   - person:   사람 이름 (폴더명과 정확히 일치)
   - q:        질문 번호 1~10
   - file:     실제 파일명 (확장자 포함)
   - type:     'photo' | 'video' | 'audio' | 'map'
   - mapUrl:   map 타입일 때만 — 클릭 시 열릴 구글맵 URL
   ========================================================= */

const MEDIA = [
  // ========== Aku ==========
  { person: 'Aku', q: 1,  file: '[1] Where you are.jpg',       type: 'photo' },
  { person: 'Aku', q: 2,  file: '[2] Home for now*.JPG',       type: 'photo' },
  // [3] 없음 — 의도적 비움
  { person: 'Aku', q: 4,  file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9231159517803!2d8.7165976!3d48.8787422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479771e361c1c105%3A0xf080269e06186a53!2sPforzheim%20University!5e0!3m2!1sen!2skr!4v1781640750758!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/ycjbnYCNi2PPhGWP7' },
  { person: 'Aku', q: 5,  file: '[5] A comfort food.jpg',      type: 'photo' },
  { person: 'Aku', q: 6,  file: '[6] A trace of home.jpg',     type: 'photo' },
  { person: 'Aku', q: 7,  file: '[7] Proof of belonging*.jpg', type: 'photo' },
  { person: 'Aku', q: 8,  file: '[8] The local language.m4a',  type: 'audio' },
  { person: 'Aku', q: 9,  file: '[9] Mother tongue.mp4',       type: 'video' },
  { person: 'Aku', q: 10, file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.91842853933!2d2.3470340999999997!3d48.8588549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2skr!4v1781640762412!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/WrGp9nPMDzW6Hh9e7' },

  // ========== Andrea ==========
  { person: 'Andrea', q: 1,  file: '[1] Where you are.jpg',        type: 'photo' },
  { person: 'Andrea', q: 2,  file: '[2] Home for now.jpg',         type: 'photo' },
  { person: 'Andrea', q: 3,  file: '[3] Everyday carry.JPG',       type: 'photo' },
  { person: 'Andrea', q: 4,  file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2700.627803862235!2d8.4836219!3d47.3996945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bed84d7bc7d%3A0xd3725519e8442b0e!2sGarten%20Werdinsel!5e0!3m2!1sen!2skr!4v1781640805588!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/wMLkbumk35JVVVnB6' },
  { person: 'Andrea', q: 5,  file: '[5] A comfort food.mp4',       type: 'video' },
  { person: 'Andrea', q: 6,  file: '[6] A trace of home.mp4',      type: 'video' },
  { person: 'Andrea', q: 7,  file: '[7] Proof of belonging.JPG',   type: 'photo' },
  { person: 'Andrea', q: 8,  file: '[8] The local language.opus',  type: 'audio' },
  { person: 'Andrea', q: 9,  file: '[9] Mother tongue.opus',       type: 'audio' },
  { person: 'Andrea', q: 10, file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312866.433252556!2d127.8733!3d35.819050000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356455ebcb11ba9b%3A0x91249b00ba88db4b!2sSouth%20Korea!5e0!3m2!1sen!2skr!4v1781640818125!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/mZQRGykKz9wtaWuHA' },

  // ========== Chunem ==========
  { person: 'Chunem', q: 1,  file: '[1] Where you are.jpg',        type: 'photo' },
  { person: 'Chunem', q: 2,  file: '[2] Home for now.jpg',         type: 'photo' },
  { person: 'Chunem', q: 2,  file: '[2]-2 Home for now.jpg',      type: 'photo', variant: 2 },
  { person: 'Chunem', q: 3,  file: '[3] Everyday carry*.jpg',      type: 'photo' },
  { person: 'Chunem', q: 4,  file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5437.106887974157!2d8.2996271!3d47.0489928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffb0a95185ced%3A0xc297930e2d6dd76e!2sLuzerner%20Brockenhaus!5e0!3m2!1sen!2skr!4v1781640857825!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/fvVRUiVSXbhJWUhn7' },
  { person: 'Chunem', q: 5,  file: '[5] A comfort food.jpg',       type: 'photo' },
  { person: 'Chunem', q: 6,  file: '[6] A trace of home.jpg',      type: 'photo' },
  { person: 'Chunem', q: 7,  file: '[7] Proof of belonging*.jpg',  type: 'photo' },
  { person: 'Chunem', q: 8,  file: '[8] The local language.ogg',   type: 'audio' },
  { person: 'Chunem', q: 9,  file: '[9] Mother tongue.ogg',        type: 'audio' },
  { person: 'Chunem', q: 10, file: '[10] In the future.jpg',       type: 'photo' },
  { person: 'Chunem', q: 10, file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398041.1378619722!2d8.224118950000001!3d46.8131873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2skr!4v1781641029479!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/dU4EQLxNJmeXVr38A' },

  // ========== Soakie ==========
  { person: 'Soakie', q: 1,  file: '[1] Where you are.MOV',        type: 'video' },
  { person: 'Soakie', q: 2,  file: '[2] Home for now.jpg',         type: 'photo' },
  { person: 'Soakie', q: 2,  file: '[2]-2 Home for now.jpg',      type: 'photo', variant: 2 },
  { person: 'Soakie', q: 3,  file: '[3] Everyday carry.jpg',       type: 'photo' },
  { person: 'Soakie', q: 4,  file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.774758488068!2d-73.9511741!3d40.722974699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bde5e22c139%3A0xfd0e4b9a3ebab051!2sHigh%20Valley%20Books%20Open%20by%20Appointment!5e0!3m2!1sen!2skr!4v1781640723671!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/BZjQutXaip2ifmqX9' },
  { person: 'Soakie', q: 5,  file: '[5] A comfort food.jpg',       type: 'photo' },
  { person: 'Soakie', q: 6,  file: '[6] A trace of home.JPG',      type: 'photo' },
  { person: 'Soakie', q: 7,  file: '[7] Proof of belonging*.jpg',  type: 'photo' },
  { person: 'Soakie', q: 8,  file: '[8] The local language.mov',   type: 'video' },
  { person: 'Soakie', q: 9,  file: '[9] Mother tongue.mov',        type: 'video' },
  { person: 'Soakie', q: 10, file: '[10] In the future.JPG',       type: 'photo' },
  { person: 'Soakie', q: 10, file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662873.2451231668!2d139.7698121!3d35.50924045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2skr!4v1781640735727!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/gR2LhaftHHV2N52v9' },

  // ========== Toha ==========
  { person: 'Toha', q: 1,  file: '[1] Where you are.jpg',         type: 'photo' },
  { person: 'Toha', q: 2,  file: '[2] Home for now.jpg',          type: 'photo' },
  { person: 'Toha', q: 3,  file: '[3] Everyday carry.jpg',        type: 'photo' },
  { person: 'Toha', q: 4,  file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7724.346509242503!2d121.02299839999999!3d14.5320804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c92ff6e0f13b%3A0xc94c3e7326d27b38!2sKarrivin%20Plaza!5e0!3m2!1sen!2skr!4v1781640781295!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/FE84Bgod2J5qQRxR8' },
  { person: 'Toha', q: 5,  file: '[5] A comfort food.jpg',        type: 'photo' },
  { person: 'Toha', q: 6,  file: '[6] A trace of home.jpg',       type: 'photo' },
  { person: 'Toha', q: 7,  file: '[7] Proof of belonging*.jpg',    type: 'photo' },
  { person: 'Toha', q: 8,  file: '[8] The local language.m4a',    type: 'audio' },
  { person: 'Toha', q: 9,  file: '[9] Mother tongue.m4a',         type: 'audio' },
  { person: 'Toha', q: 10, file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12347741.84181763!2d175.00390869999998!3d-40.9248354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2skr!4v1781640980389!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/C1oUnSqq7r26i8GX7' },

  // ========== Yuyu ==========
  { person: 'Yuyu', q: 1,  file: '[1] Where you are.JPG',         type: 'photo' },
  { person: 'Yuyu', q: 1,  file: '[1]-2 Where you are.mp4',      type: 'video', variant: 2 },
  { person: 'Yuyu', q: 2,  file: '[2] Home for now.JPG',          type: 'photo' },
  { person: 'Yuyu', q: 2,  file: '[2]-2 Home for now.JPG',        type: 'photo', variant: 2 },
  { person: 'Yuyu', q: 3,  file: '[3] Everyday carry.JPG',        type: 'photo' },
  { person: 'Yuyu', q: 4,  file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.48411509932!2d138.80424449999998!3d35.4923058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601967c61e5dbe51%3A0x33629db04c9ffc8c!2sKURA%20HOUSE%20FUJIYOSHIDA!5e0!3m2!1sen!2skr!4v1781640664835!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/cvybD9CYXJQH9hBVA' },
  { person: 'Yuyu', q: 5,  file: '[5] A comfort food.JPG',        type: 'photo' },
  { person: 'Yuyu', q: 6,  file: '[6] A trace of home.JPG',       type: 'photo' },
  { person: 'Yuyu', q: 7,  file: '[7] Proof of belonging*.jpg',    type: 'photo' },
  { person: 'Yuyu', q: 8,  file: '[8] The local language.mp4',    type: 'video' },
  { person: 'Yuyu', q: 9,  file: '[9] Mother tongue.m4a',         type: 'audio' },
  { person: 'Yuyu', q: 10, file: null, type: 'map',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13627579.110253131!2d137.15386460000002!3d33.5001886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2skr!4v1781640702917!5m2!1sen!2skr',
    openUrl:  'https://maps.app.goo.gl/7t68X96NoV7Ssvfg7' },
];

/* =========================================================
   인터뷰 텍스트 — 사람별 전체 인터뷰 한 덩어리 또는 질문별로 분리
   일단 더미. 나중에 txt 파일 내용으로 갈아끼움.
   ========================================================= */

/* =========================================================
   인터뷰 텍스트 — 사람별, 질문별 텍스트
   각 질문에 대한 답이 들어감. 미디어가 화면에 들어오면 해당 텍스트가
   우측에 페이드인.

   현재 placeholder. 실제 텍스트는 추후 채워넣음.
   ========================================================= */

const INTERVIEWS = {
  Aku: {
    1: `Now I'm in Pforzheim. I was born and grew up in India. Until I came to Germany, I had always lived in my home country. I came here in 2024 to do my master's degree, an MBA, which is a Master's in Business Administration. It includes different types of management. This semester, I took a break, and next semester will be my thesis. After that, I'll start working.

This is my first international experience. Before coming to Germany, I had only traveled around India. I had never really thought about going outside India before. Germany is my first time living abroad. Since coming here, I've also been traveling a lot.

This is the rooftop view from my place. I specifically like this picture because the moon was rising while the sun was setting.

It was the first time in my life that I saw both the sun and the moon at the same time, both on the horizon. The sun was setting, and the moon was rising. This was during my first week here, so it reminds me of that time.

[Q]Were you afraid when you first came here?
Afraid? Fuck no. I was never afraid. I was just excited.

[Q]How is this city different from the place where you grew up in India?
Everything. The nature, the landscape, the houses, the architecture, the air, the people. Everything is different.

[Q]What about culture-wise?
I come from a conservative family and religious background, so everything felt very different. Everything is open here.

When I came here and took this picture, I saw some people on the rooftop just making out. Also, people drink alcohol, and some of them are not even 18. That was the kind of culture shock I actually faced.`,

    2: `[Q]You're living in a dormitory now, right? Is it a shared flat? How many people live there?
It's a dorm with around 200 flats. It's not exactly shared, because I have my own room and my own bathroom. We only share the kitchen. The kitchen is for the whole floor, so around 34 people share one big kitchen.

But I like having my own room and my own bathroom.

[Q]Do you sometimes feel lonely in this room?
No, I've never really felt lonely. Honestly, I make a lot of friends. I just go out and talk to everyone. Since I have a lot of friends, there is always someone I can talk to. If I feel bored, I just go out.

I don't really feel lonely, but I do feel bored sometimes. I've made up my mind not to think too much about homesickness. I distract myself from feeling lonely or thinking about going back.

[Q]If someone asked you where your home is now, would you say India, Germany, or somewhere else?
I would always say my home is in India. My parents are my everything. My preference would always be toward my family.`,

    3: `[Q]Are there moments when life in Germany feels satisfying or comfortable to you?
Soon after I came here, I felt like this was the right place for me. I like that it is organized and planned. Everything is good, so my brain functions in the right way.

I also have local friends, and I've always felt comfortable and welcomed.`,

    4: `[Q]So your favorite place is your school?
To be honest, no. But every place is a favorite for me. I just enjoy being here.

Sometimes it doesn't matter where I walk. It's not about my favorite place, but my favorite people. My favorite place is where my favorite people are. When I go out with my local friends here, that becomes my favorite place.

I go to so many places. I go to cafés, restaurants, shops. Everything becomes a favorite.

But since I spend literally Monday to Saturday at the fucking university, I have to say my university is my favorite place because I spend more time there than anywhere else.

[Q]Even more than your room, I guess.
Exactly.

[Q]Yeah, that's master's life.
Yeah, too stressful.`,

    5: `[Q]Which city in India are you from?
It's called Vizag. V-I-Z-A-G. It's in the southern part of India. My city is filled with mountains and beaches. It's completely surrounded by nature. It's really good.

This is my comfort food, and also one of the most loved foods in India. It's a snack. Actually, we eat it every day in the evening. It's called Panipuri. It's the most Indian snack you'll ever have. If you visit any Indian person, they will give you this.

For Panipuri, you break the round crispy shell, put mashed potato, onions, carrots, and lemon juice inside, and then pour in this green liquid made with coriander and mint.

When I was in India, I used to eat this every single day. It's so addictive and light. It doesn't make you feel heavy. You can eat one after another, especially in the evening.

[Q]Do you also cook it yourself in Germany?
Yeah, I did it myself. This was in Germany. I really love cooking. I cook Indian food all the time.

[Q]Can you get all the ingredients here in Germany?
Yeah, everything. I can get them from the Indian store. For example, I just went yesterday because I ran out of rice and some spices.

[Q]Do you usually eat Indian food when you miss home?
All the time. I'm vegetarian, so I don't really eat outside here. I try to make my own food, and most of the time, I make Indian food because I'm more into Indian food than anything else in the world.

I make two dishes per day. For lunch, I make something fresh, and for dinner, I also make something fresh. So every meal is different, with different styles.`,

    6: `I chose these coffee cups and the moka pot because this is very typical and traditional in India, especially in South India. I always try to make coffee, and it reminds me of home.

[Q]Do you also drink a lot of coffee in India?
Too much. Coffee runs through my blood.

[Q]What do you usually miss most about India?
Food. Food. Fucking food.

I love eating all the sweet foods and Indian dishes. I like eating the food from home, like the food my mom makes. That's the reason I always try to make it myself.

We live in a tropical climate, and summer is also the time when we meet our relatives. We always go to our family's place and hang out. I miss that too.

[Q]Do you call your family often?
I call them at least four times a week. Indians are always into family and bonding. Even if I don't call my mom, the next day she will call me and say, "Did you forget me?" Then I have to give her a reason.`,

    7: `[Q]Did this document make you feel accepted, or did it make you more aware that you are a foreigner?
I would always be an immigrant here. I always feel like I am a foreigner. Even if I have really good friends who keep me company, I still feel like I have to be careful and stand on my own.

[Q]What was the reason you left your country and moved to Germany?
I wanted exposure. I had been living my whole life in my hometown, and I felt like all my friends were going to the U.S. I started applying to the U.S., but I got rejected, so I came here instead.

I needed some change. My whole life had the same rhythm, so I thought, why not try living abroad? Maybe it would help me grow personally. I just wanted to try it out.

[Q]What are the most difficult parts of living in Germany so far?
Language. If you don't speak the language, you're not really part of them. When you can't speak, you always feel left out or left behind.

My friends try to force me to speak German all the time so I can be part of the group. But since my German is not that good, I sometimes feel left out. I also feel bad about not knowing German well enough.`,

    8: `[Q]When did you start learning German?
I started learning before coming here. I took an A1 class in India, but I didn't have time to do A2. Then I got my visa and came here.

So I started learning German around six months before coming to Germany.

[Q]Do you feel more comfortable speaking German now?
I'm not fluent, but I'm also not really bad. I'm around B1 level, so I can understand conversations in German now. For the past month, I've been trying to speak whenever possible, and people have been encouraging me.

[Q]Do you feel treated differently when you try to speak German?
When I speak German at the supermarket or in other places, people seem really impressed. I'm also working in a restaurant in service, and I talk to customers only in German there.

One couple got really interested and asked me how long I had been learning German. When I use German, I think people definitely become more interested.

[Q]Would you say that speaking the local language makes you feel more included?
Obviously, anywhere. Whenever you speak the local language, you can speak about more than just the basic conversation you need to have.

But when you speak a foreign language, people often only talk to you for a specific purpose, or only about the conversation they need to have with you.

So I think speaking the local language is really good.`,

    9: `[Q]What kind of language did you grow up speaking in India?
India is a really diverse country. I speak a language called Telugu. That's my mother tongue. We speak it in my state, and every state has its own language.

[Q]Does Telugu feel the most natural to you?
Exactly. It defines me because that's how I grew up. My name, my identity, everything related to me comes from my language.

In India, culture is embedded in language. I don't just say I'm Hindu or Indian. I say I'm Telugu. When I say Telugu, people know exactly which part of India I come from.

[Q]Do you feel different when you speak Telugu and when you speak German?
Yeah. German and English are like personalities that I have built here, especially because I code-switch.

When I speak Telugu, I speak differently. My accent, my slang, my body language, everything is different. So yes, obviously, I have different personalities.

[Q]Do you remember what you were saying in this video?
Yeah, this was a snap I sent to my friend. I was teasing him because he lives in the U.S. I told him to come to Europe to study, but he decided to go to the U.S. So I was teasing him, saying, "Look how the roads are, look how the architecture is." At the end of the video, you can see a flag in the distance, and that place is like a palace. I was asking him, "Do you have a palace in the U.S.?" I just wanted him to know that I'm enjoying my life.`,

    10: `[Q]We're getting to the end. You said you want to live in Paris in the future, right?
Yeah. Last year, I took a really spontaneous trip to Paris in April. I never imagined that I would go to Paris or New York anytime soon. But my friend called me and said they were going on a family trip, and her mom wanted me to come. When I went there, I was mesmerized by the lifestyle. The outfits, the lifestyle, everything was so good. I thought about doing an exchange there, but I couldn't. I think my future goal would be going to Paris. It's really a big dream for me.

[Q]Are you planning to stay in Germany after your master's?
Yeah, I will stay and work for some years. After that, I'm not sure. Right now, all I want is to travel, study, and explore new things. But maybe in my late 30s, I might want to go back home. I think when you grow old, it's more comfortable to stay in your hometown than anywhere else.

[Q]So you're also thinking about going back home?
Yeah. Not soon, but definitely at some point. My hometown is really good for settling down. I would say it's similar to here, but much more like home.

I also want to be there for my parents. My parents won't come here. They already told me they would never come live with me here, so I just have to go back.

[Q]What factors matter the most to you when choosing where to live?
For me, when I'm abroad, it's always about people. Friends come first. I need to have friends because I need someone I can talk to.

At the end of the day, when I come back from work, I need someone to talk to. I can't just live alone at home, cook, watch a movie, sleep, and repeat that again. I want to go out, make new memories, and meet new people.

[Q]What is home for you?
For me, home is where I have all my people. My family, my parents, my brother, my mom, my dad. That's my biggest comfort.

I'm the youngest child, and I'm really childish. Here, I'm trying to be mature and improve myself, but once I go back home, I become like a child again.

No matter how much I earn or how much I grow up, I always want to be a child at home. At the end of the day, I just want to be there for my family.`,
  },
  Andrea: {
    1: `I was born in Calabria, in southern Italy, and I grew up there when I was young. Around sixth grade, I moved to Switzerland because my father encouraged me to come here for better education and better opportunities.

In the beginning, my parents helped me settle in. Later, as I got older, I started living more independently. I have now lived in Switzerland for more than fifteen years.

[Q]What is the difference between Zurich and the city where you grew up?
The language, the mentality, the culture, the food, and also the weather.

Zurich does not have access to the sea. That is a very big difference. Southern Italy is warm, dry, and close to the sea. It does not snow much, and a lot of my relatives have never seen snow.

The diet is also very different. In southern Italy, people eat a lot of fish, meat, hearty meals, pasta, and of course Italian food. The food is heavy, warm, and full of taste. In Switzerland, the food can feel more bland. In Zurich, Swiss food is not really the main food culture either. It is more multicultural.

[Q]Was there a big culture shock when you moved to Switzerland?
Not really in an extreme way, because Switzerland and Italy are close. There are also many Italians living in Switzerland, so Zurich is influenced by Italian culture too. But there are still differences.

One example is punctuality. It is very different in Switzerland and southern Italy. Also, the culture around food is different. In Switzerland, people do not usually have very late dinners, long lunches, or long dinners in the same way. In Italy, eating is more social and stretched out.`,

    2: `[Q]Which part of your current home feels the most like home?
My kitchen, because I spend a lot of time there. I love to cook, and the kitchen reflects that.

I also carry a lot of things from Italy with me, like my coffee moka pot. I use it every day, and I drink a lot of Italian coffee. Having those objects around me gives me a feeling of home.

[Q]When do you feel lonely in Switzerland?
I feel lonely when I have to stay in Switzerland alone during summer. Summer in Italy is so nice. Before, I used to visit Italy at least once every two months, so being in Switzerland during summer can feel difficult.

It is not that I always feel lonely here. But when I imagine summer in Italy — the sea, the weather, the food, people outside — Switzerland can feel a bit too quiet.

[Q]When someone asks where you are from, how do you answer?
I still usually say I am from Italy. But when someone asks me where my home is, I would say Switzerland. I live here, so my home is here.

Home is where you are.`,

    3: `[Q]What do you usually carry with you?
On my keychain, I have a small red chili from Italy. I carry it around all the time with my keys.

[Q]When do you feel satisfied living in Switzerland?
Honestly, payday.

For me, life in Switzerland is strongly connected to money. It is satisfying when I get paid here because the salaries are much higher. I feel like I can build a better quality of life.

But it is not only money. What also satisfies me is that the system works well. You can take the bus or train, and it is usually punctual. Institutions like the post office, banking, and public services work neatly. Everything functions, and that gives me a feeling of satisfaction.`,

    4: `[Q]Where is your favorite spot in Zurich?
I don't have one specific favorite spot, but one place I really love to hang out is called Werdinsel. It is a little island next to the river that goes through Zurich.

You can swim there, chill there, drink a beer, bring snacks, and spend time with people. It is public, social, and beautiful.

[Q]Why do you like it so much?
Because it is close to my home. That is one reason. But also because it is simple. For someone else, it might just be a small strip of land by the river. For me, it means a lot.`,

    5: `The comfort food I chose is pizza. I make it myself in Switzerland, maybe around once a month.

When I was young, my grandmother used to make pizza very often. She cooked every day, and I remember her putting homemade pizza into boxes and calling us to eat. I don't think of it as the healthiest food, so I don't eat it all the time, but it is food that always makes me think of home.

To make the dough, I mix flour, yeast, salt, olive oil, and warm water. As it starts to ferment, it smells a little like beer. Then I wait for about eight hours, kneading it from time to time.

Tomato sauce, mozzarella, oregano, and seasoning are essential. For toppings, I might add anchovies, pepperoni, or nduja, which comes from Calabria. Then I bake it in the oven.

[Q]Does it taste like the original version from home?
Almost, because my grandmother taught me how to make it, and I use Italian ingredients. But if I want very specific ingredients, they can be harder to find in Switzerland.

For example, I use oregano from the place where I am from in Italy. Sometimes I also use a specific type of flour. You cannot always get those things in a normal supermarket. Also, tomatoes from Switzerland are very tasteless, so I prefer to use tomatoes from home.

Sometimes in summer, I plant tomatoes by my window with seeds from Italy. When I do that, I can get a taste from home.

[Q]When you cook it, do you think about your grandmother?
Yes, I do. The recipe is connected to her. It is not only about making pizza. It is also about repeating something she taught me.`,

    6: `One object from home is my moka pot.

My father visited me in Switzerland recently and brought me two new moka pots from Italy, so now I have many. But the one I use now is very old. In my family, we value old moka pots a lot.

You don't wash a moka pot with soap. Over time, the coffee slowly settles into the pot, and people believe it makes the coffee taste better. That is why I still have not used the new moka pots my father brought me. I think the old one makes better coffee.

[Q]What do you do when you feel lonely?
Calling my brother helps a lot. Or speaking Italian in general. Even just hearing Italian can bring that feeling back.

Sometimes what I need is not a place, but the sound of the language.`,

    7: `[Q]When did you receive your Swiss passport?
About four years ago, I received my Swiss passport. Because my uncle was already living here, the process was a little easier, but I still had to take tests and go through the naturalization process.

Right after I received Swiss citizenship, I got a letter from the government telling me to join the military, so I also served in the Swiss army.

[Q]Have you ever felt like a foreigner in Switzerland?
After I received my Swiss passport, not really. When I was younger, yes.

As a child, it was difficult because I could not speak German well. In school, when you do not speak German, people can treat you as the foreigner. I was bullied sometimes because of the language. I cried sometimes, but I was also rude. Maybe that was my way of dealing with it.

Over time, it got better. I learned the language, made friends, and became more integrated. With the passport, I can vote and participate fully. In that sense, I feel fully integrated now.

[Q]Do you think Zurich makes it easier not to feel foreign?
Yes. Zurich is very diverse. It is not like moving somewhere where there are very few foreigners. There are many Italians and many people from different backgrounds. Also, Switzerland has an Italian-speaking part, so the relationship between Italy and Switzerland is close.

Maybe in rural areas it would feel different. But in Zurich, it is harder to feel completely foreign.

[Q]Are there still moments when you feel outside the culture?
Rarely. But, for example, when I spend Christmas with Swiss people, there are traditions I did not grow up with. In those moments, I can feel that I come from somewhere else.

I also feel the difference when Swiss people talk about politics, or when I notice very Swiss conservative ways of thinking. It reminds me that my background is different.`,

    8: `[Q]When did you learn German?
I moved to Switzerland around the end of elementary school, maybe sixth grade. At school, we learned High German first, because that is what they use in class. Outside of class, people speak Swiss German.

I had to learn German very fast because the school after elementary was difficult. You need German to survive in the system.

[Q]How long did it take you to feel comfortable?
By the end of middle school, I could speak almost like a native. It took maybe two or three years. It was not perfect, but I did not have another choice. I was surrounded by German all the time, so I had to learn.

That is like a superpower. When you are confronted with a language every day, you learn it because you have to.

[Q]Did learning German change how people treated you?
Yes. At the end of middle school, I was not bullied in the same way anymore. Language was necessary not only socially, but also for finding an apprenticeship.`,

    9: `[Q]What language do you use most now?
Recently, it is a mix of German, Italian, and a little bit of English.

[Q]When you count, which language do you use?
I think I usually count in German, but it depends. Sometimes I don't.

[Q]Do you feel different when you speak Italian?
Yes, I think so. There are certain things you cannot really say in German, or they would feel different. I think there are small differences in your personality depending on the language.

Italian feels warmer. Italians also speak a lot with their hands. There are expressions you can make with your hands that do not really exist in Swiss German or German.

[Q]Does your personality change a lot between languages?
Not completely. It is still me. But Italian makes me feel a little warmer. German can feel more practical, more direct. Italian has a different body, a different rhythm.`,

    10: `[Q]Where would you like to live in the future?
Somewhere outside Europe, probably. Maybe Korea, not forever, but I would like to experience living somewhere in Asia.

My girlfriend comes from Korea, and it also seems safe to me. There seem to be many new opportunities there as well.

At some point, I would also love to live in Italy again, but not now. I don't want to say I will stay in one place. I want to focus on what brings me up. If there is an opportunity in another country, I would do it.

[Q]What is the most important factor when choosing where to live?
Recently, safety has become very important to me. I just want to feel safe.

Opportunities also matter. Money matters too, because I feel responsible for supporting my family. That is one reason Switzerland still makes sense to me.

[Q]What does home mean to you?
I think home is where you feel most like yourself.

I don't think home has to be only one place. You can find home everywhere. You can build your home, and your home can move with you.

Like a snail.`,
  },
  Chunem: {
    1: `I am from Armenia, and I am currently living in Switzerland, where I study graphic design. I am about to graduate with a bachelor's degree. I come from a family of architects. Before coming to Switzerland, I studied architecture in Armenia for three years, but later realized that graphic design was closer to what I wanted to do.

Another important part of my identity is that my mother's side of the family is from Artsakh / Nagorno-Karabakh. My mother, my grandfather, and many people from that side of my family are connected to that region. It is a strange and confusing feeling to lose a piece of land that you could once easily go to, and now you cannot.

[Q]Can you explain those pictures?
I chose several photos of Lucerne because they show the city in different ways. Some of them are not the stereotypical Switzerland that people imagine. There is beautiful nature, of course, but there are also streets that look ordinary, lived-in, and less postcard-like.

One photo was taken when I walked up through the Gütsch forest toward Sonnenberg. Another photo is of my street, which is very non-stereotypically Swiss. There was also a photo of the lake shore, where I had my first swim of the year. I love that shore. It reminds me how privileged I am to live only a few minutes away from beautiful places.

[Q]How is Lucerne different from the place where you grew up in Armenia?
The biggest difference is the size and rhythm. Yerevan has much more happening on the street. People are outside, things are open, there is movement.

[Q]Are there any similarities?
Maybe the mountains. Armenia also has mountains, and Switzerland has mountains. But the feeling is different. In Switzerland, the mountains feel organized and protected. In Armenia, they feel more raw, more dry, more open.`,

    2: `I live in a shared flat. Now we are three. I live with two other women. Both of them are moving out soon, so I will have to look for new people, but I am staying.

In the first year, I felt lonely a lot. It was my first time living away from my family, and it felt strange not to live in my family home anymore. I think I needed about one year to adjust.

Now I feel more at peace. Even when I am alone, I feel free. In the beginning, it was a lonely home. Now it feels more like a home that I know how to live in.

[Q]Which part of your apartment feels the most comfortable?
I love the kitchen the most. It does not matter if someone is home or if I am by myself. I also like the big living room, mainly because we spent more time decorating it.

I have a love-hate relationship with my room. It is cute, but after almost three years, I have a lot of stuff now, and the room is not enough anymore. I like my bedroom when I have just cleaned it.

[Q]If someone asked you where your home is now, what would you answer?
I think I would say I have two homes.

This home in Switzerland is the home I created by myself. The other home is the one I was born into. I love both of them equally, but very differently.`,

    3: `I always carry my keychain. It is always with me, and when I walk down my street at night, I sometimes hold it like a weapon in case something happens.

In my wallet, I have a Swiss bank card, some cash, my school card, my Swiss ID, my Armenian ID, an Armenian bank card, and my SwissPass. I don't necessarily need all of them every day, but I don't like changing wallets or bags. I need all the basic things in the same place.

[Q]Are there moments when life in Switzerland feels satisfying or comfortable?
Most moments now, yes. I'm surprised by that, but yes.

I think it is because I have a routine here now, and it is a routine I decided for myself. I also feel that people here appreciate what I do more. Teachers, bosses, and people around me often express gratitude very clearly.

It is the same with school projects. If I am enjoying a project, I feel like the teachers are also enthusiastic. That makes the whole process more encouraging.`,

    4: `One place I chose is a Brocki / Brockenhaus — a secondhand shop. I love going there because I love cheap things, and they have a lot of interesting objects: furniture, clothes, random things. I have things in my room that came from there.

Another place is an Eritrean restaurant close to school. The food was good, and the portion was generous.

There is also a lake shore that I really like. It is further away and more remote than the popular places. You have to walk for about twenty minutes, so there are fewer people. It is a very nice place to swim.

[Q]Why did you choose these places?
I think they are all connected to small comforts. They are not necessarily spectacular places. They are places where I find objects, eat well, swim, walk, or spend time in a quiet way.`,

    5: `The food I chose is called Spas. It is an Armenian soup made with a yogurt base and bulgur. For me, Spas is a very warm and comforting soup.

It is also easy to make, which is why I can make it in Switzerland. It does not use ingredients that are only available in Armenia. I make it especially in winter, or during the last week of a project when I don't have time to cook.

[Q]Can you find the ingredients easily in Switzerland?
Yes. The yogurt is not exactly the same, but Greek yogurt or Turkish yogurt works. I use crème fraîche instead of sour cream. Then there are onions, bulgur, cilantro, and one egg. The ingredients are simple.

[Q]Why is this comfort food for you?
I ate it often growing up. In our family's weekly rotation, it would appear maybe once a week or once every two weeks.

I think it is also the smell. The moment I mix the sour cream and egg and pour it into the pot, and it starts getting warm, I get a smell I don't get from anything else. I think I am trying to recreate the smell of our kitchen in Armenia, when my mom made it.

[Q]What do you usually miss most about Armenia?
Obviously, the people and the food. I also miss the number of sunny days. And I miss Armenian being my daily language. Here, I can speak Armenian, but no one will understand me. So what I miss is not just the language in general. I miss the way I speak Armenian.

[Q]What do you usually do when you miss home?
I call someone from home, usually my sister or my mom. I might watch a stupid show from my childhood, just for the nostalgia. I also talk about Armenia a lot. Swiss people are very nice and interested, so when I miss Armenia, I just talk about Armenia. I also make Armenian food.`,

    6: `I chose Armenian cigarettes and a metro token from Yerevan. They have very different meanings.

The cigarette is a funny symbol of the relationship I have with Armenia, because it is not something I really experienced in Armenia. I started smoking these cigarettes only here, in Switzerland. In Armenia, I only saw them on the ground and wondered why so many people were smoking green cigarettes.

Now I have one unopened pack. I have mostly stopped smoking, but it is nice to have it. I have a rule that if I smoke, I only smoke Armenian cigarettes.

[Q]And what about the metro token?
The metro token is different. It is part of the identity of almost everyone who lives in Yerevan, including me. I bought it in summer 2024, when my friends visited Armenia and I was showing them around. I had one extra token in my wallet, and then the city discontinued them. So now I accidentally have one of the last ones.

[Q]How did the token work?
It worked like a coin. You put it into the turnstile, push the metal pole, and enter the metro. It was very cheap, maybe around 20 or 25 cents.

Now they changed the system to QR codes printed on paper and an app, supposedly as a more sustainable solution. But I'm not sure it is actually more sustainable. The old tokens were plastic, yes, but they were reused for years.`,

    7: `It was an old photo of my Armenian document and Swiss visa. The visa in the image is expired, but my current visa is valid. I can provide a newer version if needed.

[Q]Why did you decide to leave home?
The surface-level reason was education. I studied architecture for three years in Armenia, and I realized that the educational system was not what I was looking for.

It was competitive, but not in the sense that everyone wanted to make the best work. It was more like everyone wanted the highest praise or the highest grade, no matter what their work was like. Architecture also did not feel right for me.

[Q]Why Switzerland?
I decided I wanted to study graphic design because I realized I enjoyed making the presentation boards for my architecture projects more than the projects themselves.

Switzerland is a good country to study graphic design because of its history and design education. My father was working in Switzerland at the time, and he suggested it. I knew how expensive it was, but when he said he could support me financially, it became possible.

[Q]Have you felt like a foreigner in Switzerland?
Yes, all the time, but not always in a bad way.

In the first year, the strongest feeling came from not understanding the dialect. I was used to being the host in my own country, not the guest. When you don't understand everything, you automatically feel a bit dumber.

I am always aware that I am not from Switzerland, and I don't feel Swiss. But I don't feel foreign in a bad way anymore. I think it can be nice.

[Q]Have social systems made you feel like an outsider?
Yes. There are policies that apply differently to local people and foreigners. For example, when study fees are raised for international students but not local students, it reminds you that you are an outsider.

Humor also made me feel different. I appreciate that Swiss people are considerate, but sometimes they are too considerate. There is an Armenian part of me that wants to make sharper jokes — not offensive, but more sarcastic.

Political views also made me feel different. I am leftist, but with a touch of Armenian background. That makes my political position harder to summarize in one word.`,

    8: `I don't really speak the local language, meaning Swiss German. I speak High German, but I don't pronounce it exactly like Germans do. It is more like Swiss-style High German.

[Q]Which language do you use most in daily life?
German has become my main socializing language outside of my apartment. At school, at work, when I go to the supermarket or a restaurant, I mostly use German.

Inside the apartment, it depends. Sometimes it is Russian, sometimes Armenian, and when all of us are home together, we use English.

[Q]How do Swiss people react when you speak German?
Swiss people appreciate it when you try to say anything in German. The bar is low, but in a nice way. They are happy that you are trying.

[Q]Does speaking German make you feel more included?
Yes. In the beginning, I felt very dependent. I had to ask people to explain things. I could not fully understand systems, jokes, or casual comments. Once I started understanding more German, I started feeling more independent.

At the same time, German is still not my emotional language. When I speak German, I am slow, and I have fewer emotions in my voice. It sounds less like I am generating a regular thought and more like I am trying to explain myself.`,

    9: `[Q]What language feels the most emotional to you?
Armenian is the language where I have the most emotion. I am also louder in Armenian. When I talk to my family and get emotional, it can sound like I am yelling, even though I would still say I am more of a quiet person than a loud person.

[Q]Do you feel like you express yourself differently in Armenian?
Yes. I have a very nice Armenian vocabulary. That sounds like bragging, and maybe it is a little bit, but I don't know how else to explain it.

In English, Russian, and German, I often speak through sentences I have learned. I have ready-made blocks of information. With Armenian, it feels different. The way I structure my sentences is more personal.

[Q]What about counting or thinking? Which language do you use then?
When I count, I count in Armenian, no matter what language I am speaking. If I see a year written in a text, I read the year in Armenian in my head first.

I mostly think in Armenian too, but sometimes I catch myself thinking in English. I have a diary in Google Docs where I collect thoughts. It is mostly Armenian, maybe 80 percent, but there is also some English.

[Q]So Armenian is not only your mother tongue, but also the language where your inner voice feels closest to you?
Yes. Armenian is the language where I have the most personal style. In speaking, writing, counting, and even thinking, it is the language closest to me.`,

    10: `For the future, I chose several images. One was Brazil, but I don't mean that I want to live there forever. I imagine a longer trip, maybe two or three months. That is also a way of living somewhere, even temporarily.

Another image was Armenia, but not exactly the Armenia that exists now. It was connected to the First Republic of Armenia, around 1918. I think I romanticize it a bit. I like the idea of creative people leading a country.

[Q]So is Armenia still one of the places you imagine living in?
I don't want to go back to Armenia as it is now. If Armenia became something closer to that imagined version — independent, intellectual, progressive — then maybe I would want to be there. But if it stays the way it is politically, I don't want to return to live there. Maybe I would go once a year in summer, as a visitor.

[Q]What about Switzerland?
For now, I imagine being based in Switzerland and traveling here and there. Switzerland is a place that makes other things possible. You don't need visas for so many places. People know the country. Even if they don't know where you are from, they know Switzerland means a certain level of safety and stability.

I also recently had a job possibility open up here. It is not my dream job, but it is a way to stay in Switzerland. First comes the paperwork.

[Q]What factors matter most to you when choosing where to live?
At the moment, it is a mix of career and safety.

Switzerland is still a country where my job is seen as an actual job and paid accordingly. But there is also an emotional factor. I am not bothered here. I can do what I want to do, or what I like to do.

As a society, Switzerland feels non-judgmental to me. It is a chill society. As long as you are doing something, people are fine with it.

[Q]Has your idea of home changed after living in Switzerland?
Yes, definitely.

Before, home was obvious. It was my family, the house I lived in, the safe space I was born into.

Now home is not really a location. It is more like a feeling, a daily life. It is also independence. It is a mixture of independence and loneliness.

I think home can be something you are born into, or something you build. I would not say Armenia as a whole is my home. My family, the garden, the people I am surrounded by — those are home. It is the same here. The people I have surrounded myself with are home.

[Q]Do you think having more than one home feels unstable, or can it also be beautiful?
Some people might find it insecure to be between two homes, or multiple homes, but I realized I am not seeking that kind of security.

I can imagine my whole life living in rented apartments, and whenever I feel like switching places, I switch. I like change. I also like routine from time to time, but I need change to happen inside that routine. Something needs to move forward. There needs to be something unknown.`,
  },
  Soakie: {
    1: `나중에 뉴욕에 오시면 여기 꼭 가보세요. 제가 제일 좋아하는 곳들이에요.

여기는 제가 가장 좋아하는 차이나타운 근처 도로인데, 전 여기가 너무 좋아요. 꼭 화보 촬영하고 싶다는 느낌이 들지 않아요? 이 철도랑… 다리. 그냥 너무 예뻐요. 이 근처에서 늘 한 바퀴 걸어 다녀요.

[Q]뉴욕이 지금까지 살아오셨던 다른 도시들과 다르게 다가오는 점이 있나요?
훨씬 더 예쁘게 말하고 싶은데… 그냥 돈이 많은 도시라는 게 느껴져요. 잘사는 도시이구나.

[Q]뉴욕 이전에는 어떤 도시들에서 지내셨어요?
저는 서울에서 태어났고, 어렸을 때 시애틀에서 5년 정도 살았어요. 이후에는 한국에서 외국인 학교를 다녔고, 고등학교 때는 미국 코네티컷에서 보딩스쿨을 다녔어요. 대학은 파리 파슨스로 갔고, 이후 뉴욕 파슨스에서 1년을 더 공부했어요.

학사를 졸업한 뒤에는 독일에서 6개월 정도 웹 디자인 인턴을 했고, 서울로 돌아와 데이즈드에서 일했어요. 그리고 다시 뉴욕에 와서 1년 동안 저널리즘 석사를 공부했고, 몇 주 전에 졸업했어요.`,

    2: `여기가 제 새로운 아파트예요. 5일 전에 이사왔어요.

[Q]이 공간에서 가장 나 같다고 느껴지는 부분이 있나요?
저는 미니멀한 것을 좋아하고, 흰색을 좋아해요. 그래서 흰색 벽이랑 흰색 침대가 좋아요. 집이 깔끔해야 그곳에 저의 생각을 채울 공간이 생기는 것 같아요. 제 아파트는 복층이에요. 2층에는 방이 하나 있고, 그곳에 룸메이트가 살아요. 아직 이사 온 지 얼마 안 돼서 서로 알아가고 있는 시기예요.

[Q]이사하고 나서 달라진 생활 방식이 있나요?
딱히 없는 것 같아요. 저는 제가 좋아하는 루틴이 있어서요. 아침 6시 반, 7시쯤이면 늘 일어나서 책이나 매거진을 보고, 커피를 마시고, 친구들을 만나고. 이런 것들. 그럼 하루가 금방 지나가요.

[Q]Fire escape이 눈에 띄네요. 뉴욕 같아요. 이 공간에 자주 나가시나요?
저는 바깥에 앉아 있는 거 좋아하고 창문 여는 거 되게 좋아해요. 사실 안전상 여기에 물건을 적치하면 안 되는데요, 저는 쿠션을 두고 자주 앉아 있어요.

[Q]이 공간이 집으로 느껴지나요?
이 집은 저한테 되게 특별해요. 보딩스쿨 다닐 때랑 파리에서 살았을 때는 늘 furnished 아파트에 살았거든요. 미국 코네티컷에서 고등학교를 다닐 때도, 파리 파슨스에 다닐 때도 이미 채워진 공간에 들어가 사는 느낌이었어요.

이번이 처음으로 unfurnished 아파트에 들어온 거예요. 제 취향대로 모든 가구를 직접 채울 수 있었죠. 이번 주말에도 소파 픽업하러 다녀왔어요. 가구를 직접 구매해보는 건 처음이라, 다른 집들보다 특히 이번 집이 더 애정이 가고 집처럼 느껴지는 것 같아요.

[Q]누군가 "집이 어디예요?"라고 물어본다면 어떻게 답하실 것 같아요?
사실 어렸을 때 매번 사는 곳이 바뀌니까, 내 집이 어디지? 라는 생각을 하면 너무 슬펐어요. 근데 시간이 지나면서 그런 생각들을 아예 안 하게 되는 것 같아요.`,

    3: `저는 책을 늘 들고 다녀요. 지하철에 인터넷이 안 되니까 책을 많이 읽어요. 친구들 기다릴 때도 미리 가서 책 읽을 때도 있고요.

[Q]뉴욕에서의 삶이 만족스럽다고 느끼시는 순간은 언제인가요?
저는 뉴욕 정말 좋아하는 것 같아요. 문화생활이 다양하다는 게 정말 좋아요. 매달 갤러리 아니면 뮤지엄에서 특별 전시가 있고, 영화관에서 감독님과 Q&A를 하는 이벤트도 있어요. 서점에서 작가님이 한 시간 동안 토크를 하면 그런 것도 사인업해서 자주 가고요. 보고, 경험할 수 있는 게 많아서 너무 좋아요.

[Q]아까 뉴욕에서의 삶이 만족스러웠던 순간을 질문했었는데, 반대로 불만족스러운 순간도 있나요?
아. 지하철. 지하철이 정말 좋지 않아요. 데이터도 안 터지고, 이상한 사람도 많아요. 방향 찾기도 정말 힘들고요.`,

    4: `[Q]제일 좋아하는 공간이신가요?
네. 어제도 다녀왔어요. 학생 때는 학교랑 멀어서 자주 못 갔는데, 요즘엔 자주 가요. 좀 더 자주 가고 싶어요.

여기가 되게 특이해요. 나이 많으신 남자분이 집에서 그냥 운영해요. 지하랑 1층에서요. 이분이 빈티지 매거진이나 희귀한 서적 모으는 걸 좋아하셔서, 여행 가서 모아오신다고 하더라고요. 그래서 저는 갈 때마다 막 2시간씩 그냥 화보를 봐요.

[Q]매거진을 특히 좋아하시는 이유가 있나요?
저는 패션 이미지가 너무 좋은 것 같아요. 사진으로 판타지를 만드는 느낌. 현실적인 사람이어서 그런 걸 더 좋아하는 것 같아요.

파리 파슨스에 다닐 때 기호학을 접했는데, 이후 비주얼 역시 텍스트처럼 읽히고 해석될 수 있다는 관점을 갖게 되었어요. 그래서 저는 패션 이미지를 하나의 시각 언어라고 생각해요.

그리고 빈티지 매거진은 인터넷에도 자료가 없어요. 모든 게 인터넷에 있는데, 인터넷에서 찾을 수 없다는 사실을 깨닫고 더 흥미로웠던 것 같아요.`,

    5: `이사 오고 이제 제가 가장 좋아하는 스칸디나비안 카페 La Cabra랑 정말 가깝게 살아요. 커피가 정말 맛있어서 거의 매일 가요. 그 카페 때문에 이 아파트를 사랑할 정도예요.

유럽에 살면서 간단한 과일, 견과류가 좋아졌어요. 제일 좋아하고, 아침에는 가벼운 것들이 좋아서 자주 먹는 것 같아요. 한국 음식은 한식당에 가서 가끔 먹고, 집에서 직접 해 먹지는 않아요.`,

    6: `한국에서 온 물건은 아니고, 일본에서 새해에 절에 가면 받는 부적 같은 거예요. 아빠가 일본을 좋아하셔서, 저도 아빠와 일본 여행을 자주 갔거든요. 이 부적은 이번에 아빠가 뉴욕에 오시면서 저에게 전해주신 거예요. 그래서 이걸 보면 자연스럽게 아빠 생각이 나요.

저는 어떤 보이지 않는 기운이나 에너지 같은 것도 믿는 편이에요. 그리고 그런 감각이 아시아 문화에서 비롯된 것 같다고 생각해요. 한국에도 샤머니즘 같은 문화가 있고, 저희 엄마와 할머니도 그런 정서를 자연스럽게 받아들이는 편이거든요. 그런데 미국에서는 이런 문화적 감각을 쉽게 느끼기 어렵다고 생각해요. 그래서 이걸 보면 집이 생각나요.

[Q]집을 떠나오신 이유가 궁금해요.
한국에서 외국인 학교를 다니면서 조금 더 좋은 교육을 받고 싶다는 생각을 하게 된 것 같아요. 저랑 부모님이요. 그리고 오빠가 그 보딩스쿨을 다녔었거든요. 교육 때문에 떠나오게 된 거죠.

[Q]한 곳에 계속 머무르지 않고 다른 곳으로 늘 이동하시게 된 계기들이 있을까요?
유럽에 너무 살아보고 싶다고 생각해서 파리에 갔었죠. 그리고 저는 새로운 경험을 할 수 있다면 꼭 해야 된다고 생각하거든요. 그래서 기회가 생기면 늘 그곳에 가요.

한국에 잠깐 들어와서 일했던 시기는 저에게 큰 의미가 있어요. 어릴 때부터 유학 생활을 하다가 성인이 되어서 처음 한국에 살아본 거였거든요. 그때는 한국 사람들이랑 지내보고 싶었고, 한국 사회생활도 경험해 보고 싶었어요.

어렸을 때는 내가 한국 사람인가? 하는 정체성에 의문을 품기도 했었는데, 한국에 살다 온 이후로 안정감이 많이 생겼어요.

한국이 좋았지만, 사회초년생으로 계속 한국에 머무르는 것보다 미국에 가서 경험을 쌓는 게 저에게 맞다고 느꼈어요. 그래서 다시 한국을 떠나 뉴욕에 왔고요. 그렇지만 나중에 제가 시니어가 된다면 돌아갈 생각은 있어요.

[Q]한국에 돌아가고 싶었던 적이 있나요?
음… 이번 졸업식 때 부모님이 뉴욕에 오셨는데, 거의 1년 만에 만난 거였어요. 정말 부모님이 보고 싶더라고요. 사실 저는 한국어로 대화하는 사람이 부모님밖에 없어요. 그래서 부모님의 존재가 저에게는 한국, 집인 것 같아요.`,

    7: `공부할 때는 학생 비자 F-1으로 지내다가, 지금은 OPT를 받았어요. 이제 일을 할 수 있어요. 3개월 안에 취직하면 1년 더 있을 수 있어요.

취업할 때 시민권이 아니라 거주 비자를 가지고 있으면 보통 선호하지 않는 것 같아요. Job application 할 때도 이걸 꼭 물어보거든요. 비자가 있는지, 앞으로 또 비자를 받아야 하는지. 그럴 때마다 약간… 아, 내 CV를 보지 않겠구나, 생각이 들 때가 있어요.`,

    8: `[Q]영어가 일상에서 가장 편하게 쓰이는 언어가 된 게 언제부터였다고 생각하세요?
어렸을 때 시애틀에서 5년 정도 살고 난 후였던 것 같아요. 이후 한국에서 외국인 학교를 다녔는데, 공부를 다 영어로 하니까 그때부터 영어를 더 자주 쓰게 됐어요.

외국인 학교에서는 12살 때부터 불어도 공부했어요. 그때부터 불어를 좋아했고요.

[Q]생각할 때도 늘 영어로 하세요?
주로 영어로 하고, 가끔 한국어로도 해요. 추상적인 생각들은 영어로 하는데, 가끔 일상 속에서 짜증나거나, 덥거나 추울 때? 한국어가 툭 나와요.

[Q] 영어, 한국어를 하실 때 스스로 다르다고 느껴지시나요?
저는 제가 한국어를 잘한다고 생각하지 않아요. 영어를 쓸 때는 네이티브 스피커라고 생각하고요.

[Q]영어로는 가능한 표현인데 한국어로 제대로 번역하거나 표현하기 어려운 단어나 표현이 있을까요?
저랑 한국어를 자주 쓰는 사람이 부모님 빼고는 별로 없거든요. 미국에서 한국 친구들과도 다 영어로 대화를 해서요.

최근에 부모님이 오셨을 때 카드를 썼었는데, 그 카드에 제가 connect라는 단어를 쓰고 싶었어요. "I feel connected to you"라고요. 근데 한국어로 어떻게 표현할 수 있나? 잘 모르겠더라고요. 그리고 저는 제일 큰 게 약간 유머인 것 같아요. 저는 영어를 쓸 때 제 자신이 훨씬 더 재미있다고 생각해요. 한국어만 쓰는 친구들한테는 저의 모든 모습을 못 보여주는 것 같아서 살짝 아쉬워요.`,

    9: `제가 출장 갔을 때 호텔에서 찍은 영상이에요.

[Q]한국에 다시 들어오셨을 때 한국어를 다시 배우는 과정이 필요했나요? 아니면 이미 머릿속에 남아 있는 건 남아 있었나요?
너무 힘들었어요. 업무를 볼 때 전부 카톡으로 이야기하잖아요. 그럴 때 얼마나 격식 있게, 예의를 차려서 이야기해야 하는지, 얼마나 친근하게 이야기해야 하는지 고민이 되게 많았어요.

인터넷에 찾아보면서 이게 내가 말하고 싶은 톤이랑 맞는지 확인하고 그랬죠. 그래서 문자 보내는 게 정말 오래 걸렸어요. 몇 달 지나니까 자연스럽게 되긴 했지만요.`,

    10: `[Q]도쿄에서 살고 싶으신 이유가 궁금해요.
많이 돌아다녀봐서 이제 딱히 살고 싶은 도시가 없는 것 같기도 해요. 그래도 한 번 더 기회가 생긴다면, 아시아의 다른 대도시에 살아보고 싶어요.

[Q]미국에 더 오래 살거나 한국으로 돌아오고 싶은 생각도 있으신가요?
저는 한국에 꼭 다시 살 거예요. 미국은 글쎄요. 이 1년 끝나고 나서는 잘 모르겠어요. 문이 하나 닫히면 다른 문 하나가 열리겠죠. 그리고 저는 그냥 제 길을 가야 되는 거고… 그렇게 생각해요.

[Q]미래 계획을 구체적으로 세우시는 편인가요? 아니면 그때그때 끌리는 곳을 따라가시는 편인가요?
작은 계획들은 그래도 세우는 것 같아요. 예를 들면, 뉴욕에 1년은 더 살 것 같고. 저는 30살 전에는 결혼하고 싶어서, 결혼하면 서울에서 부모님 근처에 잠깐 살아보고 싶어요. 그런 계획들…

[Q]앞으로 가야 할 곳을 정할 때 가장 중요한 것은 무엇인 것 같아요?
제가 싱글이라면 직업이고, 누군가가 있다면 그 사람일 것 같아요.

[Q]뉴욕이 Soakie님에게 집이 될 곳이라고 생각하시나요, 아니면 잠깐 지나가는 도시라고 생각하시나요?
Home은 아니지만, 분명 의미 있는 곳이에요. 지금 이 시기가 제 인생에서 성장하는 가장 중요한 시기인 것 같아서요. 앞으로 뉴욕에 살고 있지 않더라도, 뉴욕은 제 인생에서 정말 의미 있는 곳이 될 것 같아요.`,
  },
  Toha: {
    1: `I was born in El Paso, Texas, but it's a bit complicated. My dad was in the military, so I was actually born on a military base. Because we were only there temporarily, the place where I was born doesn't really feel like home to me.

I moved around a lot when I was young, but the place I consider home is Las Vegas. That's where I spent the longest time. I lived there for about 20 years. Las Vegas — Sin City, casinos. That's my home.

I settled here in the Philippines about three years ago. My mother is Filipino, so when I was a kid, she was able to secure citizenship for me here. It wasn't until I became an adult that I decided to actually make use of it.

I have a wife and a son now. My wife is from the Philippines, and my son will turn two in November. After moving here, I've had to make my own home.

[Q]Which city are you living in now?
I'm in Manila, the capital. There are some industrial areas, some areas with skyscrapers, and residential areas too. They're actually building a new skyscraper in front of my window right now. The only thing missing for us is green space. We don't really have great parks.

[Q]Does this city feel familiar to you, or still new?
It feels familiar now. Especially because I commute through public transportation. I get around by motorcycle, and we have a train system here too.

When I get on the train and I know where I'm going, that's when it makes me feel like, "Oh yeah, this is my city." I'm comfortable now. I'm confident now.

[Q]Does living in the Philippines make you feel connected to your mother's side?
I would say it feels separate. The language spoken here in the city is different from the language my mother spoke to me growing up.

My mother comes from a very rural place far away from the city. Although she is Filipino, it's a different kind of Filipino identity. It almost has its own cultural identity beyond just being Filipino.`,

    2: `[Q]Do you feel like this is your home now?
Yes. Although there have been periods when I felt homesick. For me, sometimes the cultural differences remind me, "Oh yeah, this isn't my home." But other times, I think about how much my personality has changed because I've assimilated to living here. Then I realize, "Oh yeah, this place is also my home."

Learning the language is what makes me feel at home. When I moved here, I wasn't fluent in the local language at all. In three years, I basically forced myself to become fluent.

[Q]When someone asks you, "Where are you from?", how do you usually answer?
As a joke, I tell some people I'm from Earth. From the ground, from the soil.

But if someone is really curious, I usually tell them I'm from Las Vegas, because that's the place where I have most of my childhood memories. That's where I grew up.

Here in the Philippines, my answer sometimes changes. If I'm speaking English, I'll say I'm from the States, or from Las Vegas. But if I'm speaking the local language, I'll usually say I'm from Pampanga, where I lived before Manila.`,

    3: `This is a braided keychain. I bought it during the first week after I moved to the Philippines, and then I added onto it.

At the top, there are beads that are very special to me. They were a gift from a friend from an Indigenous tribe in Mindanao. He told me that in his culture, these beads are supposed to ward off evil spirits or bad energy.

That's why I always carry it with me. It gives me a sense of comfort. I think it also has something to do with the noise. Maybe spiritually, the sound lets the spirits know, "Hey, there's a person here." It works like a signal.

People here locally call it anik-anik. It means little trinkets or things you attach to your bag to show your personality.

[Q]And the bus tickets?
These are bus tickets. Before Manila, I lived in a city about a two-hour bus ride away. Whenever I wanted to visit my friends here, or before that, when I traveled to visit my wife, I would get on the bus every weekend. I collected these tickets over time.

It's still very much a cash-based society. So these little physical, analog things remain.

[Q]After living there for three years, do you feel like you belong in the Philippines?
It depends on the day. Most of the time, I would say no.

Growing up in the West, communication is very direct. Here in the Philippines, it's more passive. Even something as simple as saying no can be difficult. People can take offense.

There's a word called arte, which can mean something like being fussy, dramatic, or having a bad attitude. But it's not that I have a bad attitude. I'm trying to advocate for myself.`,

    4: `The place is called Karrivin Plaza. My work is mostly graphics and media, and one of my clients got a co-working space for us there.

It's in a very industrial part of town, on a road with schools, car dealerships, and art galleries. The co-working space is also called a new media library. Sometimes they do film screenings, art installations, art exhibits, and there are lots of books available to read.

There are restaurants and cafés too. It's really quiet. Every time I go there, I don't feel like I'm in the city anymore.`,

    5: `This is a Filipino dish called Taho. It's basically silken tofu with little sago pearls, and then they pour brown sugar syrup, or arnibal, on top. It's usually served warm early in the morning.

There are vendors around the neighborhood, usually in the morning. Each vendor has their own call. The most common one you hear is "Taho!"

This is something I had sometimes growing up in the West too. I always loved it because it's warm, but also sweet and savory. If you're up early in the morning and getting ready for work, and you're not much of a coffee drinker, something like this gives you a nice sweet kick.`,

    6: `This necklace is what we call a dog tag. Usually dog tags have names on them, but this one has the emblem from the military base I grew up on. The mascot of that military base is the Thunderbird, a mythological creature from Native American culture.

I thought this was a good symbol for me because it represents the military base, but it also speaks to my cultural background.

[Q]What did the military base mean to you personally?
The military base was the place where I spent the most time outside of my home. Think of it as a little town. There was a grocery store, a gas station, a convenience store, and a church.

Every Saturday and Sunday, I would usually go to church, and my mother was an educator there. Most of my time was spent in that place. It felt more like a hometown — more like a neighborhood than a city.`,

    7: `It's paper, but laminated. The system here is very broken. I applied for this ID three years ago. They were supposed to send me the physical card, but they never did. So they just gave me a paper one, and I had to get it laminated myself.

[Q]You said your dad is from the Sac and Fox Nation. Could you describe that part of your background?
The Sac and Fox Nation is one tribe among many Native American tribes across the United States. My experience being Sac and Fox growing up was complicated.

Like many Native people, we have what's called a reservation, an area of land allotted by the government. I would be the third generation to live off the reservation. My grandmother was the last person in my direct family to live there, but I still have family who live on the reservation.

Growing up, I would visit for our yearly tribal meeting. One cultural thing I grew up with was eating bison, like bison burgers. Bison is a big part of our culture because we raise them on the reservation.

My dad always reminded me growing up, "You're Sac and Fox," and he tried to teach me some of the language. One phrase I always remember is "Ya'awe, niwîka?". It basically means, "How are you, brother?"

As an adult, I started exploring that part of my family history more. Here in the Philippines, most people don't really know Native Americans. I've had a friend tell me, "I think you're the first Native American I've met."

That reminds me that I always want to carry that history with me.`,

    8: `I started learning Tagalog just three years ago. It took a lot of hard and awkward experiences. Tagalog is the language my wife grew up speaking.

[Q]Did you learn from her, or did you take classes?
It's a mix. I practice a lot with my wife, but I also immersed myself. I forced myself to do all my outside interactions in the language.

I also trained my Instagram and TikTok algorithm to show me content in Tagalog. By hearing it all the time, I could pick things up.

[Q]Does speaking Tagalog make you feel more connected to the Philippines?
Yes. Learning Tagalog unlocked a lot for me. When you don't understand the language, you miss out on cultural context, nuance, and humor. There is a certain humor in the Philippines that cannot be translated into English.

Now I feel confident in it. I can banter. It gave me access to social nuance and small cultural things that don't translate well. It also made the Philippines feel more like home.

[Q]Does Waray connect you more to your mother's side?
Yes, but in a more distant way. It's connected to my mother's rural background and her family history. I don't fully speak it, but hearing it reminds me of home and family.`,

    9: `English is my first language. But I also grew up hearing Waray at home, especially from my mother and her side of the family.

[Q]Does English feel like your own language?
Yes, English is the language I think in most of the time. But because I grew up in a multicultural home, language has always been layered. English is my first language, Tagalog is something I learned later, and Waray is something I heard growing up but don't fully speak.

[Q]Do you feel different when you speak English and Tagalog?
Yes. I feel like I have my personality in English, but when I speak Tagalog, I bend my personality a bit.

There is a term here in the Philippines called Conyo / Konyo. It refers to someone who is maybe a bit posh, or maybe from a rich family. When I learned Tagalog, my introduction to it was through people who were kind of Conyo. They speak Tagalog with a very Western or Americanized accent.

When I speak Tagalog, I subconsciously pick up those mannerisms. It's mostly for ease of communication and to fit into that box.

Growing up in a multicultural home, you code-switch a lot. Even now, when I speak English, it has a Tagalog accent. Before living here, it sounded much more American.`,

    10: `[Q]The last photo was the future place you want to live in. You want to live in New Zealand?
Ever since I was a kid, I've always had a fascination with New Zealand. I've always felt a calling to visit there one day.

I think I would fit into their society because it seems like a good blend of Western and Indigenous culture. The Indigenous population is the Māori, and they have representation in government. They have been able to preserve their language and customs, and that inspires me.

[Q]Do you also imagine staying in the Philippines or going back to the U.S.?
The Philippines is a great place to live, but it's a good place to live if you have money. Especially if you're earning money from a Western country, you can take advantage of the difference in value.

For now, I think we have to stay in the Philippines because this is where a lot of our resources are. If I go back to the U.S., I don't really have much there.

If the opportunity arises to move to New Zealand, I think I would rather do that than go back to the U.S.

[Q]Do you think home is something you return to, something you build, or something that moves with you?
Can I say all three?

Sometimes home is something we return to in a spiritual sense. When I don't feel like the Philippines is home, I turn inward. I look at my own body as a home. I return to myself, my body, my bones, my heart.

And then home is also something you build. I have a wife and a son now, and I think about building a place that is ours, something we share.

And home also moves with me. Wherever I go, at the end of the day, I'm still in my body.`,
  },
  Yuyu: {
    1: `지금 야마나시에 온 지는 1년 됐어요. 정확히 말하면, 일본에 다시 온 지 1년이 됐고, 처음에는 오사카에 11개월 정도 있었어요. 지금은 남은 한 달을 야마나시에서 보내면서 인턴으로 일하고 있어요.

제가 태어난 곳은 나고야예요. 부모님이 결혼하시고 공부를 더 하고 싶으셔서 일본 나고야로 가셨던 걸로 알고 있어요. 그래서 저는 4살까지 나고야에 살았어요. 정확히 기억은 안 나지만, 그때는 오히려 한국말을 못하고 일본어만 할 수 있었다고 해요.

이후에 한국에 돌아왔고, 다시 초등학교 3학년쯤 가족들이랑 다 같이 도쿄에 갔어요. 거기서 4년 정도 살았는데, 그때는 국제학교를 다니면서 영어로 수업을 받았어요.

[Q]이 도시가 어떤 곳인지 설명해 주실 수 있나요?
이 도시는 후지산이 진짜 예쁘게 보이는 동네로 유명해요. 바로 앞에 후지산이 엄청 크게 보여요. 여기 제가 살고 있는 집 바로 앞 골목이에요. 지금은 비가 오고 있거든요? 여기가 고지가 높은 지역이어서, 비가 오면 안개가 이렇게 서려요. 그러면 후지산이 하나도 안 보여요. 그리고 되게 추워요. 일교차도 심하고요.

지금도 안개가 정말 가득한데, 구름 속에 같이 있다는 느낌으로 살고 있어요.

[Q]후지산은 가보셨나요?
네, 근데 등산은 안 해봤어요. 언젠가, 죽기 전에는 해보지 않을까요.

[Q]야마나시가 시골 소도시라고 하셨는데, 원래도 시골을 선호하시나요?
저 사실 도시를 엄청 사랑해요. 지금까지 살아온 곳들이 전부 큰 도시거든요. 그런 곳에서 편안하게 살다가 문득, 너무 편리한 게 싫은 거예요. 가끔은 일 처리도 늦게 되었으면 좋겠고, 여유가 있었으면 좋겠고. 그래서 좀 더 조용한 곳에 살고 싶다는 생각이 들었어요.

내 친구나 가족이 없는 도시라면 너무 공허할 것 같아요. 모든 게 바쁘게 돌아가는데 나만 혼자인 기분. 그것보다 이렇게 적적하고 고즈넉한 곳이 좋은 것 같기도 해요.`,

    2: `[Q]집이 너무 예뻐요.
맞아요. 여기가 원래 제가 아까 말씀드렸던 아티스트 레지던시거든요. 지금은 제가 빌려서 쓰고 있어요. 2층에 방이 두 개가 있고, 화장실이 있어요. 1층에는 거실과 부엌이 있고요. 저는 방 하나와 부엌, 거실을 쓰고 있어요. 사무실도 바로 옆에 붙어 있고요.

[Q]방에 있는 테이블이 좌식 형태네요. 좌식 생활을 하시나요? 아니면 이렇게 좌식 생활을 하시는 이유가 따로 있을까요?
나무로 지은 집이 많아서 그런지, 다리가 긴 테이블을 놨을 때 괜히 안 어울리는 느낌도 들어요. 그리고 당연하게 바닥에 앉아야겠다는 생각이 들었고요. 점점 일본 사람이 돼가고 있나 봐요.

[Q]가구들은 혼자 구하신 거예요? 아니면 원래 있었나요?
원래 있던 것들도 있고, 제가 중고 상점을 뒤져서 가져온 것도 있어요. 이 좌식 테이블은 제가 혼자 구한 거예요.

[Q]방에 널려 있는 패브릭은 뭐예요?
수건이에요. 빨래해서 널어놓은 거예요. 사실 제가 직물 상점에서 판매하는 제품이에요.

[Q]이 집 전체에서 제일 편안한 공간은 어디예요?
제일 편안한 공간은 지금 앉아 있는 이 식탁 의자예요. 저는 방을 잠만 자는 공간으로 생각해서, 이렇게 트여 있는 부엌 같은 곳에서 할 일을 하는 게 가장 편안해요. 보시다시피 이 부엌이 생활감이 느껴져서, 혼자 있어도 혼자가 아닌 느낌?

[Q]집이 넓어서, 혼자 있으면 적적하게 느껴질 수도 있을 것 같아요. 그 집에서 외롭다고 느끼시는 때가 있나요?
네. 오늘 마침 딱 외로운 것 같아요. 외로움을 많이 타는 성격은 아닌데요, 오늘 다른 직원분들이 출장을 가셔서 혼자 일을 했거든요. 그래서 여기 1층 부엌에 내려와서 일을 했어요. 다 같이 쓰는 공용 물건들이 주변에 있어서요.

[Q]부모님이나 친구들이랑 전화는 자주 하시나요?
부모님이랑은 일주일에 한 번은 하는 것 같고, 친구들이랑은 전화는 전혀 안 해요. 제가 원래 연락을 진짜 안 하는 사람이라 가끔 메신저만 주고받고, 가족이랑도 노력해서 일주일에 한 번씩 통화하려고 해요.

[Q]외로울 때는 어떻게 하세요?
보통 외로움을 타진 않지만, 외로울 때가 있으면 밖에 나가요. 엄청 내향인이라 집을 정말 사랑하는 사람인데, 그냥 사람들 많은 길거리로 나가요. 누구를 만나지는 않고요, 혼자서. 모르는 사람들 사이에 섞여 있는다는 느낌.

[Q]이제 이곳이 내 집이라고 느껴지시나요?
네. 지금은 완전 편안해졌어요.

[Q]집이 어디냐고 물어보면 뭐라고 답하실 것 같아요?
음… 우선 이곳에 살지만, 여기가 내 집은 아니고. 집은 앞으로 다시 구해야 하고. 원래 내 집은 한국에 있고… 이런 식으로 말이 길어질 때가 많아요.`,

    3: `[Q]매일 가지고 다니는 물건이나, 이곳에서의 일상과 연결되는 것이 있나요?
매일 가지고 다니는 물건이라기보다는, 요즘은 제가 이곳에서 일하고 생활하면서 생긴 습관이나 태도가 더 일상적인 것 같아요. 일본에서는 사람들이 밥 먹을 때도 굉장히 조용히 먹고, 주변 사람들을 배려하는 문화가 있잖아요. 그래서 저도 남한테 폐를 절대 끼치면 안 된다는 생각으로 항상 행동하게 되는 것 같아요.

한국에서 친구들이 놀러 왔을 때 하나 깨달은 게 있는데, 친구들이 "너 뭔가 행동하는 게 좀 조심스럽다"라는 말을 하는 거예요. 그때 제가 이곳에 많이 적응했구나 싶었어요.

[Q]본인이 이곳에 속한다고 느끼나요? 느낀다면 언제 그렇게 느끼세요?
완전히 속한다고 느끼는 건 아직 어려운 것 같아요. 일본인들이 하는 말 중 60% 정도밖에 이해하지 못할 때가 있거든요. 그럴 때는 내가 여기에 완전히 속한 사람은 아니구나, 하고 느껴요. 그럼에도 이해하는 척을 하기도 하고요.

그리고 나라마다 정서라는 게 있잖아요. 유머 코드 같은 거요. 일본 친구들이 어렸을 때 듣던 노래나 많이 먹던 불량식품에 대해 이야기할 때가 있는데, 이해는 해도 그게 뭔지 하나도 모르는 거예요. 그런 대화에 끼지 못하는 순간에는, 완전히 이들에게 속하지는 못하겠다는 생각이 들어요.

그렇지만 반대로 이곳에 꽤 잘 적응했다고 느끼는 순간도 있어요. 어디 부딪혀서 아플 때 일본어로 리액션이 나오는데, 그럴 때 느껴요.

[Q]일본어로 뭐라고 하나요?
일본어로는 "이따-"라고 해요.

[Q]이곳에서의 삶이 만족스럽다고 느끼는 순간은 언제인가요?
지금 하는 일이 재미있을 때요. 제가 있는 곳이 단순히 회사나 집만이 아니라, 상점이고 카페이고, 레지던시이고, 갤러리이기도 하잖아요. 그런 여러 공간이 한곳에 붙어 있고, 그 안에서 매일 다른 일을 하게 되는 게 좋아요.

그리고 야마나시라는 지역에서만 할 수 있는 일을 하고 있다는 느낌도 좋아요. 오래된 직물 공장들을 직접 돌아다니고, 장인들이 만든 직물을 보고, 이 지역에서만 볼 수 있는 것들을 한국에 소개할 수 있다는 점이 만족스러워요.

한국에 있었으면 이런 일을 했을까? 생각하면 잘 모르겠어요. 그래서 지금은 여기서 하는 일이 너무 즐거워요.`,

    4: `사실 여기… 제가 일하는 곳이에요. 일터이자 숙소이고, 상점이고 카페이고. 이 커뮤니티가 지금 제가 제일 좋아하는 공간이라서 골라봤습니다.

진짜 재미있는 공간이에요. 건물이 3개가 이렇게 붙어 있어요. 제가 사는 숙소의 부엌과 상점은 벽을 공유하고 있어요. 쿠라가 창고라는 뜻이거든요? 원래 70년 정도 창고로 썼던 버려진 공간들이었어요.

근데 이 창고를 개조해서 만들어낸 공간들이어서 쿠라하우스라고 이름을 지었습니다. 창고로 썼던 집이라 그런지 좀 많이 추워요.

[Q]여기서는 어떤 일을 하고 계세요?
제가 일하는 회사는 그래픽 디자인 회사예요. 야마나시가 좀 시골이거든요, 소도시. 엄청 조그마해서 야마나시 시청에서 주는 디자인 일을 해요. 보통 시청 잡지나 팸플릿 디자인, 이벤트나 마을 행사 디자인 같은 것들이요.

근데 저는 디자인은 하지 않고, 이 회사에서 운영하는 복합 문화 시설에서 전반적으로 일을 하고 있어요. 약간 특이한데, 이 회사가 디자인도 하고, 바로 옆에서는 직물이랑 크래프트 공예품 같은 걸 파는 상점도 운영해요. 그리고 바로 옆에서는 음식이랑 음료를 파는 카페도 운영하고요. 아티스트들이 이쪽 지역에 자주 놀러 오거든요? 그 아티스트들이 머물 수 있는 레지던시도 운영하고, 가끔 전시하는 갤러리도 있어요. 되게 뭐가 많아요.

여기서 할 수 있는 일을 합니다. 디자인 빼고!

[Q]해외에 일본 직물을 소개하는 일은 정확히 어떤 일이에요?
야마나시가 직물 산업이 천 년 이상 됐거든요. 엄청 오래된 장인들이 만드는 직물 공장들이 야마나시에 많이 몰려 있어요. 저도 실제로 그 공장들을 돌아다니면서 업무를 보는데, 일본, 그중에서도 야마나시에서만 볼 수 있는 직물이라는 생각이 들어서 이걸 좀 더 알리고 싶은 마음이 있었어요.

그래서 우선 한국에 소개를 하자! 하는 생각이 들어서 지금 한국 라이프스타일 숍에 도매를 하고 있습니다.

[Q]하시는 일이 하나로 정의하기 어려울 만큼 특별한 것 같아요.
맞아요. 저도 스스로 소개할 때 "무슨 일을 합니다"라고 정리하기가 어렵더라고요.`,

    5: `[Q]김밥 이름이 너무 귀여워요. 아무재료 김밥.
진짜 아무거나 넣어요. 냉장고에 있는 재료. 일본에서도 제가 딱 한 번 김밥을 만들었는데, 엄마가 해준 그 맛이 안 나요.

그래서인지 저는 일본식으로 많이 먹어요. 뭔가 한국 음식은 해도 별로 맛이 없고… 한국에서 먹었던 맛을 아니까요. 그래서 그냥 여기서 할 수 있는 재료들로 일본 음식을 만들어 먹는 것 같아요. 생선 구워 먹을 때도 있고, 미소시루 끓여 먹을 때도 있고요.

한식을 가끔 먹고 싶을 때는 한식 가게에 가서 먹어요. 근처에 없어서 멀리 있는데도 꼭 먹고 싶은 날이 있으면 찾아가서 먹게 되더라고요.

[Q]보통 어떤 메뉴를 드세요?
오삼불고기요.`,

    6: `[Q]금속 식기들을 보면 한국이 생각나신다고요.
네. 한국의 은쟁반 같은 거 있잖아요. 아니면 시장에서 쓰는 식기들. 그런 걸 보면 한국 생각이 나더라고요. 일본은 숟가락, 젓가락이 다 나무고 도자기를 많이 써서 금속 식기를 보기 힘들어요.

[Q]왜 일본으로 워홀을 오겠다고 선택하셨는지, 이유가 있을까요?
초등학생 때 도쿄에 살았을 때, 나중에 어른이 되면 혼자 일본에서 살고 싶다는 생각을 했어요. 그때는 부모님과 늘 같이 다니니까, 혼자 자유롭게 다녀보고 싶었던 것 같아요.

저는 늘 익숙한 곳이 좋아서, 다른 나라보다도 일본을 생각했고요. 그럼에도 온전히 혼자 경험하지는 않았다고 생각해서 다시 오게 되었어요.

[Q]일본에 오신 게 후회되거나 한국에 돌아가고 싶다고 느끼신 적은 없으세요?
한국 음식 먹고 싶을 때, 아니면 가족이 보고 싶을 때는 한국에 가고 싶기도 해요. 근데 여기 온 걸 전혀 후회하지는 않아요. 너무 만족하고 있어서, 비자만 나오면 그냥 계속 살고 싶어요. 한국에는 여행으로 가고 싶어요.`,

    7: `일본 사람들이 쓰는 주민등록증을 마이넘버 카드라고 하는데, 저도 똑같은 걸 만들어주더라고요. 일본인들이 쓰는 카드랑 똑같이 생겼어요.

[Q]현재는 워홀 비자로 머무르고 계시고, 취업 비자를 준비 중이신 거예요?
지금 심사 중이에요. 인턴으로 일하다가 같은 곳에서 아예 직원으로 채용이 되긴 했는데, 사실 비자가 승인되지 않으면 돌아갈 수밖에 없어서 어떻게 될지 저도 모르겠네요.

[Q]병원이나 주민센터 같은 제도적 공간에서도 외국인이라는 걸 느끼시나요?
네. 병원 갔을 때나 주민센터 갔을 때도 느껴요. 이름을 영어로 써야 하거든요. 그러면 직원들이 다른 나라 사람이냐고 물어보고, 다른 절차들을 밟아야 할 때가 있어요.

일본어를 쓰면서 일을 하니까 스트레스를 엄청 많이 받아요. 메일 하나 쓸 때도 번역기 돌려보고, GPT한테도 한 번 검사를 받고. 메일 하나 쓰는 데도 시간이 정말 많이 들어요.

얼굴 보고 대화할 때는, 내가 외국인이니 살짝 틀려도 상대방이 이해해 주겠지 하는 마음으로 편하게 말하는데요. 글로 쓸 때는 왠지 틀리면 안 될 것 같아요. 외국인이라서 더 틀리고 싶지 않은 마음? 날 무시하지 마. 나 일본어 잘해.`,

    8: `제가 상점에서 근무할 때 찍은 영상이에요. 영상 속에서는 손님이 제가 한국인인지 여쭤보는… 이런 대화를 일주일에 한 번은 꼭 나누게 되는 것 같아요.

어쩔 수 없이 저의 일본어 발음에서 느낄 수 있는 건지, 사람들이랑 대화를 하다 보면 어디서 오셨냐는 질문을 많이 듣게 되고, 한국인이라고 하면 리액션이 보통 좋아요. 그리고 꼭 자기가 알고 있는 한국어를 저에게 해주고요. ㅋㅋ

근데 사실 저는 여기서 일본인인 척하고 살아요. 항상. 외모가 크게 차이 나지 않잖아요.

[Q]일본어는 4살 때 배우신 이후로 계속 사용하신 건가요?
아니요, 초등학교 3학년 도쿄로 돌아왔을 때 국제학교를 다녔거든요? 그때 일본어는 전혀 안 되는 상태였고, 영어도 하나도 몰라서 둘 다 처음부터 배워야 했어요. 완전히 처음 배우는 느낌이었어요. 아기 때 기억이 하나도 없었어요. 내가 어떻게 일본어를 말했지? 이런 생각이 들면서… 힘들었습니다.

그래도 금방 다시 배웠어요. 힘들기는 했지만, 어릴 때 확실히 배웠던 게 뇌에 데이터처럼 남아 있었던 것 같아요. 그래서 금방 다시 나오는 느낌이 있었어요.

[Q]1년 있으시면서 일본어가 늘고 있다고 느끼시나요?
네, 그런 것 같아요. 오사카에서 영화관 아르바이트를 했을 때는 못 알아들을 때도 많았거든요.

그리고 오사카는 사투리를 써요. 저는 사투리인 줄 모르고 따라 썼어요. 야마나시에서는 도쿄 표준어를 쓰거든요. 그래서 여기 처음 와서 오사카 사투리를 썼을 때, 사람들이 저에게 오사카에서 왔냐고 많이 물어봤어요.`,

    9: `[Q]일본어로 말할 때랑 한국어로 이야기할 때 어떤 차이점을 느끼시나요?
일본 사람들은 뭔가 자기를 칭하는 표현을 많이 안 쓰는 것 같아요. 설명하기는 좀 어려운데요… 아, 일본 사람들이 정말 많이 쓰는 말이 있어요. "오츠카레사마데스."이에요. "수고하십니다" 이런 뜻인데, 그냥 인사할 때도 해요. 출근했을 때, 회사에서 마주쳤을 때도 하고요.

한국어로는 인사하면 중간에 또 인사를 하지는 않잖아요. 근데 일본 사람들은 동선이 겹치거나 할 때 꼭 "오츠카레사마데스"를 많이 해요.`,

    10: `[Q]당분간은 쭉 일본에 살고 싶으시다고요?
사실 지금도 한국에서 그냥 살고 싶다는 마음도 있어요. 근데 제가 하는 일이 일본에서만 할 수 있는 일이어서, 지금 하는 일을 계속하고 싶어서 일본에 쭉 살고 싶다는 생각을 하고 있는 거예요.

이 일을 만약 한국에서도 할 수 있는 환경이 주어져 있다면, 저는 한국에서 살 것 같아요.

[Q]왜요?
한국어로 일하는 게 편하잖아요. 그리고 한국 음식을 먹고 싶기도 하고, 가족이랑 친구들을 보고 싶기도 하고… 일본이 많이 편해지기는 했지만 그래도 제 마음은 여전히 한국에 있는 것 같아요.

여기서 앞으로 더 지내겠지만, 언젠가는 한국에 돌아갈 거라고 생각해요.

제가 지금 하고 있는 일을 한국에서도 할 수 있다면 돌아가도 될 것 같아요. 일본에는 소도시에서 지역 활성화 행사 같은 것들을 진짜 많이 하거든요. 이런 재밌는 일을 할 수 있는 동네가 야마나시 외에도 많고요.

근데 한국에도 그런 곳이 있을까요? 한번 찾아보고 싶어요. 있다면 그런 곳에서도 일을 하고 싶고요. 한국 사람들이랑 일하면 우리끼리 나눌 수 있는 정서가 있잖아요. 그런 게 좀 그립기도 하고, 편하니까요.

그렇지만 또 지금은 여기서 하는 일이 너무 즐거워요. 생각이 왔다 갔다 합니다.`,
  },
};

/* =========================================================
   잡지에 깔리는 발췌문 (미디어와 동등하게 배치됨)
   클릭하면 해당 인물의 인터뷰 뷰로 진입
   ========================================================= */

const EXCERPTS = [
  { person: 'Yuyu',   q: 2,
    text: '나무로 지은 집이 많아서 그런지, 다리가 긴 테이블을 놨을 때 괜히 안 어울리는 느낌도 들어요. 그리고 당연하게 바닥에 앉아야겠다는 생각이 들었고요. 점점 일본 사람이 돼가고 있나 봐요.' },

  { person: 'Soakie', q: 2,
    text: '이 공간이 저한테 되게 특별해요. 보딩스쿨 다닐 때랑 파리에서 살았을 때는 늘 furnished 아파트에 살았거든요. 이번이 처음으로 unfurnished 아파트에 들어온 거예요. 제 취향대로 모든 가구를 직접 채울 수 있었죠. 가구를 직접 구매해보는 건 처음이라, 다른 집들보다 특히 이번 집이 더 애정이 가고 집처럼 느껴지는 것 같아요.' },

  { person: 'Aku',    q: 5,
    text: 'Food. Food. Fucking food. I love eating all the sweet foods and Indian dishes. I like eating the food from home, like the food my mom makes. That\u2019s the reason I always try to make it myself.' },

  { person: 'Toha',   q: 1,
    text: 'Yes. Although there have been periods when I felt homesick. For me, sometimes the cultural differences remind me, \u201cOh yeah, this isn\u2019t my home.\u201d But other times, I think about how much my personality has changed because I\u2019ve assimilated to living here. Then I realize, \u201cOh yeah, this place is also my home.\u201d' },

  { person: 'Andrea', q: 5,
    text: 'To make the dough, I mix flour, yeast, salt, olive oil, and warm water. As it starts to ferment, it smells a little like beer. Then I wait for about eight hours, kneading it from time to time.' },

  { person: 'Chunem', q: 2,
    text: 'Now home is not really a location. It is more like a feeling, a daily life. It is also independence. It is a mixture of independence and loneliness. I think home can be something you are born into, or something you build. My family, the garden, the people I am surrounded by — those are home. The people I have surrounded myself with are home.' },

  { person: 'Chunem', q: 1,
    text: 'Lucerne is smaller and quieter. Sometimes, on a Sunday evening, everything is closed. It can feel very calm, which is nice, but sometimes also a bit too calm.' },

  { person: 'Yuyu',   q: 1,
    text: '제가 일하는 회사는 그래픽 디자인 회사예요. 야마나시가 좀 시골이거든요, 소도시. 엄청 조그마해서 야마나시 시청에서 주는 디자인 일을 해요. 보통 시청 잡지나 팸플릿 디자인, 이벤트나 마을 행사 디자인 같은 것들이요.' },

  { person: 'Soakie', q: 10,
    text: '저는 한국에 꼭 다시 살 거예요. 미국은 글쎄요. 이 1년 끝나고 나서는 잘 모르겠어요. 문이 하나 닫히면 다른 문 하나가 열리겠죠. 그리고 저는 그냥 제 길을 가야 되는 거고… 그렇게 생각해요.' },

  { person: 'Toha',   q: 7,
    text: 'The Sac and Fox Nation is one tribe among many Native American tribes across the United States. My experience being Sac and Fox growing up was complicated.' },

  /* ===== 추가 10개 ===== */

  { person: 'Chunem', q: 4,
    text: 'The cigarette is a funny symbol of the relationship I have with Armenia, because it is not something I really experienced in Armenia. I started smoking these cigarettes only here, in Switzerland. In Armenia, I only saw them on the ground and wondered why so many people were smoking green cigarettes.' },

  { person: 'Andrea', q: 3,
    text: 'You don\u2019t wash a moka pot with soap. Over time, the coffee slowly settles into the pot, and people believe it makes the coffee taste better. That is why I still have not used the new moka pots my father brought me. I think the old one makes better coffee.' },

  { person: 'Toha',   q: 10,
    text: 'And then home is also something you build. I have a wife and a son now, and I think about building a place that is ours, something we share.' },

  { person: 'Aku',    q: 2,
    text: 'I would always say my home is in India. My parents are my everything. My preference would always be toward my family.' },

  { person: 'Soakie', q: 4,
    text: '나중에 뉴욕에 오시면 여기 꼭 가보세요. 제가 제일 좋아하는 곳들이에요.' },

  { person: 'Andrea', q: 2,
    text: 'I don\u2019t think home has to be only one place. You can find home everywhere. You can build your home, and your home can move with you. Like a snail.' },

  { person: 'Aku',    q: 4,
    text: 'Sometimes it doesn\u2019t matter where I walk. It\u2019s not about my favorite place, but my favorite people. My favorite place is where my favorite people are. When I go out with my local friends here, that becomes my favorite place.' },

  { person: 'Yuyu',   q: 7,
    text: '야마나시가 직물 산업이 천 년 이상 됐거든요. 엄청 오래된 장인들이 만드는 직물 공장들이 야마나시에 많이 몰려 있어요. 저도 실제로 그 공장들을 돌아다니면서 업무를 보는데, 일본, 그중에서도 야마나시에서만 볼 수 있는 직물이라는 생각이 들어서 이걸 좀 더 알리고 싶은 마음이 있었어요.' },

  { person: 'Aku',    q: 5,
    text: 'Too much. Coffee runs through my blood.' },

  { person: 'Chunem', q: 2,
    text: 'I love the kitchen the most. It does not matter if someone is home or if I am by myself. I also like the big living room, mainly because we spent more time decorating it.' },
];