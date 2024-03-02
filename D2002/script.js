function kiemTraSo() {
    var inputValue = document.getElementById('inputNumber').value.trim();

    if (inputValue === '') {
        document.getElementById('ketQua').innerHTML = 'Số cần kiểm tra không được để trống.';
    } else {
        var soNhap = parseInt(inputValue);

        if (isNaN(soNhap)) {
            document.getElementById('ketQua').innerHTML = 'Vui lòng nhập một số hợp lệ.';
        } else {
            var ketQua = (soNhap % 2 === 0) ? 'Số ' + soNhap + ' là số chẵn.' : 'Số ' + soNhap + ' là số lẻ.';
            document.getElementById('ketQua').innerHTML = ketQua;
        }
    }
}