var sinhVienService = new QuanLySinhVienService();

var renderTableSinhVien = function(result) {
    console.log(result)
    var noidung = '';
    // '{sinhVien.MaSV}' la ra quan trong
    for (var i = 0; i < result.data.length; i++) {
        sinhVien = result.data[i];
        noidung += `<tr>
            <td>${sinhVien.MaSV}</td>
            <td>${sinhVien.HoTen}</td>
            <td>${sinhVien.Email}</td>
            <td>${sinhVien.SoDT}</td>
            <td>${sinhVien.CMND}</td>
            <td>${sinhVien.DiemToan}</td>
            <td>${sinhVien.DiemLy}</td>
            <td>${sinhVien.DiemHoa}</td>
            <td>${(sinhVien.DiemHoa + sinhVien.DiemHoa + sinhVien.DiemLy)/3}</td>
            <td style="display: inline-block">
            
                <button class="btn btn-success btnSua" onclick="Sua('${sinhVien.MaSV}')">Sua</button>
                <button class="btn btn-danger btnXoa" onclick="Xoa('${sinhVien.MaSV}')">Xoa</button>
            </td>
        </tr>`
    }
    document.querySelector('#tblDanhSachNguoiDung').innerHTML = noidung;
}
var Them = function() {
    var MaSV = document.querySelector('#masinhvien').value;
    var HoTen = document.querySelector('#hoten').value;
    var Email = document.querySelector('#email').value;
    var CMND = document.querySelector('#CMND').value;
    var DiemToan = document.querySelector('#diemToan').value;
    var DiemLy = document.querySelector('#diemly').value;
    var DiemHoa = document.querySelector('#diemhoa').value;
    var SoDT = document.querySelector('#sdt').value;

    var sv = new ISinhVien(MaSV, HoTen, Email, SoDT, CMND, DiemToan, DiemLy, DiemHoa);

    console.log(sv)
    sinhVienService.ThemSinhVien(sv).then(
        function(result) {
            console.log('Thanh Cong')
            location.reload()
        }
    ).catch(function(err) {
        console.log(err)
    });


}
var Xoa = function(MaSV) {
    // debugger
    var cfDialog = confirm(`ban co muon xoa sinh vien ${MaSV}?`);
    if (cfDialog === true) {
        sinhVienService.XoaSinhVien(MaSV).then(function(result) {
            location.reload()
        }).catch(function(err) {
            alert('thatbai')
        })
    }
}
var Sua = function(MaSV) {
    // debugger
    console.log(MaSV)
    document.querySelector('#AddSinhVien').click();
    document.querySelector('.modal-title').innerHTML = 'Cap Nhat Thong TIn Sinh Vien';
    document.querySelector('.modal-footer').innerHTML = `<button class="btn btn-primary btnCapNhat" onclick='CapNhatSinhVien()'>Luu</button>`;
    sinhVienService.layThongTinSinhVien(MaSV).then(function(res) {

        console.log(res.data)

        domSinhVien('#masinhvien').value = res.data.MaSV;
        domSinhVien('#hoten').value = res.data.HoTen;
        domSinhVien('#email').value = res.data.Email;
        domSinhVien('#CMND').value = res.data.CMND;
        domSinhVien('#diemToan').value = res.data.DiemToan;
        domSinhVien('#diemly').value = res.data.DiemLy;
        domSinhVien('#diemhoa').value = res.data.DiemHoa;
        domSinhVien('#sdt').value = res.data.SoDT;
    }).catch(function(err) {
        alert('error')
    });

}
var promiseSinhVien = sinhVienService.LayDanhSachSinhVien();
promiseSinhVien.then(renderTableSinhVien).catch(function(err) {
    console.log(err)
});
//Cai dat nut them sinhvien
document.querySelector('#AddSinhVien').onclick = function() {
        document.querySelector('.modal-title').innerHTML = 'Them Sinh Vien';
        document.querySelector('.modal-footer').innerHTML = `
        <button class='btn btn-primary btnTaoMoiSinhVien' onclick='Them()'>Tao moi sinh vien</button>
    `;
    }
    // document.querySelector('.btnTaoMoiSinhVien').onclick = function() {
    //     alert(1)
    // }
var domSinhVien = function(param) {
    return document.querySelector(param)
}
CapNhatSinhVien = function() {
    // alert(1)
    var MaSV = document.querySelector('#masinhvien').value;
    var HoTen = document.querySelector('#hoten').value;
    var Email = document.querySelector('#email').value;
    var CMND = document.querySelector('#CMND').value;
    var DiemToan = document.querySelector('#diemToan').value;
    var DiemLy = document.querySelector('#diemly').value;
    var DiemHoa = document.querySelector('#diemhoa').value;
    var SoDT = document.querySelector('#sdt').value;


    // console.log(svUpdate);
    var svUpdate = new ISinhVien(MaSV, HoTen, Email, SoDT, CMND, DiemToan, DiemLy, DiemHoa);
    sinhVienService.CapNhatThongTinSinhVien(svUpdate).then(function(res) {
        console.log(res);
        location.reload()
    }).catch(function(err) {
        console.log(err)
    })
}