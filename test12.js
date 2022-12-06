class Privacy {
  constructor(name, birth, phoneNum, eMail) {
    this.name = name;
    this.birth = birth;
    if (typeof phoneNum === "string" && phoneNum.length === 13) {
      this.phoneNum = phoneNum;
    } else {
      console.log("전화번호는 13글자의 string타입이어야 합니다.");
      console.log("ex) '010-1234-5678'");
    }
    if (typeof eMail === "string") {
      this.eMail = eMail;
    } else {
      console.log("이메일은 string타입이어야 합니다.");
    }
  }
  get name() {
    return "이름: " + this._name;
  }
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.log("이름은 string타입이어야 합니다.");
      this._name = "이름을 입력해주세요";
    }
  }
  set birth(value) {
    if (typeof value === "number" && String(value).length === 8) {
      this._birth = String(value);
    } else {
      console.log("생년월일는 8글자의 number이어야 합니다.");
      console.log("ex) 20221206");
      this._birth = "20010101";
    }
  }
  age() {
    let year = Number(this._birth.slice(0, 4));
    let now = new Date();
    let nowYear = now.getFullYear();
    return "나이: " + (nowYear - year + 1);
  }
}

class Student extends Privacy {
  static location = "대전그린컴퓨터아트학원";
  constructor(name, birth, phoneNum, eMail, NCS, className) {
    super(name, birth, phoneNum, eMail);
    if (NCSdata[NCS] && typeof NCS === "number") {
      this.NCS = NCS;
    } else {
      console.log("NCS 번호 에러");
    }
    if (classData[className] && typeof className === "string") {
      this.className = className;
    } else {
      console.log("ClassName 에러");
    }
  }
  set NCS(value) {
    this._NCS = {
      번호: String(value),
      이름: NCSdata[value],
    };
  }
  set classNum(value) {
    let studentNum = value.split("호");
    classData[this._className].count++;
    let index = classData[this._className].count;

    // if (index < 10) {
    //   index = "0" + index;
    // }

    // index = String(index).padStart(2, "0");

    index = "0" + index;
    index = index.slice(-2);

    this._classNum = value;
    this.studentNum = studentNum[0] + "-" + index;
  }
  set className(value) {
    this._className = value;
    this.startDay = classData[value].startDay;
    this.endDay = classData[value].endDay;
    this.classNum = classData[value].classNum;
  }
  D_Day() {
    let end = new Date(this.endDay);
    let now = new Date();
    let D_Day = end.getTime() - now.getTime();
    let floor = Math.floor(D_Day / 1000 / 60 / 60 / 24);
    return "훈련종료까지 " + floor + "일 남았습니다.";
  }
}

const NCSdata = { 1: "정보기술개발" };
const classData = {
  KDT: {
    startDay: "2022-07-19",
    endDay: "2023-01-05",
    classNum: "305호",
    count: 0,
  },
};

const me = new Student(
  "jongin",
  19981224,
  "010-1111-2222",
  "abcd@naver.com",
  1,
  "KDT"
);

console.log(me);
// console.log(me instanceof Privacy);
// console.log(me instanceof Student);
// console.log(me.D_Day());
console.log(me.age());
