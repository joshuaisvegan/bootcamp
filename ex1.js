var item = 
if (item === undefined) {
  console.log("undefined!");
} else if (item === null) {
  console.log("null!");
} else if (typeof (item) === "number"){
    if (isNaN(item)){
    console.log("not a number!");
  }
  else {
    console.log("number!");
  }
} else if (typeof item === "string"){
  console.log("string!");
} else if (typeof item === "boolean"){
  console.log("Boolean!");
} else if (typeof item === "function"){
  console.log("function!");
} else if (typeof item === "object"){
  if (Array.isArray(item)){
    console.log("array!")
  } else {
    console.log("object!")
  }
} else {
  console.log("I have no idea!")
}
