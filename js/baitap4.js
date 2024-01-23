//? Bài Tập 4

/**
 * Inputs: maKH, loaiKH, soKenh, soKetNoi, bảng giá
 * 
 * Process:
 *      B1: lấy dữ liệu từ form
 *      B2: kiểm tra loaiKH
 *      B3: tính theo công thức
 *      B4: xuất kết quả
 * 
 * Outputs: tienCap
 */

const NHA_HD = 4.5
const NHA_DV = 20.5
const NHA_KENH = 7.5

const DN_HD = 15
const DN_KENH = 50
const DN_KETNOI_10_TONG = 75
const DN_KETNOI_HON_10 = 5

let doanhNghiep = document.getElementById("inputDoanhNghiep")
let caNhan = document.getElementById("inputCaNhan")

doanhNghiep.addEventListener('change', function () {
    if (doanhNghiep.checked) {
        document.getElementById("inputKetNoi").removeAttribute('disabled');
    } 
});

caNhan.addEventListener('change', function () {
    if (caNhan.checked) {
        document.getElementById("inputKetNoi").setAttribute('disabled', 'true');
    }
});


function tinhTienCap() {
    let maKH = document.getElementById("inputKH").value;
    let soKenh = Number(document.getElementById("inputKenh").value);
    let soKetNoi = Number(document.getElementById("inputKetNoi").value);
    let loaiKH = kiemTraLoaiKH(caNhan, doanhNghiep);


    let tienCap = 0;
    switch (loaiKH) {
        case "Home":
            tienCap = tienCapNha(soKenh,NHA_HD,NHA_DV,NHA_KENH)
            break;

        case "DN":
            tienCap = tienCapDN(soKetNoi,soKenh,DN_HD,DN_KENH,DN_KETNOI_10_TONG,DN_KETNOI_HON_10)
            break;

        default:
            alert("nhập lại thông tin")
            break;
    }

    document.getElementById("txtTienCap").innerHTML = `
        Mã khách hàng: ${maKH}
        <br>
        Loại khách hàng: ${loaiKH}
        <br>
        Tổng tiền cáp: <sup>$</sup>${tienCap}
    `
}


//kiểm tra loại KH
function kiemTraLoaiKH(caNhan, doanhNghiep) {
    if (caNhan.checked) {
        return "Home"
    }
    else if (doanhNghiep.checked) {
        return "DN"
    }
    else {
        alert("Chưa chọn loại khách hàng")
        return ""
    }
}

//tính tiền nhà dân
function tienCapNha(soKenh,NHA_HD,NHA_DV,NHA_KENH) {
    if(soKenh > 0){
        return NHA_HD + NHA_DV + soKenh * NHA_KENH
    }
    else{
        alert("nhập lại số kênh")
        return 0;
    }
}

//tính tiền cáp doanh nghiệp
function tienCapDN(soKetNoi,soKenh,DN_HD,DN_KENH,DN_KETNOI_10_TONG,DN_KETNOI_HON_10){
    if(0 <= soKetNoi && soKetNoi <= 10 && soKenh > 0){
        return DN_HD + DN_KENH * soKenh + DN_KETNOI_10_TONG / 10 * soKetNoi
    }
    else if(soKetNoi > 10 && soKenh > 0){
        return DN_HD + DN_KENH * soKenh + DN_KETNOI_10_TONG + (soKetNoi - 10) * DN_KETNOI_HON_10
    }
    else{
        alert("nhập lại số kênh hoặc số kết nối")
        return 0;
    }
}