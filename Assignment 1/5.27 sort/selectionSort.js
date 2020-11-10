function selectionSort(array){
    //make a copy to avoid mutation
      const arr = array.slice();
    
        for(let i=0; i <arr.length - 1; i++) {
            let minIndex=i;  //1st element considered to be min
            for(let j= i+1; j< arr.length; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            //simpler way of swapping instead of using temp variable
        }
    
        return arr;
    }
    
    
    selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
    