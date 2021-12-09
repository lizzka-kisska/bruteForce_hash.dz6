let fs = require('fs');
let arg = process.argv;

let s = fs.readFileSync(arg[2]).toString();
let t = fs.readFileSync(arg[3]).toString();
let n = s.length, m = t.length;

if (arg[4]=="bruteForce"){
    let i=0;
    while(i<=n-m){
        let j=0;
        while (s[i+j]==t[j]){
            j++;
            if (j==m){
                console.log(i+1);
                break;
            }
        }
        i++;
    }
}
if (arg[4]=="hashFun"){
    let hashs=0, hasht=0;
    for (let i=0; i<m; i++){
        hasht += Math.pow(t.charCodeAt(i), 2);
        hashs += Math.pow(s.charCodeAt(i), 2);
    }
    for (let i=0; i<n; i++){
        if (hashs==hasht){
            let flag = true;
            for (let j=0; j<m; j++)
                if (s[i+j]!=t[j]){
                    flag = false;
                    break
                }
            if (flag)
                console.log(i+1);
        }
        hashs = hashs - Math.pow(s.charCodeAt(i), 2) + Math.pow(s.charCodeAt(i+m), 2);
    }
}