//? Bài Tập 3

/**
 * Inputs: name, thuNhap, nguoi, bảng thuế
 * 
 * Process:
 *      B1: lấy dữ liệu từ form
 *      B2: tính thuNhapChiuThue = thuNhap - 4 - nguoi * 1.6
 *      B3: so sánh thuNhapChiuThue với bảng thuế
 *      B4: tính tienThue
 *      B5: xuất kết quả
 * 
 * Outputs: tienThue
 */

const DEN_60 = 0.05;
const TU_60_120 = 0.1;
const TREN_120_210 = 0.15;
const TREN_210_384 = 0.2;
const TREN_384_624 = 0.25;
const TREN_624_960 = 0.3;
const TREN_960 = 0.35;

function tinhTienThue(){
    let name = document.getElementById("inputTen").value;
    let thuNhap = Number(document.getElementById("inputThuNhap").value);
    let nguoi = Number(document.getElementById("inputNguoi").value); 

    let thuNhapChiuThue = thuNhap - 4 - nguoi * 1.6;
    let tienThue = tinhThue(thuNhapChiuThue,DEN_60,TU_60_120,TREN_120_210,TREN_210_384,TREN_384_624,TREN_624_960,TREN_960)

    document.getElementById("txtTienThue").innerHTML = `
        Họ Tên: ${name}
        <br>
        Tiền thuế phải trả: ${tienThue} triệu đồng
    `
}

function tinhThue(thuNhapChiuThue,DEN_60,TU_60_120,TREN_120_210,TREN_210_384,TREN_384_624,TREN_624_960,TREN_960) {
    if(0 < thuNhapChiuThue && thuNhapChiuThue <= 60){
        return thuNhapChiuThue * DEN_60
    }
    else if(60 < thuNhapChiuThue && thuNhapChiuThue <= 120){
        return thuNhapChiuThue * TU_60_120
    }
    else if(120 < thuNhapChiuThue && thuNhapChiuThue <= 210){
        return thuNhapChiuThue * TREN_120_210
    }
    else if(210 < thuNhapChiuThue && thuNhapChiuThue <= 384){
        return thuNhapChiuThue * TREN_210_384
    }
    else if(384 < thuNhapChiuThue && thuNhapChiuThue <= 624){
        return thuNhapChiuThue * TREN_384_624
    }
    else if(624 < thuNhapChiuThue && thuNhapChiuThue <= 960){
        return thuNhapChiuThue * TREN_624_960
    }
    else if(thuNhapChiuThue > 960){
        return thuNhapChiuThue * TREN_960
    }
    else{
        alert("nhập lại thông tin")
        return 0;
    }
}
