<template>
  <div class="listuser">
    <div class="row">
      <div class="col-lg-4 col-sm-4">
        <div class="category">
          <h2>Danh sách lớp</h2>
          <ol class="list-group">
            <li
              class="list-group-item"
              v-for="(department, index) in  departments"
              :key="index"
              @click="selectedDepartment = department.name"
            >
              {{ department.name }}
              <button
                type="submit"
                class="del"
                @click="delDepartment(index)"
              >Xóa</button>
              <button type="submit" class="edit" @click="editDepartment(index)">Sửa</button>
            </li>
          </ol>
          <div class="form-group adds">
            <input
              type="text"
              v-model="newDepart"
              class="form-control"
              placeholder="Thêm một lớp mới"
            />
            <button class="create" @click="addDepartment">Thêm</button>
          </div>
        </div>
      </div>

      <div class="col-lg-8 col-sm-8">
        <div class="list">
          <h2>Danh sách sinh viên trong lớp</h2>
          <h4
            style="color: #9e0a0a; text-align: center; text-transform: uppercase"
          >{{ selectedDepartment }}</h4>
          <div class="content">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Tên sinh viên</th>
                  <th scope="col">Tuổi</th>
                  <th scope="col">Giới tính</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Lớp</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(student, index) in students"
                  :key="index"
                  v-show="student.class == selectedDepartment"
                >
                  <td>{{student.idStudent}}</td>
                  <td>{{ student.studentName }}</td>
                  <td>{{ student.age }}</td>
                  <td>{{ student.sex }}</td>
                  <td>{{ student.sdt }}</td>
                  <td>{{ student.address }}</td>
                  <td>{{ student.class }}</td>
                  <td>
                    <button type="submit" class="del" @click="delStudent(index)">Xóa</button>
                    <button type="submit" class="edit">
                      <router-link :to="`/editStudent/${student.idStudent}`">Sửa</router-link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <router-link to="/addStudent">
              <button
                class="create"
                style="float: right; margin-top: 10px"
              >Thêm sinh viên mới</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view ></router-view> -->
  </div>
</template>
 
<script>
export default {
  name: "listUser",
  data() {
    return {
      newDepart: "",
      newclass: "",
      selectedDepartment: this.$store.state.departments[0].name,
      seen: false
    };
  },
  computed: {
    departments() {
      return this.$store.state.departments;
    },
    students() {
      return this.$store.state.students;
    }
  },

  methods: {
    addDepartment() {
      for (let i = 0; i < this.departments.length; i++) {
        if (this.departments[i].name == this.newDepart) {
          var loop = true;
          break;
        }
      }
      if (loop) {
        alert("Tên lớp không thể trùng. Hãy nhập tên khác");
      } else {
        if (this.newDepart) {
          this.departments.push({
          idDepart: this.idDepart++,
          name: this.newDepart,
          edit: false
        });
        this.newDepart = "";
        } else {
          alert('Tên lớp không được để trống');
        }
      }
    },

    editDepartment(id) {
      this.newclass = prompt("Sửa tên lớp : " + this.departments[id].name);
      if (this.newclass) {
        for (let i = 0; i < this.students.length; i++) {
          if (this.students[i].class == this.departments[id].name) {
            this.students[i].class = this.newclass;
          }
        }
        this.departments[id].name = this.newclass;
      }
    },

    delDepartment(id) {
      if (
        confirm("Bạn có chắc chắn muốn xóa lớp " + this.departments[id].name)
      ) {
        this.departments.splice(id, 1);
      }
    },

    delStudent(id) {
      if (
        confirm(
          "Bạn có chắc chắn muốn xóa sinh viên " + this.students[id].studentName
        )
      ) {
        this.students.splice(id, 1);
      }
    },
    view() {}
  }
};
</script>
<style>
.content {
  background-color: #ffff;
}
.listuser {
  background-color: #cbcfd2;
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
  margin-left: 3px;
  border-radius: 5px;
  background-color: rgb(245, 38, 86);
  font-weight: bold;

  float: right;
}

#app .content .edit {
  border-radius: 5px;
  background-color: greenyellow;
  margin-left: 3px;
  font-weight: bold;
  
  float: right;
}
#app .category .edit {
  margin-left: 3px;
  font-weight: bold;
  border-radius: 5px;
  background-color: greenyellow;

  float: right;
}
#app .category {
  margin: 20px;
}
#app .category .del {
  margin-left: 3px;
  border-radius: 5px;
  background-color: rgb(245, 38, 86);

  font-weight: bold;
}
#app .category .adds {
  margin-top: 10px;
}
#app .category button {
  float: right;
  margin-top: 10px;
}
.create {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background-color: #846add;
  margin-top: 10px;
  float: right;
  border: 0;
}
</style>