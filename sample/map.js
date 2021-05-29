const mapContainer = document.querySelector(".map");

let mapOption = { 
        center: new kakao.maps.LatLng(37.504720, 126.955134), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
};

// 맵 생성
let map = new kakao.maps.Map(mapContainer, mapOption); 

// function moveCenter(){
//     console.log('지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.');
// }

// kakao.maps.event.addListener(map, 'center_changed', moveCenter);
