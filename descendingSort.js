

//unsorted array
const unsortedArray=[20,11,32,1,98,12,12,30,74];

//function call to sort the array in descending order
const sortedArray= descendingSorting(unsortedArray);

console.log("Sorted Array:"+" "+sortedArray);

//sorting function
function descendingSorting(arr){
    let n= arr.length;

    //iterating over the array for nth times 
    for(let i=0; i<n-1; i++){

        //iterating for n-1-i time
        for(let j=0; j<n-1-i; j++){

            //if current element is smaller than next element then swap
            //and at every iteration one element is getting sort 
            if(arr[j]<arr[j+1]){
                let temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}