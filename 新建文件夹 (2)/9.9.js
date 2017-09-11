/*
* @Author: junying
* @Date:   2017-09-09 09:10:06
* @Last Modified by:   junying
* @Last Modified time: 2017-09-09 15:53:20
*/

//判断数组中的元素是否存在，存在返回它在数组中的第一次出现的位置i，否则返回-1
function indexof(arr,value){
	if(!(typeof arr == 'object' && arguments.length > 1)){
		return '输入有误';
	}
	for(var i = 0;i < arr.length; i++){
		if(arr[i] == value){
			return i;
		}
	}
	return -1;
}

//判断数组中的元素是否存在，存在返回它在数组中的最后一次出现的位置i，否则返回-1
function lastindexof(arr,value){
	if(!(typeof arr == 'object' && arguments.length > 1)){
		return '输入有误';
	}
	for(var i = arr.length-1; i >= 0; i--){
		if(arr[i] == value){
			return i;
		}
	}
	return -1;
}

//将数组反转
function reverse(arr){
	var newarr = [];
	for(var i = arr.length-1; i > -1;i--){
		push(newarr,arr[i]);
	}
	return newarr;
}
//添加元素
function push(arr,...rest){
	for(var i = 0;i < rest.length; i++){
		arr[arr.length] = rest[i];
	}
}

//万能的删除splice
function splicedelete(arr,pos,num){
	var newarr = [];
	for(var i = 0;i < arr.length; i++){
		if(i >= pos && i < pos + num){
			continue;
		}
		newarr[newarr.length] = arr[i];
	}
	return newarr;
}
//万能的添加  1.先将pos前面的放入newarr中；2.i == pos将新的元素添加到newarr中；3.将pos后面的放入newarr中
function spliceAdd(arr,pos,...rest){
	var newarr = [];
	for(var i = 0;i < pos;i++){
		newarr[newarr.length] = arr[i];
	}
	for(var i = 0;i < rest.length;i++){
		newarr[newarr.length] = rest[i];
	}
	for(var i = pos;i<arr.length;i++){
		newarr[newarr.length] = arr[i];
	}
	return newarr;
}

function spliceAdd1(arr,pos){
	var newarr = [];
	for(var i = 0;i < pos;i++){
		newarr[newarr.length] = arr[i];
	}
	for(var i = 2;i < arguments.length;i++){
		newarr[newarr.length] = arguments[i];
	}
	for(var i = pos;i<arr.length;i++){
		newarr[newarr.length] = arr[i];
	}
	return newarr;
}
//在任意位置添加和删除元素（万能的添加和删除）
function splice(arr,pos,num,...rest){
	var newarr = splicedelete(arr,pos,num);
	if(rest.length > 0){
		spliceAdd(newarr,pos,...rest);
	}
	return newarr;
}

//只要有一个元素满足条件时返回true
function some(arr,fn){
	for(var i = 0;i < arr.length ;i++){
		if(fn(arr[i])){
			return true;
		}
	}
	return false;
}
//当所有元素满足条件时返回true
function every(arr,fn){
	for(var i = 0;i < arr.length ;i++){
		if(!fn(arr[i])){
			return false;
		}
	}
	return true;
}