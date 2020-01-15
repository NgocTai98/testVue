<template>
    <div>
        <h1 style="text-align: center; color: green; text-transform: uppercase">Sửa thông tin của sinh viên {{ $route.params.idStudent }}</h1>
        <div class="info">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Tên sinh viên" value="">
            <span>Tuổi:</span>
            <select name="" id="" >
                <option value="" >18</option>
                <option value="" >19</option>
                <option value="" >20</option>
                <option value="" >21</option>
                <option value="" >22</option>
            </select>
            <input type="radio" name="sex"><span>Male</span>
            <input type="radio" name="sex"><span>FeMale</span>
            <input type="text" class="form-control" placeholder="Số điện thoại" value="">
            <input type="text" class="form-control" placeholder="Địa chỉ sinh viên" value="">
            <input type="text" class="form-control" placeholder="Sinh viên lớp" value="">
            <button class="btn btn-primary">Lưu</button>
        </div>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
export default {
    
    props: {

    },
    data() {
        return {
           name: '',
            age: 0,
            phone: 0,
            address: '',
            depart: '',

        }
    },
    computed: {
        students(){
            return this.$store.state.students;
        },
        
    },
    methods: {
        
    }
}
</script>
<style >
    .info {
        width: 500px;
        margin-left: 430px;
    }
</style>