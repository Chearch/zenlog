<template>
  <section class="ad-ta">
    <!--工具条-->
    <el-col :span="36" style="padding-bottom: 10px" class="el-tool-wrapper">
      <el-form :inline="true" class="toolbar" :model="filters">
        <el-form-item class="input-type">
          <el-input v-model="searchText"></el-input>
        </el-form-item>
        <el-form-item class="query">
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item class="add">
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="users" v-loading="listLoading" style="width: 100%">
      <el-table-column prop="title" label="标题" width="400">
      </el-table-column>
      <el-table-column prop="tags" label="标签" width="150"> </el-table-column>
      <el-table-column prop="category" label="分类" width="80">
      </el-table-column>
      <el-table-column
        prop="created"
        label="日期"
        width="100"
        sortable
      ></el-table-column>
      <el-table-column prop="visited" label="访问量" width="100" sortable>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="handleDel(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="test" :close-on-click-modal="false">
      <el-form
        :model="editForm"
        label-width="80px"
        :rules="editFormRules"
        ref="editForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="test" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="test" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-input-number v-model="test"></el-input-number>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="test"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="文章内容">
          <el-input type="textarea" v-model="test"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click.native="editSubmit"
          :loading="editLoading"
          >提交</el-button
        >
      </div>
    </el-dialog>

    <!--新增界面-->
    <el-dialog title="新增" v-model="test" :close-on-click-modal="false">
      <el-form
        :model="addForm"
        label-width="80px"
        :rules="addFormRules"
        ref="addForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="test" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="test">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="test" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="test"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="test"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click.native="addSubmit"
          :loading="addLoading"
          >提交</el-button
        >
      </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      filters: {
        name: "",
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列

      editFormVisible: false, //编辑界面是否显示
      editLoading: false,
      editFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      },
      //编辑界面数据
      editForm: {
        id: 0,
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: "",
      },

      addFormVisible: false, //新增界面是否显示
      addLoading: false,
      addFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      },
      //新增界面数据
      addForm: {
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: "",
      },
    };
  },
  methods: {
    //性别显示转换
    formatSex(row, column) {
      console.log(1);
      return "test";
    },
    handleCurrentChange(val) {
      this.page = val;
    },
    //获取用户列表
    getUsers() {
      console.log(2);
    },
    //删除
    handleDel(index, row) {
      console.log(3);
    },
    //显示编辑界面
    handleEdit(index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
    },
    //显示新增界面
    handleAdd() {
      console.log(5);
    },
    //编辑
    editSubmit() {},
    //新增
    addSubmit() {},
    selsChange(sels) {
      this.sels = sels;
    },
    //批量删除
    batchRemove() {},
  },
  created() {
    this.getArticles();
    this.users = [...this.articles].map((v) => {
      v.tags = v.tags.join(", ");
      return v;
    });
    console.log(this.users);
  },
  watch: {
    articles() {
      this.users = [...this.articles].map((v) => {
        v.tags = v.tags.join(", ");
        return v;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ad-ta {
  width: 100%;
  .el-tool-wrapper {
    width: 100%;
    .toolbar {
      width: 100%;
      .input-type {
        width: 90%;
        display: inline-block;
        box-sizing: border-box;
        margin: 0;
        .el-input {
          width: 70rem;
        }
      }
      .query {
        display: inline-block;
        box-sizing: border-box;
        position: absolute;
        margin: 0 .5rem;
        right: 4.5rem;
        width: 3rem;
        transform: translate(-55%, 0);
        .el-button {
          width: 100%;
          height: 100%;
        }
      }
      .add {
        position: absolute;
        right: 0;
        width: 3rem;
        transform: translate(-55%, 0);
        display: inline-block;
        box-sizing: border-box;
        margin: 0;
        .el-button {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.el-button {
  background-color: black;
  color: white;
  width: 4rem;
  height: 2rem;
  &:hover {
    color: white;
    background-color: #f10215;
  }
}
</style>