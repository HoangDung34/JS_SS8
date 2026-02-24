const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];

let choose;
do{
    choose = +prompt(` Nhập lựa chọn:
        1.Xem danh sách cầu thủ
        2.Tìm kiếm
        3.Lọc vị trí
        4.Tổng bàn thắng
        5.Kiểm tra hiệu suất
        0.Thoát chương trình
        `);
    switch(choose){
        case 0:
            console.log("thoát chương trình");
            break;
        case 1:
            show();
            break;
        case 2:
            console.log("Tìm kiếm cầu thủ");
            
            break;
        default:
            break;
    }
}while(choose != 0)

// Hiển thị thị danh sách cầu thủ
function show(){
    squad.forEach((Value, index) => {
        console.log(` Tên cầu thủ : ${value[0]} viij trí: ${value[2]} bàn thắng: ${value[1]}`);
        
    });
}

// Hàm tìm kiếm cầu thủ
function findPlayer(){
    let name = prompt("Nhập tên cầu thủ");
    let result = squad.find(vlaue)
}