<template>
  <div class="adduser">
    <h1
      style="text-align: center; color: green; text-transform: uppercase"
    >Thêm thông tin của sinh viên</h1>
    <div v-if="errors.length">
      <div class="alert alert-danger" role="alert" v-for="(error, index) in errors" :key="index">
        <strong>{{ error }}</strong>
      </div>
    </div>
    <div class="info">
      <div class="form-group">
        <p>Tên sinh viên:</p>
        <input type="text" class="form-control" placeholder="Tên sinh viên" v-model="name" />
        <span>Tuổi:</span>
        <select name id v-model="age">
          <option v-for="(year, index) in date" :key="index" :value="{year}">{{ year }}</option>
        </select>
        <span>Giới tính:</span>
        <input type="radio" name="sex" v-model="sex" value="male" />
        <span>Male</span>
        <input type="radio" name="sex" v-model="sex" value="female" />
        <span>FeMale</span>
        <p>Số điện thoại:</p>
        <input type="text" class="form-control" placeholder="Số điện thoại" v-model="phone" />
        <p>Địa chỉ:</p>
        <input type="text" class="form-control" placeholder="Địa chỉ sinh viên" v-model="address" />
        <p>Lớp:</p>
        <input type="text" class="form-control" placeholder="Sinh viên lớp" v-model="depart" />
        <button class="btn btn-primary" @click="addStudent">Lưu</button>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$store.state.students[this.$store.state.students.length - 1].idStudent,
      name: "",
      age: "",
      sex: "",
      phone: "",
      address: "",
      depart: "",
      errors: [],
      
    };
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
    departments(){
      return this.$store.state.departments;
    },
    date() {
      return this.$store.state.date;
    }
  },
  methods: {
    addStudent() {
     
      for (let i = 0; i < this.departments.length; i++) {
        if (this.departments[i].name == this.depart) {
              var loop = true;
             console.log(this.departments[i].name)
        }
       
      }
      if (!loop) {
        alert("Tên lớp không tồn tại");
      } 
      else{
        if (
            this.name &&
            this.age &&
            this.sex &&
            this.phone &&
            this.address &&
            this.depart
          ) {
            this.students.push({
              idStudent: (this.id += 1),
              studentName: this.name,
              age: this.age,
              sdt: this.phone,
              sex: this.sex,
              address: this.address,
              class: this.depart
            });
            this.$router.push("/");
            alert("Thêm thành công");
          } else {
            if (!this.name) {
              this.errors.push("Tên Không được để trống");
            }
            if (!this.age) {
              this.errors.push("Tuổi Không được để trống");
            }
            if (!this.sex) {
              this.errors.push("Giới tính Không được để trống");
            }
            if (!this.phone) {
              this.errors.push("SDT Không được để trống");
            }
            if (!this.address) {
              this.errors.push("Địa chỉ Không được để trống");
            }
            if (!this.depart) {
              this.errors.push("Tên lớp Không được để trống");
            }
          }
      }
     
    }
  }
};
</script>
<style >
.adduser {
  background-color: #a5acb3;
}
.info {
  width: 500px;
  margin-left: 400px;
}
.info p {
  font-weight: bold;
  color: brown;
}
.info span {
  font-weight: bold;
  color: brown;
}
</style>