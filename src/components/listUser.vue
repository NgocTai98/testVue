<template>
  <div class="listuser">
    <div class="row">
      <div class="col-lg-4">
        <div class="category">
          <h2>Danh sách lớp</h2>
          <ol class="list-group">
            <li class="list-group-item" v-for="(department, index) in  departments" :key="index" @click="selectedDepartment = department.name">
              {{ department.name }}                
                <button type="submit" class="del" @click="delDepartment(index)">Xóa</button>
                <button type="submit" class="edit" @click="editDepartment(index)">Sửa</button>
             
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
          <h4 style="color: #9e0a0a; text-align: center; text-transform: uppercase"> {{ selectedDepartment }} </h4>
          <div class="content">
            <ol class="list-group">
              <li class="list-group-item" v-for="(student,index) in students" :key="index" v-show="student.class == selectedDepartment">
                <span>{{ student.studentName }}</span>
               
                <button
                  type="submit"
                  class="del"
                  @click="delStudent(index)"
                >Xóa</button>
                <button type="submit" class="edit">
                  <router-link :to="`/editStudent/${student.idStudent}`">Sửa</router-link>
                </button>
              </li>
            </ol>
            <router-link to="/addStudent" >
              <button
                class="btn btn-primary"
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
      newclass: '',
      selectedDepartment: 'Công nghệ thông tin 1'
    };
  },
  computed: {
    departments(){
      return this.$store.state.departments;
    },
    students(){
      return this.$store.state.students;
    }
  },
  
  methods: {
    addDepartment() {
      this.departments.push({
        idDepart: this.idDepart++,
        name: this.newDepart,
        edit: false,
      });
      this.newDepart = "";
    },
    editDepartment(id){
      this.newclass = prompt('Sửa tên lớp : ' + this.departments[id].name);
      if (this.newclass) {
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
   
  },
  
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
#app .category .edit {
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