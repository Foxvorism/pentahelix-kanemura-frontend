<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

import useMenu from "@/composables/menu.js";

const menu = defineProps(["type"]);

const route = "ad-" + menu.type.toLowerCase();
const searchPlaceholder = "Cari nama " + menu.type.toLowerCase();

const search = ref("");
const { menus, getMenus } = useMenu();

const filteredMenus = computed(() =>
  menus.value.filter(
    (data) =>
      !search.value ||
      data.nama_menu.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(() => {
  getMenus(menu.type);
});
</script>

<template>
  <div class="px-20 py-10 min-h-screen">
    <div id="breadcrumb" class="mb-10">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item>Admin Dasboard</el-breadcrumb-item>
        <el-breadcrumb-item>Menu</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: route }">
          {{ menu.type }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div id="data-table">
      <div
        id="table-card"
        class="flex bg-white w-full h-[calc(100vh-134px)] rounded-md p-5"
      >
        <el-table
          :data="filteredMenus"
          :default-sort="{ prop: 'nama_menu', order: 'ascending' }"
          height="100%"
          style="height: 100%"
        >
          <el-table-column prop="nama_menu" label="Nama Menu" sortable />
          <el-table-column prop="harga" label="Harga (IDR)" />
          <el-table-column prop="signature" label="Signature" />
          <el-table-column prop="description" label="Deskripsi" />
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" :placeholder="searchPlaceholder" />
              <!-- <ModalUserInput /> -->
              <el-button id="btn-info" class="ml-[12px]">
                <i class="ph ph-info"></i>
              </el-button>
            </template>
            <template #default="scope">
              <el-button id="btn-info">
                <i class="ph ph-info"></i>
              </el-button>
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
</template>
