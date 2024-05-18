<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import Swal from "sweetalert2";
import useMenu from "@/composables/menu.js";
import ModalMenuInput from "@/components/admin_dashboard/ModalMenuInput.vue";
import ModalMenuDetail from "@/components/admin_dashboard/ModalMenuDetail.vue";

const category = ref(null);
const menu = defineProps(["type"]);

if (menu.type == 1) {
  category.value = "Donburi";
} else if (menu.type == 2) {
  category.value = "Dry Ramen";
} else if (menu.type == 3) {
  category.value = "Soup Ramen";
} else if (menu.type == 4) {
  category.value = "A la Carte";
} else if (menu.type == 5) {
  category.value = "Snack";
} else if (menu.type == 6) {
  category.value = "Special Menu";
} else if (menu.type == 7) {
  category.value = "Additional";
}

const searchPlaceholder = "Cari nama " + category.value;

const route = "ad-" + menu.type.toLowerCase();

const search = ref("");
const { menus, getMenusByCategory, destroyMenu } = useMenu();

const filteredMenus = computed(() =>
  menus.value.filter(
    (data) =>
      !search.value ||
      data.namaMenu.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(() => {
  getMenusByCategory(menu.type);
});

const deleteMenu = (id, nama_menu) => {
  Swal.fire({
    title: "Apakah anda yakin ingin menghapus " + nama_menu + "?",
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#012243",
    cancelButtonColor: "#ff0000",
    confirmButtonText: "Iya",
    cancelButtonText: "Batal",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      destroyMenu(id, nama_menu);
    }
  });
};
</script>

<template>
  <div class="px-20 py-10 min-h-screen">
    <div id="breadcrumb" class="mb-10">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item>Admin Dasboard</el-breadcrumb-item>
        <el-breadcrumb-item>Menu</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: route }">
          {{ category }}
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
          <el-table-column prop="namaMenu" label="Nama Menu" sortable />
          <el-table-column prop="harga" label="Harga (IDR)" />
          <el-table-column prop="signature" label="Signature" />
          <el-table-column prop="description" label="Deskripsi" />
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" :placeholder="searchPlaceholder" />
              <ModalMenuInput :id_category="menu.type" :category="category" />
            </template>
            <template #default="scope">
              <ModalMenuDetail :id="scope.row.id" />
              <el-button id="btn-edit">
                <i class="ph ph-pen"></i>
              </el-button>
              <el-button
                id="btn-delete"
                @click="deleteMenu(scope.row.id, scope.row.namaMenu)"
              >
                <i class="ph ph-trash"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
