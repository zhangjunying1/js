/*
* @Author: junying
* @Date:   2017-09-07 14:33:13
* @Last Modified by:   junying
* @Last Modified time: 2017-09-07 17:46:07
*/

//将数组转换成字符串  参数：arr:特定数组   str：连接符
/*function join(arr,str){
	str=str==undefined?'+':str;
	var result='';
	for(var i=0;i<arr.length;i++){  
		if(i<arr.length-1){
			result += arr[i] + str;
		}else{
			result += arr[i];
		}
   	}
   	return result;
}*/

function join(arr,str){
	str=str==undefined?'+':str;
	var result='';
	for(var i=0;i<arr.length-1;i++){  
		result += arr[i]+str;
   	}
   	if(i = arr.length-1){
   		result += arr[i];
   	}
   	return result;
}

//筛选数组里面奇数的数组元素  filter()
function filter(arr,fn){
	var newarr = [];
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
			newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}

//作用域

//将数组中的元素都扩大n倍 映射
function map(arr,fn){
	var newarr = [];
	for(var i = 0; i< arr.length;i++){
		newarr[newarr.length] = fn(arr[i]);
	}
	return newarr;
}
