<template>
    <div>
        <h3>{{isNew?'创建':'编辑'}}视频</h3>
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
export default class VideoEdit extends Vue {
    @Prop(String) id:string
    data = {};
    fields = {
        title: {label: '标题', type: "input"},
        cover: {label: '封面图', type: "input"},
    }

    get isNew(){
        return !this.id
    }

    async submit(data){
        const url = this.isNew ? `animes` : `animes/${this.id}`
        const method = this.isNew ? `post` : `put`
        await this.$http[method](url,data);
        this.$message.success('保存成功')
        this.data = {}
        this.$router.go(-1)
    }

    async fetch(){
        const res = await this.$http.get(`animes/${this.id}`)
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