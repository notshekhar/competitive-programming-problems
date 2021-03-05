let roads = [
	[[1, 3]],
    [[4, 1], [3, 2]],
    [[1, 0]],
    [[5, 3]],
    [[5, 5]],
    []
    ]

function Node(from, arr){
	if(arr){
		this.node = arr[0]
		this.distance = arr[1]	
		this.from = from
	}else{
		this.node = from
	}
}
function orienteeringBeginner(n, roads){
	
}



console.log(new Node("start"))