<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

import Swal from "sweetalert2";
import useUser from "@/composables/user.js";
import useAuth from "@/composables/auth.js";
import Sidebar from "@/components/admin_dashboard/Sidebar.vue";
import ModalUserInput from "@/components/admin_dashboard/ModalUserInput.vue";
import ModalUserUpdate from "@/components/admin_dashboard/ModalUserUpdate.vue";

const search = ref("");
const { users, getUsers, destroyUser } = useUser();
const { detail_user, getUserInfo, validationDashboard, logout } = useAuth();

const filteredUsers = computed(() =>
  users.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(() => {
  getUsers();
  getUserInfo();
  validationDashboard();
});

const deleteUser = (uname) => {
  Swal.fire({
    title: "Apakah anda yakin ingin menghapus data ini?",
    text: "Data yang dihapus tidak dapat dikembalikan dan anda akan otomatis logout!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#012243",
    cancelButtonColor: "#ff0000",
    confirmButtonText: "Iya",
    cancelButtonText: "Batal",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      destroyUser(uname);
      logout();
    }
  });
};
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
            <el-breadcrumb-item :to="{ name: 'ad-user' }">
              Users
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div id="data-table">
          <div
            id="table-card"
            class="flex bg-white w-full h-[calc(100vh-134px)] rounded-md p-5"
          >
            <el-table
              :data="filteredUsers"
              :default-sort="{ prop: 'name', order: 'ascending' }"
              height="100%"
              style="height: 100%"
            >
              <el-table-column prop="name" label="Nama" sortable />
              <el-table-column prop="username" label="Username" />
              <el-table-column align="right">
                <template #header>
                  <el-input v-model="search" placeholder="Cari nama user" />
                  <ModalUserInput />
                </template>
                <template #default="scope">
                  <div v-if="detail_user.name == scope.row.name">
                    <ModalUserUpdate :name="scope.row.name" />
                    <el-button
                      id="btn-delete"
                      @click="deleteUser(scope.row.username)"
                    >
                      <i class="ph ph-trash"></i>
                    </el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
