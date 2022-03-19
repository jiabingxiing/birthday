// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "于3月25日送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的陈佳颖小宝贝",  // 同上...
        "今天是你的生日呀",
        "这是我们在一起之后",
        "你的第一个生日哦",
        "祝你生日快乐！",
        "虽然因为疫情",
        "我不能到你身边去和你一起过生日",
        "但还是要开心呀，要好好吃饭好好睡觉好好学习",
        "最重要是好好和我在一起",
        "这世界那么多人我却只喜欢你~",
        "永远在一起永远爱你！",
        "嘘，再告诉你一个秘密",
        "我爱你，不止爱你的夏天，也爱你的冬天",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: { 
        //"心爱的小可爱": "./imgs/QQ图片20220319124734.jpg",
        "于3月25日送给我": "./imgs/songxinxin.jpeg",
        "心爱的陈佳颖小宝贝": "./imgs/QQ图片20220319124734.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
        "今天是你的生日呀": "./imgs/shengri.jpeg",
        "这是我们在一起之后": "./imgs/QQ图片20220319124730.jpg",
        "你的第一个生日哦": "./imgs/QQ图片20220319130248.jpg",
        "祝你生日快乐！": "./imgs/happy.jpg", 
        "虽然因为疫情": "./imgs/chuo.gif",
        "但还是要开心呀, 要好好吃饭好好睡觉好好学习": "./imgs/xuexi.jpg",
        "最重要是好好和我在一起": "./imgs/微信图片_202202131624564.jpg",
        "这世界那么多人我却只喜欢你~": "./imgs/shijie.jpg",
        "永远在一起永远爱你！": "./imgs/微信图片_20220218211953.jpg",
        "我爱你，不止爱你的夏天，也爱你的冬天": "./imgs/v2-0f077addd975c7c6748c5b46e834dc88_720w.jpg"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "请开始",
        play: "音乐",
        bannar_coming: "颜色~",
        balloons_flying: "咦，好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！",
        story: "A MESSAGE FOR Yinging",
    }
};
