function commentConstructor(img, name, stars, comment) {
    this.img = img;
    this.name = name;
    this.stars = stars;
    this.comment = comment;
}

let comments = [];
let comments2 = [];
let comments3 = [];


let comment1 = new commentConstructor("https://loveriq.online/sweep/za1/coment1.png", "Adriana B.", "https://loveriq.online/sweep/za1/raiting.png","Great, beautiful, quality. Everything works. Super that there is an extra lid on the bottom and you can make a bottle of water or juice from a blender")
let comment2 = new commentConstructor("https://loveriq.online/sweep/za1/coment2.jpg", "Rachel M.", "https://loveriq.online/sweep/za1/raiting.png","I just love it! Good seller, answered all questions, blender came very quickly, already used♥️ I recommend, for that kind of money, it's a pleasure")
let comment3 = new commentConstructor("https://loveriq.online/sweep/za1/coment3.jpg", "Ella W.", "https://loveriq.online/sweep/za1/raiting.png","I love it!! It’s perfect for making a quick orange juice for breakfast. I like a lot of pulp so excuse how gross it looks, but works great! And is very convenient!")
let comment4 = new commentConstructor("https://loveriq.online/sweep/za1/coment4.jpg", "Elena r.", "https://loveriq.online/sweep/za1/raiting.png","I took a blender to myself and my mother, and we are delighted!) quickly delivered by courier. Blender works perfectly, very beautiful) all girlfriends ask where I got it, I will recommend this store) Thank you very much!")
let comment5 = new commentConstructor("https://loveriq.online/sweep/za1/coment5.jpg", "Evlalia K.", "https://loveriq.online/sweep/za1/raiting.png","It is so nice. I like it and I have approve it 100% quality good job. Keep it up This is some of the good product. We need in the market good job guys.")
let comment6 = new commentConstructor("https://loveriq.online/sweep/za1/comment10.gif", "Sofia P.", "https://loveriq.online/sweep/za1/raiting.png","Amazing! Is wonderful. I have tried it and it works super well, it beats things very well, it has a lot of strength. It also has a very nice and comfortable design. Its operation is easy. I like it very much. I am thinking of buying another one for a gift. I'm delighted with him.")
let comment7 = new commentConstructor("https://loveriq.online/sweep/za1/coment7.jpg", "Carlo F.", "https://loveriq.online/sweep/za1/raiting.png","Excellent Product I loved it. Indoooooo and practical. Works rightArrived on the date set for delivery.")
let comment8 = new commentConstructor("https://loveriq.online/sweep/za1/coment8.png", "Edda W.", "https://loveriq.online/sweep/za1/raiting.png","The product arrived well in good condition. Very happy to have it.")
let comment9 = new commentConstructor("https://loveriq.online/sweep/za1/coment9.jpg", "Erik B.", "https://loveriq.online/sweep/za1/raiting.png","The goods arrived very quickly, the courier delivered it home. All safe and sound, works great. Thank you")
let comment10 = new commentConstructor("https://loveriq.online/sweep/za1/coment6.jpg", "Lucrezia F.", "https://loveriq.online/sweep/za1/raiting.png","CARRY IT ALL THE TIME ! Does fast but keep your charger with you .")


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