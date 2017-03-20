var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
// 遍历读取aqiData中各个城市的数据
// 将空气质量指数大于60的城市显示到aqi-list的列表中
(function () {
    var text = " ";
    var num = ["一","二","三","四","五","六"];
    // 降序排列数组
    aqiData.sort(function descend(x, y) {return y[1]-x[1];});
    // 筛选大于60的值
    aqiData.filter(function check(a, index) {
    	if (a[1] > 60) {
    		text += "<li>第" + num[index] + "名:" + a[0] + ", " + a[1] + "</li>";}
    	return;
        }
   );
    document.getElementById("aqi-list").innerHTML=text; 
})();

	
