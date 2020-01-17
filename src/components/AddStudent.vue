<template>
  <div class="container">
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
          <div>
            <span>Tên sinh viên:</span>
            <input type="text" class="formInput" placeholder="Nguyễn Văn A" v-model="name" />
          </div>

          <div>
            <span>Tuổi:</span>
            <select name id v-model="age" class="age">
              <option v-for="(year, index) in date" :key="index">{{ year }}</option>
            </select>
            <span style="margin-left: 30px">Giới tính:</span>
            <input type="radio" name="sex" v-model="sex" value="nam" />
            <span>Nam</span>
            <input type="radio" name="sex" v-model="sex" value="nữ" />
            <span>Nữ</span>
          </div>

          <div style="margin-top: 5px">
            <span>Số điện thoại:</span>
            <input type="text" class="formInput" placeholder="012345678" v-model="phone" />
          </div>

          <div style="margin-top: 5px">
            <span style="margin-right: 50px;">Địa chỉ:</span>
            <input type="text" class="formInput" placeholder="Hoàn Kiếm Hà Nội" v-model="address" />
          </div>

          <div style="margin-top: 5px">
            <span style="margin-right: 73px;">Lớp:</span>
            <input type="text" class="formInput" placeholder="Kinh tế" v-model="depart" />
          </div>
          <button class="add" @click="addStudent">Lưu</button>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$store.state.students[this.$store.state.students.length - 1]
        .idStudent,
      name: "",
      age: "",
      sex: "",
      phone: "",
      address: "",
      depart: "",
      errors: []
    };
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
    departments() {
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
        }
      }
      if (!loop) {
        alert("Tên lớp không tồn tại");
      } else {
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
.info {
  width: 500px;
  margin-left: 350px;
}
.info p {
  font-weight: bold;
  color: brown;
}
.info span {
  font-weight: bold;
  color: brown;
}
.formInput {
  padding-left: 50px;
  border: 0;
  height: 50px;
  border-radius: 25px;
  width: 300px;
  background-color: #e6e6e6;
}

.add {
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
.age {
  border-radius: 5px;
}
</style>