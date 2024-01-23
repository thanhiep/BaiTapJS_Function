//? Bài Tập 1

/**
 * Inputs: diemChuan, mon1, mon2, mon3, khuVuc, doiTuong
 * 
 * Process:
 *      B1: lấy dữ liệu từ form
 *      B2: 
 *          Kiểm tra điểm 3 môn:
 *          + Nếu điểm 3 môn đều > 0 => bước tiếp theo:
 *                  Kiểm tra khu vực ưu tiên
 *                  Kiểm tra đối tượng ưu tiên
 *                  Tính tổng điểm
 *                  So sánh với điểm chuẩn
 *          + Nếu điểm 1 trong 3 môn <= 0 => rớt
 *      B3: xuất kết quả: tongDiem, thông báo đậu hay rớt
 * 
 * Outputs: tongDiemCuoi, đậu hay rớt
 */

function quanLyTuyenSinh() {
    let diemChuan = document.getElementById("inputDiemChuan").value;
    let mon1 = Number(document.getElementById("inputMon1").value);
    let mon2 = Number(document.getElementById("inputMon2").value);
    let mon3 = Number(document.getElementById("inputMon3").value);

    let khuA = document.getElementById("khuA")
    let khuB = document.getElementById("khuB")
    let khuC = document.getElementById("khuC")

    let dien1 = document.getElementById("dienMot")
    let dien2 = document.getElementById("dienHai")
    let dien3 = document.getElementById("dienBa")

    if (mon1 > 0 && mon2 > 0 && mon3 > 0) {
        let khuVuc = chonKhuVuc(khuA, khuB, khuC)
        let tongDiem = 0;
        switch (khuVuc) {
            case "khuA":
                tongDiem = mon1 + mon2 + mon3 + 2
                break;
            case "khuB":
                tongDiem = mon1 + mon2 + mon3 + 1
                break;
            case "khuC":
                tongDiem = mon1 + mon2 + mon3 + 0.5
                break;
            default:
                tongDiem = mon1 + mon2 + mon3
                break;
        }

        let doiTuong = chonDoiTuong(dien1, dien2, dien3);
        let tongDiemCuoi = 0;
        switch (doiTuong) {
            case "dien1":
                tongDiemCuoi = tongDiem + 2.5
                break;
            case "dien2":
                tongDiemCuoi = tongDiem + 1.5
                break;
            case "dien3":
                tongDiemCuoi = tongDiem + 1
                break;
            default:
                tongDiemCuoi = tongDiem
                break;
        }
        if (diemChuan > 0) {
            if (tongDiemCuoi >= diemChuan) {
                document.getElementById("txtKetQua").innerHTML = `
                Điểm chuẩn: ${diemChuan}
                <br>
                Tổng điểm thi: ${tongDiemCuoi}
                <br>
                Kết quả: Đậu
                `
            }
            else {
                document.getElementById("txtKetQua").innerHTML = `
                Điểm chuẩn: ${diemChuan}
                <br>
                Tổng điểm thi: ${tongDiemCuoi}
                <br>
                Kết quả: Rớt
                `
            }
        }
        else {
            alert("điểm chuẩn phải lớn hơn 0")
        }
    }
    else {
        document.getElementById("txtKetQua").innerHTML = `
            Tổng điểm thi: điểm liệt
            <br>
            Kết quả: Rớt
            `
    }

}

// khu vực ưu tiên
function chonKhuVuc(khuA, khuB, khuC) {
    if (khuA.checked) {
        return "khuA"
    }
    else if (khuB.checked) {
        return "khuB"
    }
    else if (khuC.checked) {
        return "khuC"
    }
    else {
        return ""
    }
}

// đối tượng ưu tiên
function chonDoiTuong(dien1, dien2, dien3) {
    if (dien1.checked) {
        return "dien1"
    }
    else if (dien2.checked) {
        return "dien2"
    }
    else if (dien3.checked) {
        return "dien3"
    }
    else {
        return ""
    }
}