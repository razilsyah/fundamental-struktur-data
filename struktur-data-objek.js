var obj = {
    namaBuah : ["apel","mangga"],
    jumlahBuah : 1,
    boolean : true
}
//untuk mengeksekusi obj agar di tampilkan
console.log(obj["namaBuah"])
console.log (obj.namaBuah)

//untuk mencari value dari objek
let values = Object.values(obj)
console.log(values)

//untuk memunculkan keys pada objek
let keys = Object.keys(obj)
console.log(keys)