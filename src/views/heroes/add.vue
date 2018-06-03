<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
          <!-- 使用label为了使整个区域都有点击效果 -->
        <label for="name">英雄名称</label>
        <input v-model="formatData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input v-model="formatData.gender" type="text" class="form-control" id="gender" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            formatData:{
                name:'',
                gender:''
            }
        }
    },
    methods:{
        handleAdd(){
            this.$axios.post('/heroes',this.formatData)
            .then(res=>{
                if(res.status===201){
                    // jump to the heroes list page
                    this.$router.push({
                        name: 'heroes'
                    })
                }
            })
            .catch(err=>{
                console.log(err)
            });
        }
    }
}
</script>
