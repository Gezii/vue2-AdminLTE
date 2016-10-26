export function geolocation(map) {
  map.plugin('AMap.Geolocation', () => {
    const geolocation = new AMap.Geolocation({
      enableHighAccuracy: true,//是否使用高精度定位，默认:true
      timeout: 10000,          //超过10秒后停止定位，默认：无穷大
      maximumAge: 0,           //定位结果缓存0毫秒，默认：0
      convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      showButton: true,        //显示定位按钮，默认：true
      buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
      buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
      showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
      panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
      zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    });
    map.addControl(geolocation);
    AMap.event.addListener(geolocation, 'complete', () => {});//返回定位信息
    AMap.event.addListener(geolocation, 'error', () => {});      //返回定位出错信息
  });
}

export function showMarker(map, markers) {
  markers.forEach((m) => {
    let marker = new AMap.Marker({
      // icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      content: '<div class="text-aqua"><h1><i class="fa fa-bicycle"></i></h1></div>',
      position: m
    });
    marker.setMap(map);
  })
}

export function drawLine(map, ponits) {
  const lineArr = ponits.map(point => [point.longitude, point.latitude]);

  let polyline = new AMap.Polyline({
    path: lineArr,          //设置线覆盖物路径
    strokeColor: "#3366FF", //线颜色
    strokeOpacity: 1,       //线透明度
    strokeWeight: 5,        //线宽
    strokeStyle: "solid",   //线样式
    strokeDasharray: [10, 5] //补充线样式
  });
  polyline.setMap(map);
}