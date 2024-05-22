<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

import useCategory from "@/composables/category.js";
import Sidebar from "@/components/admin_dashboard/Sidebar.vue";

const search = ref("");
const { categories, getCategories } = useCategory();

const filteredCategories = computed(() =>
  categories.value.filter(
    (data) =>
      !search.value ||
      data.nama_kategori.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(() => {
  getCategories();
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
              :data="filteredCategories"
              :default-sort="{ prop: 'idKategori', order: 'ascending' }"
              height="100%"
              style="height: 100%"
            >
              <el-table-column prop="idKategori" label="ID" sortable />
              <el-table-column prop="nama_kategori" label="Nama Kategori" />
              <el-table-column align="right">
                <template #header>
                  <el-input v-model="search" placeholder="Cari nama kategori" />
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
