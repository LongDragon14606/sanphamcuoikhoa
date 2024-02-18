/* Khái niệm : là 1 phong cách lập trình cho phép tổ chức mã nguồn theo cách giúp tăng
+ Tái tổ chức 
+ Bảo trì
+ Cấu trúc hệ thống ở mức độ cao
*/

// I/ Đối tượng (OBJ) : let obj ={}
//trong OOP , mọi thứ đều được coi là 1 đối tượng , gồm thuộc tính và phương thức
let student = {
    name: "random",
    age: 25,
    study: function(){
        console.log("Làm toán");
    }
};
// II/ lớp (class)
// Khái niệm : Là 1 bản thiết kế cho việc tạo đối tượng . Lớp định nghĩa thuộc tính và phương thức
// Cú pháp tạo kiểu dữ liệu với class
class Student {
    //hàm khởi tạo thuộc tính
    constructor(_name, _age,_hobbies,_lover) {
        this.name = _name;
        this.age = _age;
        this.hobbies = _hobbies;
        this.lover = _lover;
    }
}

let John = new Student("John",14, ["Đá cầu"]);
console.log(John.name);
console.log(John.hobbies);

let Huyen = new Student("Huyen",17,["Chụp ảnh"],["Mạnh"]);
console.log(Huyen.hobbies);
console.log(Huyen.lover);

// Áp dụng với KDL phân số 
class PhanSo {
    constructor(_tu,_mau) {
        this.tu = _tu;
        this.mau = _mau;
    }
    // Phương thức
    // 1) Cộng 2 phân số
    /*
    1 + 2
    2   3
    */
    cong(PhanSoKhac) {
        const tuMoi = this.tu*PhanSoKhac.mau + this.mau*PhanSoKhac.tu
        const mauMoi = this.mau*PhanSoKhac.mau
        return new PhanSo(tuMoi,mauMoi)
    }
    tru(PhanSoKhac) {
        const tuMoi = this.tu*PhanSoKhac.mau - this.mau*PhanSoKhac.tu
        const mauMoi = this.mau*PhanSoKhac.mau
        return new PhanSo(tuMoi,mauMoi)
    }
    nhan(PhanSoKhac) {
        const tuMoi = this.tu*PhanSoKhac.tu 
        const mauMoi = this.mau*PhanSoKhac.mau
        return new PhanSo(tuMoi,mauMoi)
    }
    chia(PhanSoKhac) {
        const tuMoi = this.tu*PhanSoKhac.mau 
        const mauMoi = this.mau*PhanSoKhac.tu
        return new PhanSo(tuMoi,mauMoi)
    }
    // Phương thức rút gọn phân số 
    rutgon() {
        const ucln = this.timUCNL(this.tu, this.mau);
        return new PhanSo(this.tu/ucln, this.mau/ucln)
    }
    // Phương thức tìm ước chung lớn nhất (UCLN)
    timUCNL(a,b) {
        if (b == 0) return a;
        return this.timUCNL(b,a%b)
    }
    hienthi(){
        console.log(`${this.tu}/${this.mau}`);
    }
}

let PhanSo1 = new PhanSo(5,6);
let PhanSo2 = new PhanSo(10,5)
let tong = PhanSo1.cong(PhanSo2)
let hieu = PhanSo1.tru(PhanSo2)
let tich = PhanSo1.nhan(PhanSo2)
let thuong = PhanSo1.chia(PhanSo2)
tong.rutgon().hienthi();
hieu.rutgon().hienthi();
tich.rutgon().hienthi();
thuong.rutgon().hienthi()
// Chạy thử phương thức + 2 phân số 