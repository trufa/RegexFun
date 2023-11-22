

class RegexFun {
  private regexStr: string;

  constructor() {
    this.regexStr = '';
  }

  getRegexStr(): string {
    return new RegExp(this.regexStr).source
  }

  logRegexStr() {
    console.log(this.getRegexStr());
  }

  // Token functions

  literal(str: string): RegexFun {
    this.regexStr += str;
    return this;
  }

  newLine(): RegexFun {
    this.regexStr += '\n';
    return this;
  }
  anySingleChar(): RegexFun {
    this.regexStr += '.';
    return this;
  }
  captureEverythingEnclosed(capture: RegexFun): RegexFun {
    this.regexStr += `${this.getRegexStr()}(${capture.getRegexStr()})`;
    return this;
  }
}

const regex = new RegexFun();
regex.newLine().anySingleChar().logRegexStr();

export default RegexFun;
