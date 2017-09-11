/*
* @Author: junying
* @Date:   2017-09-11 10:10:39
* @Last Modified by:   junying
* @Last Modified time: 2017-09-11 10:13:01
*/
function map(arr,fn){
	var newarr = [];
	for(var i = 0; i< arr.length;i++){
		newarr[newarr.length] = fn(arr[i]);
	}
	return newarr;
}