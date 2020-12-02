<template>
    <div class="main">
       <h3>发表评论{{newid}}</h3>
       <hr>
       <textarea name="" id="" cols="30" rows="10" placeholder="请输入评论的" maxlength="120" v-model="msage"></textarea>
       <mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>


       <div class="comments">
           <div class="comments-item" v-for="(item, i) in list" :key="i">
               <div class="comments-title">第{{i+1}} &nbsp; 用户：{{item.user_name}} &nbsp; 发表时间 {{item.add_time   | dateFormat}}</div>
               <div class="comment">{{item.content}}</div>
           </div>
       </div>

       <mt-button type="primary" size="large" plain @click="load">加载更多</mt-button>
    </div>
</template>






<script>




import { Toast } from 'mint-ui'
export default {
    data () {
        return {
            page: 1,
            list: [],

            msage: []
        }
    },

    


    methods: {

           async getComment () {
               const { data } = await this.$http.get("/api/getcomments/" + this.newid + "?pageindex=" + this.page);
               
               if (data.status === 0 ) return this.list=this.list.concat(data.message)
               
           },



           load () {

               this.page++;

               this.getComment()
           },



           async postMsg () {
               
               if (this.msage == "") return Toast("请填写评论")

              const{data} = await this.$http.post('/api/postcomment/' + this.newid, { content: this.msage.trim()});
              
              if   (data.status === 0 ) {
                  
                  this.list.unshift({ user_name: "匿名用户", add_time: new Date(), content: this.msage.trim()})
              }
           }
    },

    props: ["newid"],   

    created () {
        
        this.getComment()
    },

    // props: ['id']
}
</script>




<style lang="scss" scoped>
    
   





    

    textarea {
        font-size: 12px;
        margin: 0;
    }
   
   .comments {

       margin-top: 5px;
       .comments-item {
           line-height: 30px;
           .comments-title {
               font-size: 12px;
               background: #ddd;
           }

           .comment {
               font-size: 12px;
               text-indent: 2em;
           }
       }
   }


</style>