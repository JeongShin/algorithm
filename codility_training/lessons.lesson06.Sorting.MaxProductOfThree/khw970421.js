function solution(A) {
    A.sort((a,b)=>b-a);
    const len=A.length;
    return Math.max(A[0]*A[1]*A[2],A[len-1]*A[len-2]*A[0]);
}

console.log("에러);

/*
나열했을때 경우의수는 결국 2가지

순서로 나열했을때 제일큰수부터 3가지의 곱이 제일클때

순서로 나열했을때 제일절대값이 큰음수 2개와 제일큰 양수의 곱

(0이 포함되는 경우는 결국 둘다 0이 포함되면 최대도 0이고 둘중 하나가 0이 포함되도 나머지 다른 값이 max로 출력

 */