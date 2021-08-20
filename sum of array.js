function sumAll(arr) {
    if (arr[0]<arr[1]){
      var i=arr[0]
      var j=arr[1]
      var sum=0
      while (i<=j){
        sum+=i
        i+=1
      }
    return (sum)
    }else{
        var start=arr[0]
        var end=arr[1]
        var total=0
        while (start>=end){
          total+=start
          start-=1
        
    }
    return (total)         
    }       
  }
console.log(sumAll([4, 1]));
  
  