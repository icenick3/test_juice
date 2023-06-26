function commentConstructor(img, name, stars, comment) {
    this.img = img;
    this.name = name;
    this.stars = stars;
    this.comment = comment;
}

let comments = [];
let comments2 = [];
let comments3 = [];


let comment6 = new commentConstructor("https://i.pinimg.com/originals/ce/e0/fc/cee0fc26abeaf26bdb8199b34a7d4669.jpg", "Adriana B.", "https://loveriq.online/sweep/za1/raiting.png", "Great earphones! The sound is clear and crisp, and I love the flashy color of the charging case. I highly recommend them!")
let comment2 = new commentConstructor("https://i.pinimg.com/originals/13/3c/65/133c6592ec3869f3b9a5a74ef38457d4.jpg", "Rachel M.", "https://loveriq.online/sweep/za1/raiting.png", "I am impressed by the audio quality of these earphones. The noise cancellation is fantastic, and I can finally fully enjoy my music without being disturbed by external noise.")
let comment3 = new commentConstructor("https://i.pinimg.com/originals/49/30/c2/4930c28004a5c63061474ee3719c7104.jpg", "Ella W.", "https://loveriq.online/sweep/za1/raiting.png", "I really like the unique design of these earphones. They are comfortable to wear and connect easily to my phone. I am very satisfied with this purchase.")
let comment4 = new commentConstructor("https://i.pinimg.com/originals/3f/0e/4d/3f0e4d4c1af119cd468f15206d93f228.jpg", "Elena R.", "https://loveriq.online/sweep/za1/raiting.png", "I didn't think wireless earphones could be so convenient. The charging case is compact and easy to carry, and the earphones fit perfectly in place.")
let comment5 = new commentConstructor("https://i.pinimg.com/originals/1f/28/1f/1f281faeb4aeac6ac9c03974375767c0.jpg", "Evlalia K.", "https://loveriq.online/sweep/za1/raiting.png", "I had been searching for these earphones for a long time! I'm so happy to have found them! Received in 10 days.")


let comment1 = new commentConstructor("https://i.pinimg.com/originals/6e/08/a6/6e08a68d2478932ccb4977a6aa1d8569.jpg", "Sofia P.", "https://loveriq.online/sweep/za1/raiting.png", "I am very impressed with the audio quality of these earphones. The bass is powerful, and the Bluetooth connectivity is excellent. I highly recommend this product.")
let comment7 = new commentConstructor("https://i.pinimg.com/originals/5a/83/63/5a8363a1128e3c1ad13a2692a2efa8f4.jpg", "Carlo F.", "https://loveriq.online/sweep/za1/raiting.png", "The earphones are of very good quality, and the bass is superb. I use them for listening to music and for phone calls, and they work wonderfully.")
let comment8 = new commentConstructor("https://i.pinimg.com/originals/bb/a9/28/bba928b743bc4a3e26ca413257f90532.jpg", "Edda W.", "https://loveriq.online/sweep/za1/raiting.png", "Amazing sound and stunning design! I love my new earphones! Thank you for this unique experience!")
let comment9 = new commentConstructor("https://i.pinimg.com/originals/5d/cd/2f/5dcd2f7559d31a2b10ee5a9c20dc6633.jpg", "Erik B.", "https://loveriq.online/sweep/za1/raiting.png", "I am impressed by the sound quality and battery life of these earphones. They have become my best companions for the gym!")
let comment10 = new commentConstructor("https://i.pinimg.com/originals/9c/28/11/9c2811cd7f163a5bf889809539196f65.png", "Lucrezia F.", "https://loveriq.online/sweep/za1/raiting.png", "Sunt foarte recunoscător pentru această calitate, mi le doream de mult timp.")


comments.push(comment1)
comments.push(comment2)
comments.push(comment3)
comments2.push(comment4)
comments2.push(comment5)
comments2.push(comment6)
comments3.push(comment7)
comments3.push(comment8)
comments3.push(comment9)


export {comments, comments2, comments3};