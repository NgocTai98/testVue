<template>
  <div class="listuser">
    <div class="row">
      <div class="col-lg-4">
        <div class="category">
          <h2>Danh sách lớp</h2>
          <ol class="list-group">
            <li class="list-group-item" v-for="(department, index) in departments" :key="index">
              <div v-show="department.edit == false">
                <span @dblclick="editDepartment(department.idDepart)">{{ department.name }}</span>
                <button type="submit" class="del" @click="delDepartment(index)">Xóa</button>
              </div>

              <input
                class="form-control"
                v-show="department.edit == true"
                ref="Edit"
                v-model="department.name"
                v-on:blur="department.edit=false; $emit('update')"
                @keyup.enter="department.edit=false; $emit('update')"
              />
            </li>
          </ol>
          <div class="form-group add">
            <input
              type="text"
              v-model="newDepart"
              class="form-control"
              placeholder="Thêm một lớp mới"
            />
            <button class="btn btn-primary" @click="addDepartment">Thêm</button>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="list">
          <h2>Danh sách sinh viên trong lớp</h2>
          <div class="content">
            <ol class="list-group">
              <li class="list-group-item" v-for="(student,index) in students" :key="index">
                {{ student.studentName }}
                <button
                  type="submit"
                  class="del"
                  @click="delStudent(index)"
                >Xóa</button>
                <button type="submit" class="edit">
                  <router-link router to="editStudent">Sửa</router-link>
                </button>
              </li>
            </ol>
            <router-link to="addStudent">
              <button
                class="btn btn-primary"
                style="float: right; margin-top: 10px"
              >Thêm sinh viên mới</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "listUser",
  data() {
    return {
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
      newDepart: "",
      students: [
        {
          idStudent: 1,
          studentName: "Nguyễn Văn A",
          age: 19,
          sdt: 234545787,
          sex: "male",
          address: "Cầu Giấy - Hà Nội",
          class: "Công nghệ thông tin 1"
        },
        {
          idStudent: 2,
          studentName: "Trần Thị B",
          age: 19,
          sdt: 2345668787,
          sex: "female",
          address: "Đống Đa - Hà Nội",
          class: "Công nghệ thông tin 2"
        },
        {
          idStudent: 3,
          studentName: "Đinh Bá C",
          age: 19,
          sdt: 987654322,
          sex: "male",
          address: "Cầu Giấy - Hà Nội",
          class: "Công nghệ thông tin 1"
        },
        {
          idStudent: 4,
          studentName: "Hoàng Khánh D",
          age: 19,
          sdt: 234567687,
          sex: "female",
          address: "Long Biên - Hà Nội",
          class: "Công nghệ thông tin 3"
        }
      ]
    };
  },
  methods: {
    addDepartment() {
      this.departments.push({
        idDepart: this.idDepart++,
        name: this.newDepart,
        edit: false
      });
      this.newDepart = "";
    },
    delDepartment(id) {
      if (
        confirm("Bạn có chắc chắn muốn xóa lớp " + this.departments[id].name)
      ) {
        this.departments.splice(id, 1);
      }
    },
    editDepartment(id) {
      for (let i = 0; i < this.departments.length; i++) {
        if (this.departments[i].idDepart == id) {
          this.departments[i].edit = true;
        }
      }
      // this.$refs.Edit.focus();
    },
    delStudent(id) {
      if (
        confirm(
          "Bạn có chắc chắn muốn xóa sinh viên " + this.students[id].studentName
        )
      ) {
        this.students.splice(id, 1);
      }
    }
  }
};
</script>
<style>
#app {
  background-color: #b1aeae;
}
#app h2 {
  text-align: center;
  text-transform: uppercase;
  color: green;
  font-weight: bold;
}
#app .list {
  margin: 20px;
}

#app .content .del {
  background: none;
  color: red;
  font-weight: bold;
  border: 0;
  float: right;
}
#app .content .edit {
  background: none;

  font-weight: bold;
  border: 0;
  float: right;
}
#app .category {
  margin: 20px;
}
#app .category .del {
  background: none;
  color: red;
  font-weight: bold;
  border: 0;
}
#app .category .add {
  margin-top: 10px;
}
#app .category button {
  float: right;
  margin-top: 10px;
}
</style>