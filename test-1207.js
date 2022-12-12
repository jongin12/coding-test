var CompanyInfo = /** @class */ (function () {
    function CompanyInfo(object) {
        this.companyName = object.companyName;
        this.mainStack = object.mainStack;
        this.subStack = object.subStack;
        this.businessModel = object.businessModel;
        this.positiveFeather = object.positiveFeather;
        this.negativeFeather = object.negativeFeather;
    }
    return CompanyInfo;
}());
var testObj = {
    companyName: "string",
    mainStack: ["dd"],
    subStack: ["aa"],
    businessModel: ["xx"],
    positiveFeather: ["qq"],
    negativeFeather: ["gg"]
};
var test = new CompanyInfo(testObj);
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
var hoobo = [];
