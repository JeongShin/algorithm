function solution(N) {
    let a,b=[];//배열생성
    let p=0;
    let max_result=0,result=0;
    
     a=N.toString(2);
     const a_length=a.length;
     for(let i=0;i<a_length;i++)
     {
         idx = a.indexOf(1,i);
         if(idx== -1)
            break;
         gap_result = idx-result;
         if(max_result<gap_result) max_result=gap_result;
         result=idx;
         i=idx;
     }
     if(max_result>=1)
     return max_result-1;
     else
     return 0;
    
}
