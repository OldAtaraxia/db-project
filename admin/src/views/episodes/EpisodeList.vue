<template>
    <div>
        <h3>视频列表</h3>
        <div>
            <el-button type="success" size="default" @click="$router.push('/episodes/create')">添加</el-button>
            
        </div>
        <el-table :data="data.data" border stripe>
            <el-table-column v-for="(field, name) in fields"
                :prop="name"
                :key="name"
                :label="field.label"
                :width="field.width">
            </el-table-column>
                <el-table-column
                    label="操作"
                    :width="200">
                    <template v-slot="{row}">
                        <el-button type="success" size="mini" @click="$router.push(`/episodes/edit/${row._id}`)">编辑</el-button>
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
export default class EpisodeList extends Vue {
    data = {};
    total = 0;
    pagesize = 10;
    currentPage = 1;
    start = 0;
    end = 10;

    fields = {
        _id: {label: 'ID'},
        name: {label: '视频名'},
        file: {label: '资源地址'}
    }

    query = {
        limit: 10,
        page: 1
    }


    async fetch(){
        const res = await this.$http.get('episodes', {
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
        await this.$http.delete(`episodes/${row._id}`)
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