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
export default class EpisodeEdit extends Vue {
    @Prop(String) id:string
    
    get isNew(){
        return !this.id
    }

    data = {};
    fields = {
        name: {label: '视频名称', type: "input"},
        file: {
            label: '资源地址',
            type: 'video-uploader',
            attrs: {
                action: 'http://localhost:3000/upload', // 上传地址
                responseFn (response) {
                    console.log(response.url);
                    return response.url;
                }
            }
        },
        animeId: {label: '番剧id', type: "input"},
    }

    async submit(data){
        const url = this.isNew ? `episodes` : `episodes/${this.id}`
        const method = this.isNew ? `post` : `put`
        await this.$http[method](url,data);
        this.$message.success('保存成功')
        this.data = {}
        this.$router.go(-1)
    }

    async fetch(){
        const res = await this.$http.get(`episodes/${this.id}`)
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