<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import useUser from "@/composables/user.js";
import Sidebar from "@/components/admin_dashboard/Sidebar.vue";

const search = ref("");
const { users, getUsers } = useUser();

const tableData = users.value;

const filteredUsers = computed(() =>
  users.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(() => {
  getUsers();
});
</script>

<template>
  <div id="main" class="w-full min-h-screen bg-[#f0f0f0]">
    <div id="sidebar">
      <Sidebar />
    </div>

    <div id="body" class="pl-[256px]">
      <div class="px-20 py-10 min-h-screen">
        <div id="breadcrumb" class="mb-10">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item>Admin Dasboard</el-breadcrumb-item>
            <el-breadcrumb-item>Menu</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/ad-user' }">
              User
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div id="data-table">
          <div
            id="table-card"
            class="bg-white w-full min-h-full rounded-md p-5"
          >
            <el-table
              :data="filteredUsers"
              :default-sort="{ prop: 'name', order: 'ascending' }"
              height="650"
            >
              <el-table-column prop="name" label="Nama" sortable />
              <el-table-column prop="username" label="Username" />
              <el-table-column align="right">
                <template #header>
                  <el-input v-model="search" placeholder="Cari nama user" />
                  <el-button id="btn-add">
                    <i class="ph ph-plus"></i>
                  </el-button>
                </template>
                <template #default="scope">
                  <el-button id="btn-edit">
                    <i class="ph ph-pen"></i>
                  </el-button>
                  <el-button id="btn-delete">
                    <i class="ph ph-trash"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
