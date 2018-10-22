// let arr = [1,2,3,4,5,2];
// 过滤掉数组中重复的元素
// let arr1 = arr.filter(function(item,index,self) {
// 	return self.indexOf(item) === index;
// })
// console.log(arr1);

// let brr = ['apple','orange','banana'];
// let flag = false;
// let brr2 = brr.map(function(item,index,self) {
// 	if (brr[index] === 'orange') {
// 		flag = true;
// 	};
// 	return item;
// });
// console.log(flag);
// console.log(brr);
// console.log(brr2);


// 返回新的数组
// var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];
 
// function getNewArr(){
        
//     return oldArr.map(function(item,index){
//         item.full_name = [item.first_name,item.last_name].join(" ");
//         return item;
//     });
    
// }
// console.log(oldArr);
// console.log(getNewArr())
// for (let i=0;i<arr.length;i++) {
// 	console.log(arr[i]);
// }


// let arr = ['apple','orange','banaan'];
// let arr1 = arr.indexOf('banaan') !=-1;
// console.log(arr1);

// let arr = [1,2,3,4,5];
// let arr1 = arr.reduce(function (x,item) {
// 	return x.sum + item;
// },{sum:0})
// console.log(arr1);

// var arrString = 'abcdaabc';
// arrString.split('').reduce(function(res, cur) {
// 	console.log(res);
//     res[cur] ? res[cur] ++ : res[cur] = 1
//     // console.log(res);
//     return res;
// }, {})


// arr.forEach(function(item) {
// 	console.log(item)
// });
// for(let key in arr) {
// 	console.log(arr[key]);
// }

// for(let key of arr) {
// 	console.log(key);
// }


// let arr1 = [1,2,3].map(function(item) {
// 	return `<span>${item}</span>`
// });
// console.log(arr1);
// var arr = ["关羽","woi","赵子龙","马zi超","黄忠"];
// var arr1= arr.filter(function(ele,index,array){
//     if(ele.length>2){
//         return true;
//     }
//     return false;
// })
// console.log(arr);
// console.log(arr1);



// console.log([[1,2,3],[4,5,6],[7,8,9]].concat(''));
// console.log([1,2,3].concat([4,5,6]));
// 闭包实例
// console.log(outer,'outer')
// function outer() {
// 	var a = 100;
// 	function inner () {
// 		console.log(a);
// 	};
// 	return inner;
// }
// var f1 = outer();
// console.log(f1,'f1')
// f1();
// (function() {
// 	var con = 123;
// 	console.log(200);
// })();
// console.log(con);

// var test = (function() {
// 	var a = 0;
// 	return function () {
// 		a ++;
// 		console.log(a)
// 	}
// })();
// test();

// var arr =[];
// console.log(arr instanceof Array)
// console.log(typeof arr)

// 函数作为返回值
// function sum(arr) {
// 	return arr.reduce(function(x,y) {
// 		return x+y;
// 	})
// }
// console.log(sum([1,2,3]));

// 要封装一个 x^2 和 x^3 的函数

// function pow(n) {
// 	return function(x) {
// 		return Math.pow(x,n)
// 	}
// }
// var pow2 = pow(2);
// var pow3 = pow(3);
// console.log(pow3(3));
// 因为 pow() 返回的是一个函数，函数需要一个参数，所以 第136行条用函数的时候需要添加一个实参

// 关于 this 对象

var name = 'Shawn';
var obj = {
	name:'Mi',
	get:function() {
		return function() {
			return this.name;
		}
	}
}
console.log(obj.get()());