function flatten (arr){
	var results=[];
	function Job (arr,i=0){
		if(i>=arr.length) return;
		else if(arr[i] instanceof Array){
			Job(arr[i]);
		} else {
			return results.push(arr[i]);
		}
		Job(arr, i+1);
	}
}