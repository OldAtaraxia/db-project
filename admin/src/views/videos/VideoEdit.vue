<template>
    <div>
        <h3>{{isNew?'创建':'编辑'}}基本信息</h3>
        <ele-form
            :form-data="data"
            :form-desc="fields"
            :request-fn="submit"
        ></ele-form>
        <el-button type="error" size="default" @click="console.log('木大哒')">删除</el-button>
        <h3>分集管理</h3>
        <el-button type="success" size="default" @click="$router.push(`/episodes/edit/${id}`)">添加新一集</el-button>

        <el-table :data="episodeData" border stripe>
            <el-table-column v-for="(field, name) in episodeFields"
                :prop="name"
                :key="name"
                :label="field.label"
                :width="field.width">
            </el-table-column>
                <el-table-column
                    label="操作"
                    :width="200">
                    <template v-slot="{row}">
                        <el-button type="primary" size="mini" @click="$router.push(`/episodes/edit/${row._id}`)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="remove(row)">删除</el-button>
                        
                    </template>
                </el-table-column>
                
        </el-table>
        
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VideoEdit extends Vue {
    @Prop(String) id:string
    data = {};
    episodeData = {};
    epNumber = 0;
    fields = {
        title: {label: '标题', type: "input"},
        cover: {
            label: '封面图', 
            type: "image-uploader",
            attrs: {
                action: 'http://localhost:3009/upload',
                responseFn (response) {
                    console.log(response.url);
                    return response.url;
                }
            }
        },
        episodeNumber: {label: '集数', type: 'input'}
    }

    episodeFields = {
        name: {label: '名称'},
        file: {label: '文件地址'},
    }

    get isNew(){
        return !this.id
    }

    async remove(row){
        await this.$confirm('是否确认删除?')
        await this.$http.delete(`episodes/${row._id}`)
        this.$message.success('删除成功')
        this.fetch() //重新fetch更新数据
        this.getEpisodes() //同上
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
    async getEpisodes(){
        const res = await this.$http.get('episodes')
        this.episodeData = res.data.data.filter(v => v.animeId === this.id)
        this.epNumber = res.data.length
        console.log('喔,开始了')
        console.log(this.episodeData)
    }

    created(){
        if(!this.isNew){
            this.fetch()
            this.getEpisodes()
        }
    }
}
</script>

