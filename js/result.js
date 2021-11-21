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
    new Person("スペシャルウィーク", 60, 90, 85, 77, 49, "いつも明るくて元気いっぱい！","#ee74cd"),
    new Person("トウカイテイオー", 75, 82, 50, 22, 62, "無邪気な自信家！","#3376d2"),
    new Person("サイレンススズカ", 20, 25, 41, 67, 96, "ストイックな天才肌！","#3cc17c"),
    new Person("メジロマックイーン", 65, 41, 62, 43, 33, "正統派お嬢様！","#00b5be"),
    new Person("ゴールドシップ", 38, 50, 90, 10, 44, "スーパーウルトラ自由人！","#da3c57"),
    new Person("ウオッカ", 19, 38, 29, 38, 55, "カッコいいが第一！","#d4c200"),
    new Person("ダイワスカーレット", 50, 40, 20, 42, 34, "強気で生意気な負けず嫌い！","#4f64d8"),
    new Person("ハルウララ", 88, 94, 72, 36, 58, "いつも負けても決して諦めない！","#fa7395"),
    new Person("マルゼンスキー", 39, 75, 72, 66, 58, "おそらくナウなヤング！","#fa7395")
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
    ]
]
let answer
let yourparam = [50,50,50,50,50]
window.onload = function(){
    answer = getUrlQueries()
    for(let i=0;i<=4;i++){
        for(let l=0;l<=8;l++){
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
    document.getElementById("yourumaname").innerHTML=""+characters[charadif.indexOf(Math.min.apply(null,charadif))].name
    document.getElementById("yourtxt").innerHTML=characters[charadif.indexOf(Math.min.apply(null,charadif))].txt
    document.getElementById("main").style.color=characters[charadif.indexOf(Math.min.apply(null,charadif))].col
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