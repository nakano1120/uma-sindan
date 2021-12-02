/// name = お名前
/// ~5つの能力 50が平均~
/// neu = 物事の動じやすさ 高いとびっくりしがち 低いと動じない
/// ext = 活発さ 高いと明るいお調子者 低いとダークな性格
/// ope = 好奇心の強さ 高いと好奇心旺盛で寛容 低いと安定性が高く自己をもっている
/// agr = 同調性のつよさ 高いとリーダー向き 低いとマイペース
/// con = 誠実さ 高いと真面目で意思が強い 低いと三日坊主
class Person {
    
    name = "";
    neu = 0;
    ext = 0;
    ope = 0;
    agr = 0;
    con = 0;
    txt = "";
    col = "";

    constructor(name, neu, ext, ope, agr, con, txt, col) {
        this.name = name;
        this.neu = neu;
        this.ext = ext;
        this.ope = ope;
        this.agr = agr;
        this.con = con;
        this.txt = txt;
        this.col = col;
    }
    
}
const characters = [
    new Person("スペシャルウィーク", 62, 82, 76, 60, 52, "いつも明るくて元気いっぱい！","#ee74cd"),
    new Person("トウカイテイオー", 38, 84, 70, 58, 68, "無邪気な自信家！","#3376d2"),
    new Person("サイレンススズカ", 58, 46, 66, 50, 86, "ストイックな天才肌！","#3cc17c"),
    new Person("メジロマックイーン", 50, 46, 56, 34, 74, "正統派お嬢様！","#00b5be"),
    new Person("ゴールドシップ", 66, 43, 54, 15, 60, "スーパーウルトラ自由人！","#da3c57"),
    new Person("ウオッカ", 50, 72, 66, 52, 68, "カッコいいが第一！","#d4c200"),
    new Person("ダイワスカーレット", 50, 79, 60, 68, 80, "強気で生意気な負けず嫌い！","#4f64d8"),
    new Person("ハルウララ", 62, 66, 90, 28, 40, "いつも負けても決して諦めない！","#fa7395"),
    new Person("マルゼンスキー", 48, 74, 66, 42, 44, "おそらくナウなヤング！","#ea504a"),
    new Person("フジキセキ", 56, 47, 42, 63, 68, "心はイケメンでございます","#444745"),
    new Person("オグリキャップ", 58, 42, 84, 23, 60, "おかわりいただけるだろうか？","#3a7ad2"),
    new Person("タイキシャトル", 54, 92, 84, 37, 44, "パワフルで人懐っこいカウガール！","#73c032"),
    new Person("グラスワンダー", 64, 51, 56, 46, 99, "帰国子女だが生粋の大和撫子","#3a34ac"),
    new Person("ヒシアマゾン", 50, 74, 50, 72, 73, "頼れる熱血肌の姉御","#2185d0"),
    new Person("エルコンドルパサー", 46, 99, 82, 56, 46, "ラテン系の情熱ウマ娘デース！","#dd4e31"),
    new Person("テイエムオペラオー", 42, 72, 74, 18, 42, "ナルシストだけどなんか喜劇王","#f271c4"),
]
const resultvalue = [
    [
        [6,6,6,0,0],
        [-6,2,10,0,0],
        [-10,2,12,0,0],
        [0,-4,8,0,0],
        [0,-10,-6,0,0],
    ],
    [
        [-2,6,0,6,0],
        [0,4,10,-2,0],
        [-12,-6,6,0,2],
        [0,-2,0,-12,-6],
        [0,-1,0,-12,6],
    ],
    [
        [-6,0,0,-8,4],
        [0,12,0,6,0],
        [-4,6,4,8,12],
        [0,0,6,-12,-6],
        [-2,-10,0,-6,0],
    ],
    [
        [0,0,-6,4,10],
        [-6,10,10,0,0],
        [-4,0,2,-10,0],
        [0,4,4,12,0],
        [0,0-10,0,-10,-4],
    ],
    [
        [2,8,0,6,0],
        [4,6,0,4,0],
        [4,-4,-4,0,8],
        [0,4,8,3,0],
        [0,-2,8,-8,0],
    ],
    [
        [0,2,4,8,0],
        [-2,6,0,0,4],
        [8,-4,0,0,10],
        [0,4,0,-8,-6],
        [-4,-12,-2,0,0],
    ],
    [
        [0,10,0,4,2],
        [4,-2,-10,0,2],
        [4,6,6,-4,0],
        [2,2,0,0,6],
        [0,-6,0,-2,0],
    ],
    [
        [4,6,0,0,0],
        [0,0,2,0,8],
        [0,6,4,0,0],
        [0,2,2,-4,0],
        [10,-10,0,0,0],
    ],
    [
        [6,-2,0,4,0],
        [8,6,0,0,2],
        [12,-4,-8,0,0],
        [0,2,10,-2,0],
        [0,-8,-4,-4,0],
    ],
    [
        [0,0,-2,6,-8],
        [6,4,-6,0,2],
        [-6,-2,-8,-6,8],
        [0,6,6,8,0],
        [0,0,-2,-10,-6],
    ],
    [
        [0,2,8,0,-2],
        [0,0,-2,6,8],
        [6,-4,-2,0,2],
        [0,-4,0,-4,-8],
        [0,-8,6,-4,-2],
    ]
]
let answer
let yourparam = [50,50,50,50,50]
const parameter=["neu","ext","ope","agr","con"]
window.onload = function(){
    answer = getUrlQueries()
    for(let i=0;i<=4;i++){
        for(let l=0;l<answer.length;l++){
            yourparam[i]+=(resultvalue[l][answer[l]-1][i]);
        }
    }
    console.log(yourparam)
    let charadif=[]
    characters.forEach(chara =>
        charadif.push(Math.abs(chara.neu-yourparam[0])+Math.abs(chara.ext-yourparam[1])+Math.abs(chara.ope-yourparam[2])+Math.abs(chara.agr-yourparam[3])+Math.abs(chara.con-yourparam[4]))
    );
    console.log(charadif)
    console.log(charadif.indexOf(Math.min.apply(null,charadif)))
    document.getElementsByClassName("horse-name")[0].innerHTML=""+characters[charadif.indexOf(Math.min.apply(null,charadif))].name
    document.getElementsByClassName("horse-characteristics")[0].innerHTML=characters[charadif.indexOf(Math.min.apply(null,charadif))].txt
    document.getElementById("most-close").style.color=characters[charadif.indexOf(Math.min.apply(null,charadif))].col
    document.getElementById("most-close").style.border="3px solid "+characters[charadif.indexOf(Math.min.apply(null,charadif))].col
    document.getElementsByClassName("distance")[0].innerHTML="距離:"+charadif[charadif.indexOf(Math.min.apply(null,charadif))]+"m"
    document.getElementsByClassName("horse-name")[1].innerHTML=""+characters[charadif.indexOf(Math.max.apply(null,charadif))].name
    document.getElementsByClassName("horse-characteristics")[1].innerHTML=characters[charadif.indexOf(Math.max.apply(null,charadif))].txt
    document.getElementById("most-far").style.color=characters[charadif.indexOf(Math.max.apply(null,charadif))].col
    document.getElementById("most-far").style.border="3px solid "+characters[charadif.indexOf(Math.max.apply(null,charadif))].col
    document.getElementsByClassName("distance")[1].innerHTML="距離:"+charadif[charadif.indexOf(Math.max.apply(null,charadif))]+"m"
    for(let o=0;o<=4;o++){
        if(yourparam[o]>=80){
            document.getElementById(parameter[o]).src = "../img/param1.png"
        }else if(yourparam[o]>=60){
            document.getElementById(parameter[o]).src = "../img/param2.png"
        }else if(yourparam[o]>=40){
            document.getElementById(parameter[o]).src = "../img/param3.png"
        }else if(yourparam[o]>=20){
            document.getElementById(parameter[o]).src = "../img/param4.png"
        }else{
            document.getElementById(parameter[o]).src = "../img/param5.png"
        }
        document.getElementById("point-"+parameter[o]).innerText = yourparam[o]+"点"
    }
}

function getUrlQueries() {
    let queryStr = window.location.search.slice(1);  // 文頭?を除外
    // クエリがない場合は空のオブジェクトを返す
    if (!queryStr) {
      return
    }
    let answers = queryStr.split("&")
    let answeritems = []
    answers.forEach(answer =>
        answeritems.push(answer.slice(answer.indexOf("=")+1))
    );
    return answeritems
}
function opentwitter(){
    let text="あなたに一番近いウマ娘は...%0D%0A「"+document.getElementsByClassName("horse-name")[0].innerHTML+"」でした！%0D%0A詳細結果はこちら⇨"+location.href+"%0D%0A"+"#ウマ娘シンダン"
    let turl="https://twitter.com/intent/tweet?text="+text+"&url="+"https://nakano1120.github.io/uma-sindan/"+"&hashtags="+"#ウマ娘シンダン";
    window.open(turl,'_blank');
}