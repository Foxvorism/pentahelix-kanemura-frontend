<script setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import useMenu from "@/composables/menu.js";

const { menus, getMenuById } = useMenu();

const open = ref(false);
const menu = defineProps(["id"]);

onMounted(() => {
  getMenuById(menu.id);
});

const img_api = "http://localhost:8080/image/fileSystem/";
</script>

<template>
  <el-button id="btn-info" class="ml-[12px]" @click="open = true">
    <i class="ph ph-info"></i>
  </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div id="modal-card" class="w-[50vw] h-auto bg-white p-8 rounded-lg">
        <div id="modal-header" class="grid grid-cols-2">
          <div
            id="formTitle"
            class="text-xl text-[var(--color-red)] font-semibold tracking-wider"
          >
            Detail Menu {{ menus.namaMenu }}
          </div>
          <div class="flex justify-end">
            <el-button id="btn-close" @click="open = false">
              <i class="ph ph-x"></i>
            </el-button>
          </div>
        </div>
        <hr class="my-5" />
        <div class="grid grid-cols-5">
          <div
            id="img-container"
            class="flex items-center justify-center bg-[var(--color-cream)] rounded-xl p-3 mr-5 col-span-2"
          >
            <img
              :src="img_api + menus.nama_img"
              :alt="menus.nama_img ?? 'Image not found'"
              class="object-contain"
            />
          </div>
          <div id="form" class="w-full col-span-3">
            <el-form label-width="auto" label-position="top">
              <el-form-item label="Nama Menu">
                <el-input type="text" :value="menus.namaMenu" readonly />
              </el-form-item>
              <div class="grid grid-cols-2 gap-3">
                <el-form-item label="Harga (IDR)">
                  <el-input type="text" :value="menus.harga" readonly />
                </el-form-item>
                <el-form-item label="Signature">
                  <el-input type="text" :value="menus.signature" readonly />
                </el-form-item>
              </div>
              <el-form-item label="New Password">
                <el-input
                  type="textarea"
                  :rows="4"
                  :value="menus.description"
                  readonly
                />
              </el-form-item>
            </el-form>
          </div>
        </div>
        <hr class="mt-5" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
