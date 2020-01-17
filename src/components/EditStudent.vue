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
        <p>Tên sinh viên:</p>
        <input type="text" class="form-control" :placeholder="name" v-model="newName" />
        <span>Tuổi:</span>
        <select v-model="newYear">
          <option v-for="(year,index) in date" :key="index" :value="{Year}">{{ year }}</option>
        </select>

        <span v-if="sex == 'male'">
          <input type="radio" name="sex" value="male" v-model="newSex" />
          <span>Male</span>
          <input type="radio" name="sex" value="female" v-model="newSex" />
          <span>FeMale</span>
        </span>
        <span v-if="sex == 'female'">
          <input type="radio" name="sex" value="male" v-model="newSex" />
          <span>Male</span>
          <input type="radio" name="sex" value="female" v-model="newSex" />
          <span>FeMale</span>
        </span>

        <p>Số điện thoai:</p>
        <input type="text" class="form-control" :placeholder="phone" v-model="newPhone" />

        <p>Địa chỉ</p>
        <input type="text" class="form-control" :placeholder="address" v-model="newAddress" />
        <p>Lớp:</p>
        <input type="text" class="form-control" :placeholder="depart" v-model="newDepart" />
        <button class="btn btn-primary" @click="editStudent(id)">Lưu</button>
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
      this.$store.state.students;
    },
    date() {
      this.$store.state.date;
    }
  },

  methods: {
    editStudent(id) {
      if (
        this.newName &&
        this.newAge &&
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
        if (!this.newAge) {
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
};
</script>
<style >
.edituser{
  background-color: #a5acb3;
}
.info {
  width: 500px;
  margin-left: 430px;
}
</style>