<template>
  <div class="edituser">
    <h1
      style="text-align: center; color: green; text-transform: uppercase"
    >Sửa thông tin của sinh viên: {{ name }}</h1>
    <div v-if="errors.length">
      <div class="alert alert-danger" role="alert" v-for="(error, index) in errors" :key="index">
        <strong>{{ error }}</strong>
      </div>
    </div>
    <div class="info">
      <div class="form-group">
        <div>
            <span>Tên sinh viên:</span>
            <input type="text" class="formInput" :placeholder="name" v-model="newName" />
          </div>
        <div>
            <span>Tuổi:</span>
            <select name id v-model="newYear" class="age">
              <option v-for="(year, index) in date" :key="index">{{ year }}</option>
            </select>
            <span style="margin-left: 30px">Giới tính:</span>
            <input type="radio" name="sex" v-model="newSex" value="nam" />
            <span>Nam</span>
            <input type="radio" name="sex" v-model="newSex" value="nữ" />
            <span>Nữ</span>
          </div>

          <div style="margin-top: 5px">
            <span>Số điện thoại:</span>
            <input type="text" class="formInput" :placeholder="phone" v-model="newPhone" />
          </div>

          <div style="margin-top: 5px">
            <span style="margin-right: 50px;">Địa chỉ:</span>
            <input type="text" class="formInput" :placeholder="address" v-model="newAddress" />
          </div>

          <div style="margin-top: 5px">
            <span style="margin-right: 73px;">Lớp:</span>
            <input type="text" class="formInput" :placeholder="depart" v-model="newDepart" />
          </div>
        <button class="editStu" @click="editStudent(id)">Lưu</button>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      id: this.$route.params.idStudent,
      name: "",
      age: "",
      sex: "",
      phone: "",
      address: "",
      depart: "",
      newName: "",
      newYear: "",
      newSex: "",
      newPhone: "",
      newAddress: "",
      newDepart: "",
      errors: []
    };
  },

  created() {
    for (let i = 0; i < this.$store.state.students.length; i++) {
      if (this.$store.state.students[i].idStudent == this.id) {
        this.name = this.$store.state.students[i].studentName;
        this.age = this.$store.state.students[i].age;
        this.sex = this.$store.state.students[i].sex;
        this.phone = this.$store.state.students[i].sdt;
        this.address = this.$store.state.students[i].address;
        this.depart = this.$store.state.students[i].class;
      }
    }
  },
  watch: {},
  computed: {
    students() {
      return this.$store.state.students;
    },
    date() {
      return this.$store.state.date;
    },
    departments() {
      return this.$store.state.departments;
    }
  },

  methods: {
    editStudent(id) {
      for (let i = 0; i < this.departments.length; i++) {
        if (this.departments[i].name == this.newDepart) {
          var loop = true;
        }
      }
      if (!loop) {
        alert("Tên lớp không tồn tại");
      } else {
        if (
          this.newName &&
          this.newYear &&
          this.newSex &&
          this.newPhone &&
          this.newAddress &&
          this.newDepart
        ) {
          this.$store.state.students[id - 1].studentName = this.newName;
          this.$store.state.students[id - 1].age = this.newYear;
          this.$store.state.students[id - 1].sex = this.newSex;
          this.$store.state.students[id - 1].sdt = this.newPhone;
          this.$store.state.students[id - 1].address = this.newAddress;
          this.$store.state.students[id - 1].class = this.newDepart;
          this.$router.push("/");
          alert("Đã sửa thành công");
        } else {
          if (!this.newName) {
            this.errors.push("Tên Không được để trống");
          }
          if (!this.newYear) {
            this.errors.push("Tuổi Không được để trống");
          }
          if (!this.newSex) {
            this.errors.push("Giới tính Không được để trống");
          }
          if (!this.newPhone) {
            this.errors.push("SDT Không được để trống");
          }
          if (!this.newAddress) {
            this.errors.push("Địa chỉ Không được để trống");
          }
          if (!this.newDepart) {
            this.errors.push("Tên lớp Không được để trống");
          }
        }
      }
    }
  }
};
</script>
<style >

.info {
  width: 500px;
  margin-left: 430px;
}
.editStu {
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: #846add;
  margin-top: 10px;
  margin-left: 200px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
}
.formInput {
  padding-left: 50px;
  border: 0;
  height: 50px;
  border-radius: 25px;
  width: 300px;
  background-color: #e6e6e6;
}
.age {
  border-radius: 5px;
}
</style>