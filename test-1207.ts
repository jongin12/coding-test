interface obj{
  companyName: string,
  mainStack: string[],
  subStack: string[],
  businessModel: string[],
  positiveFeather: string[],
  negativeFeather: string[],
}

class CompanyInfo{
  companyName:string;
  mainStack: string[];
  subStack: string[];
  businessModel: string[];
  positiveFeather: string[];
  negativeFeather: string[];
  constructor(object:obj){
    this.companyName = object.companyName;
    this.mainStack = object.mainStack;
    this.subStack = object.subStack;
    this.businessModel = object.businessModel;
    this.positiveFeather = object.positiveFeather;
    this.negativeFeather = object.negativeFeather;
  }
}
let testObj ={
  companyName:"string",
  mainStack: ["dd"],
  subStack: ["aa"],
  businessModel: ["xx"],
  positiveFeather: ["qq"],
  negativeFeather: ["gg"],
}
let test = new CompanyInfo(testObj)
console.log(test);

// function employment(object:obj):obj {
//   //! algorithm?
//   return {
//     companyName: "",
//     mainStack: [],
//     subStack: [],
//     businessModel: [] || "",
//     positiveFeather: [],
//     negativeFeather: [],
//   };
// }

let hoobo = [];
