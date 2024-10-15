function canVote(age){
    let isEligible=(age>=18);
    return isEligible;
}

let ans=canVote(20);
let ans2=canVote(15);
console.log(ans);
console.log(ans2);