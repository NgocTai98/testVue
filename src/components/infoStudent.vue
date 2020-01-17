<template>
  <div class="container">
    <div class="student">
      <h2>Thông tin của sinh viên : {{ name }}</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Tên sinh viên</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Lớp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $route.params.idStudent }}</td>
            <td>{{ name }}</td>
            <td>{{ age }}</td>
            <td>{{ sex }}</td>
            <td>{{ phone }}</td>
            <td>{{ address }}</td>
            <td>{{ depart }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" @click="edit" style="float: right">Sửa</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      sex: "",
      phone: "",
      address: "",
      depart: ""
    };
  },
  created() {
    for (let i = 0; i < this.$store.state.students.length; i++) {
      if (
        this.$store.state.students[i].idStudent == this.$route.params.idStudent
      ) {
        this.name = this.$store.state.students[i].studentName;
        this.age = this.$store.state.students[i].age;
        this.sex = this.$store.state.students[i].sex;
        this.phone = this.$store.state.students[i].sdt;
        this.address = this.$store.state.students[i].address;
        this.depart = this.$store.state.students[i].class;
      }
    }
  },
  computed: {
    students() {
      this.$store.state.students;
    }
  },
  methods: {
      edit(){
          this.$router.push('/editStudent/'+this.$route.params.idStudent);
      }
  },
};
</script>
<style>
.student {
  background-color: #f8f9fa;
}
</style>