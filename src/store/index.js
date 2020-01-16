import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        departments: [
            {
              idDepart: 1,
              name: "Công nghệ thông tin 1",
              edit: false
            },
            {
              idDepart: 2,
              name: "Công nghệ thông tin 2",
              edit: false
            },
            {
              idDepart: 3,
              name: "Công nghệ thông tin 3",
              edit: false
            }
          ],
          
          students: [
            {
              idStudent: 1,
              studentName: "Nguyễn Văn A",
              age: 19,
              sdt: "234545787",
              sex: "male",
              address: "Cầu Giấy - Hà Nội",
              class: "Công nghệ thông tin 1"
            },
            {
              idStudent: 2,
              studentName: "Trần Thị B",
              age: 19,
              sdt: "2345668787",
              sex: "female",
              address: "Đống Đa - Hà Nội",
              class: "Công nghệ thông tin 2"
            },
            {
              idStudent: 3,
              studentName: "Đinh Bá C",
              age: 19,
              sdt: "987654322",
              sex: "male",
              address: "Cầu Giấy - Hà Nội",
              class: "Công nghệ thông tin 1"
            },
            {
              idStudent: 4,
              studentName: "Hoàng Khánh D",
              age: 19,
              sdt: "234567687",
              sex: "female",
              address: "Long Biên - Hà Nội",
              class: "Công nghệ thông tin 3"
            },{
              idStudent: 5,
              studentName: "Đinh Hữu E",
              age: 21,
              sdt: "896832",
              sex: "male",
              address: "Vĩnh Bảo - Hải Phòng",
              class: "Công nghệ thông tin 1"
            },
            {
              idStudent: 6,
              studentName: "Lưu Tiến F",
              age: 20,
              sdt: "5467889",
              sex: "female",
              address: "Chương Mỹ - Hưng Yên",
              class: "Công nghệ thông tin 1"
            }
          ],

          date: [18,19,20,21,22],
          
    }
});