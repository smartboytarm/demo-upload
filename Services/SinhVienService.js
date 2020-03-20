function QuanLySinhVienService() {
    this.LayDanhSachSinhVien = function() {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
            method: 'GET', //GET POST PUT DELETE
            responseType: 'json' //defautl la json
        })
    }

    this.ThemSinhVien = function(a) {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
            method: 'POST', //GET POST PUT DELETE
            data: a
        })
    }
    this.XoaSinhVien = function(id) {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/' + id,
            method: 'DELETE'
        })
    }
    this.CapNhatThongTinSinhVien = function(sinhvien) {
            return axios({
                url: 'http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien',
                method: 'PUT', //GET POST PUT DELETE
                data: sinhvien
            })
        }
        // dde tranh mat thoi gian nhap ch ouser trong khi backend da bi xoa 
    this.layThongTinSinhVien = function(maSV) {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/' + maSV,
            method: 'GET'
        })
    }
}