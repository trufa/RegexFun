# RegexFun

## Build regex using simple and readable javascript/typescript functions

| Token      | Function                       | Description                                                                                                          | Example                                                       |
|------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| any string | literal(str: string): RegexFun | Inserts any literal character you pass. Doesn't do any transformations i.e. if you pass `.` it will insert it as is. | literal("hello") >> "hello" literal("exam.ple") >> "exam.ple" |
|            |                                |                                                                                                                      |                                                               |