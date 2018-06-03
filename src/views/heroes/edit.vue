<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
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
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formatData: {
        name: "",
        gender: ""
      }
    };
  },
  created() {
    //   获取url上的id参数
    this.id = this.$route.params.id;
    //加载数据
    this.loadData();
  },
  methods: {
      loadData(){
        //   send request and get the id
          this.$axios.get(`/heroes/${this.id}`)
          .then(res=>{
              if(res.status===200){
                  this.formatData = res.data;
              }
          })
          .catch(err=>{
              console.log(err);
          })
      },
      handleEdit(){
          this.$axios.patch(`/heroes/${this.id}`,this.formatData)
          .then(res=>{
              if(res.status===200){
                  this.$router.push({
                      name:'heroes'
                  })
              }
          })
          .catch(err=>{
              console.log(err)
          });
      }
  }
};
</script>
