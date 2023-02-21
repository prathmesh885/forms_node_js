const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/prathmesh";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connections Succussful");
  })
  .catch((err) => {
    console.log("No connection");
  });

// Links =>

// getData() {
//   let url = "http://localhost:1111/prod/show";
//   return this.http.get(url);
// }

// addproduct(user: any) {
//   let url = "http://localhost:1111/prod/product/";
//   return this.http.post(url, user)
// }

// updateData(obj) {
//   let url = `http://localhost:1111/prod/update/${obj._id}`;
//   return this.http.patch(url, obj);
// }

// deleteData(id) {
//   let url = `http://localhost:1111/prod/delete/${id}`
//   return this.http.delete(url);
// }





