function checkPoint(){
    let math = +document.getElementById("math").value;
    let literature = +document.getElementById("literature").value;
    let english = +document.getElementById("english").value;
    let KV = +document.getElementById("KV").value;

    switch(KV){
        case 1:
            point = 0.75;
            break;
        case 2:
            point = 0.5;
            break;
        case 3:
            point = 0.25;
            break;
        case 4:
            point = 0;
            break;
    }
    
    sum = math + literature + english + point;
    document.getElementById("result").innerHTML = "Tổng điểm đại học khối D của bạn là: " + sum; 
}