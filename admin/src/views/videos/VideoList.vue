<template>
    <div>
        <h3>番剧列表</h3>
        <div>
            <el-button type="success" size="default" @click="$router.push('/videos/create')">上传</el-button>
            
        </div>
        <el-table :data="data.data" border stripe>
            <el-table-column v-for="(field, title) in fields"
                :prop="title"
                :key="title"
                :label="field.label"
                :width="field.width">
            </el-table-column>
                <el-table-column
                    label="操作"
                    :width="200">
                    <template v-slot="{row}">
                        <el-button type="primary" size="mini" @click="$router.push(`/videos/edit/${row._id}`)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="remove(row)">删除</el-button>
                    </template>
                </el-table-column>
                
        </el-table>
        <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </div>
        
    </div>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class VideoList extends Vue {
    data = {};
    total = 0;
    pagesize = 10;
    currentPage = 1;
    start = 0;
    end = 10;
    fields = {
        _id: {label: 'ID'},
        title: {label: '标题'},
        cover: {label: '封面图地址'},
    }

    query = {
        limit: 10,
        page: 1
    }


    async fetch(){
        const res = await this.$http.get('animes', {
            params: {
                query: this.query
            }
        })
        this.data = res.data
        this.total = res.data.total
        console.log(res.data)
    }

    created(){
        this.fetch()
    }

    async remove(row){
        await this.$confirm('是否确认删除?')
        await this.$http.delete(`animes/${row._id}`)
        this.$message.success('删除成功')
        this.fetch() //重新fetch更新数据
    }

    current_change(currentPage){
        this.currentPage = currentPage;
        this.query.page = currentPage;
        this.fetch();
      }
}
</script>



<style>

</style>