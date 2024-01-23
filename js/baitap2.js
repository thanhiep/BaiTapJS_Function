//? Bài Tập 2

/**
 * Inputs: name, kw, bảng giá theo kw
 * 
 * Process: 
 *      B1: lấy dữ liệu từ form
 *      B2: kiểm tra số kw nhập vào
 *      B3: tính tiền điện theo bảng giá
 *      B4: xuất kết quả
 * 
 * Outputs: tienDien
 */

const DAU_50 = 500;
const KW_51_100 = 650;
const KW_101_200 = 850;
const KW_201_350 = 1100;
const KW_351_TRO_LEN = 1300;

function tinhTienDien() {
    let name = document.getElementById("inputName").value;
    let kw = Number(document.getElementById("inputKW").value);

    let tienDien = 0;
    if(0 < kw && kw <= 50){
        tienDien = DAU_50 * kw;
    }
    else if(50 < kw && kw <= 100){
        tienDien = DAU_50 * 50 + KW_51_100 * (kw - 50)
    }
    else if(100 < kw && kw <= 200){
        tienDien = DAU_50 * 50 + KW_51_100 * 50 + KW_101_200 * (kw - 100)
    }
    else if(200 < kw && kw <= 350){
        tienDien = DAU_50 * 50 + KW_51_100 * 50 + KW_101_200 * 100 + KW_201_350 * (kw - 200)
    }
    else if(kw > 350){
        tienDien = DAU_50 * 50 + KW_51_100 * 50 + KW_101_200 * 100 + KW_201_350 * 150 + KW_351_TRO_LEN * (kw - 350)
    }
    else{
        alert("Số kW nhập vào phải lớn hơn 0")
    }

    document.getElementById("txtTienDien").innerHTML = `
        Khách hàng: ${name}
        <br>
        Tổng tiền điện: ${tienDien.toLocaleString()} VNĐ
    `
}
