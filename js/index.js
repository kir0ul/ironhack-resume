function buildTriangle(n) {
    let res = [];
    for(let j=1; j<n+1; j++){
        let str = [];
        for(let i=1; i<j+1; i++){
            console.log("i = " + i.toString())
            str.push("*")
            console.log(str);
            console.log("----------")
        }
        console.log("j = " + j.toString())
        res.push(str);
        console.log(res);
        console.log("==========")
    }
    //console.log(res);
    return res;
}
console.log(buildTriangle(5));
