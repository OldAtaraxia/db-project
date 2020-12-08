<template>
    <div>
        <h3>{{isNew?'创建':'编辑'}}用户</h3>
        <ele-form
            :form-data="data"
            :form-desc="fields"
            :request-fn="submit"
        ></ele-form>
        
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class UserEdit extends Vue {
    @Prop(String) id:string
    data = {};
    fields = {
        username: {label: '用户名', type: "input"},
        password: {label: '密码', type: "input"},
    }

    get isNew(){
        return !this.id
    }

    async submit(data){
        const url = this.isNew ? `users` : `users/${this.id}`
        const method = this.isNew ? `post` : `put`
        await this.$http[method](url,data);
        this.$message.success('保存成功')
        this.data = {}
        this.$router.go(-1)
    }

    async fetch(){
        const res = await this.$http.get(`users/${this.id}`)
        this.data = res.data
    }

    created(){
        if(!this.isNew){
            this.fetch()
        }
    }
}
</script>



<style>

</style>