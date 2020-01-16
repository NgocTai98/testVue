<template>
  <div>
    <h1
      style="text-align: center; color: green; text-transform: uppercase"
    >Thêm thông tin của sinh viên</h1>
    <div class="info">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Tên sinh viên" v-model="name" />
        <span>Tuổi:</span>
        <select name id v-model="age" >
          <option v-for="(year, index) in date" :key="index" :value="{year}">{{ year }}</option>
         
        </select>
        <input type="radio" name="sex" v-model="sex" value="male" />
        <span>Male</span>
        <input type="radio" name="sex" v-model="sex" value="female" />
        <span>FeMale</span>
        <input type="text" class="form-control" placeholder="Số điện thoại" v-model="phone" />
        <input type="text" class="form-control" placeholder="Địa chỉ sinh viên" v-model="address" />
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
      id: this.$store.state.students[this.$store.state.students.length -1].idStudent,
      name: "",
      age: 0,
      sex: "",
      phone: '',
      address: "",
      depart: ""
    };
  },
  computed: {
    students(){
      return this.$store.state.students;
    },
    date(){
      return this.$store.state.date;
    }
    
  },
  methods: {
   
    addStudent(){
        this.students.push({
            idStudent: this.id+=1,
            studentName: this.name,
            age: this.age,
            sdt: this.phone,
            sex: this.sex,
            address: this.address,
            class: this.depart
        });
       this.$router.push('/');
       alert("Thêm thành công")
       

    }

  }
};
</script>
<style >
.info {
  width: 500px;
  margin-left: 430px;
}
</style>