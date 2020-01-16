<template>
  <div>
    <h1
      style="text-align: center; color: green; text-transform: uppercase"
    >Sửa thông tin của sinh viên: {{ name }}</h1>
    <div class="info">
      <div class="form-group">
        <input type="text" class="form-control" :placeholder="name"  v-model="newName"/>
        <span>Tuổi:</span>
        <select v-model="newYear">
          <option v-for="(year,index) in date" :key="index" :value="{Year}">{{ year }}</option>
          
        </select>
        <div v-if="sex == 'male'">
          <input type="radio" name="sex"  v-model="newSex" checked/>
          <span>Male</span>
          <input type="radio" name="sex" v-model="newSex"/>
          <span>FeMale</span>
        </div>
        <div v-else>
          <input type="radio" name="sex" v-model="newSex" />
          <span>Male</span>
          <input type="radio" name="sex" v-model="newSex" checked />
          <span>FeMale</span>
        </div>

        <input type="text" class="form-control" :placeholder="phone" v-model="newPhone"  />
        
        <input type="text" class="form-control" :placeholder="address" v-model="newAddress"  />
        <input type="text" class="form-control" :placeholder="depart" v-model="newDepart"  />
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
      age: 0,
      sex: "",
      phone: '',
      address: "",
      depart: "",
      newName: '',
      newYear: 0,
      newSex: '',
      newPhone: '',
      newAddress: '',
      newDepart: '',
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
  watch: {
    
  },
  computed: {
    students() {
     this.$store.state.students;
    },
    date(){
       this.$store.state.date;
    },
   
  },
   
  methods: {
      editStudent(id){
          this.$store.state.students[id - 1].studentName = this.newName;
          this.$store.state.students[id - 1].age  = this.newYear;
          this.$store.state.students[id - 1].sex = this.newSex;
          this.$store.state.students[id - 1].sdt = this.newPhone;
          this.$store.state.students[id - 1].address = this.newAddress;
          this.$store.state.students[id - 1].class = this.newDepart;
          this.$router.push('/');
          alert('Đã sửa thành công');
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