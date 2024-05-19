<script setup>
import { ref, toRefs, reactive, onMounted } from "vue";
import useMenu from "@/composables/menu.js";
import useCategory from "@/composables/category.js";

const { updateMenuData, updateMenuImg } = useMenu();
const { categories, getCategories } = useCategory();

const menu = defineProps(["data"]);
const img_api = import.meta.env.VITE_BASE_URL + "/image/fileSystem/";

const open = ref(false);
const preview_img = ref(img_api + menu.data.nama_img);

const formMenu = reactive({
  id: menu.data.id,
  namaMenu: menu.data.namaMenu,
  description: menu.data.description,
  harga: menu.data.harga,
  kategori: menu.data.kategori,
  signature: menu.data.signature,
  image: null,
});

const { id, namaMenu, description, harga, kategori, signature, image } =
  toRefs(formMenu);

const onUploadFile = (event) => {
  formMenu.image = event.target.files[0];
  preview_img.value = URL.createObjectURL(formMenu.image);
};

const handleUpdate = () => {
  const fd1 = new FormData();
  fd1.append("namaMenu", namaMenu.value);
  fd1.append("description", description.value);
  fd1.append("harga", harga.value);
  fd1.append("idkategori", kategori.value);
  fd1.append("signature", signature.value);

  const fd2 = new FormData();
  fd2.append("id", id.value);
  fd2.append("image", image.value);

  updateMenuData(id.value, namaMenu.value, fd1);
  if (image.value != null) {
    updateMenuImg(namaMenu.value, fd2);
  }

  id.value = null;
  namaMenu.value = "";
  description.value = "";
  harga.value = null;
  kategori.value = null;
  signature.value = null;
  image.value = null;
};

onMounted(() => {
  getCategories();
});
</script>

<template>
  <el-button id="btn-edit" @click="open = true">
    <i class="ph ph-pen"></i>
  </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div id="modal-card" class="w-[50vw] h-auto bg-white p-8 rounded-lg">
        <div id="modal-header" class="grid grid-cols-2">
          <div
            id="formTitle"
            class="text-xl text-[var(--color-red)] font-semibold tracking-wider"
          >
            Update Data "{{ menu.data.namaMenu }}"
          </div>
          <div class="flex justify-end">
            <el-button id="btn-close" @click="open = false">
              <i class="ph ph-x"></i>
            </el-button>
          </div>
        </div>
        <hr class="my-5" />
        <div id="form">
          <el-form
            :model="formMenu"
            label-width="auto"
            label-position="top"
            @keyup.enter="handleUpdate"
          >
            <div class="grid grid-cols-3 mb-3">
              <div
                id="img-container"
                class="mr-5 flex items-center justify-center bg-[var(--color-cream)] rounded-xl p-3"
              >
                <div class="w-full">
                  <div class="flex justify-center">
                    <img
                      :src="preview_img"
                      alt="Menu Image"
                      class="object-contain mb-2 max-h-52"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <el-button
                      id="btn-upimg"
                      class="w-3/4"
                      @click="$refs.fileInput.click()"
                    >
                      Upload New Image
                    </el-button>
                  </div>
                </div>
              </div>
              <div id="form-input" class="col-span-2 w-full">
                <div class="grid grid-cols-2 gap-5">
                  <el-form-item label="Nama Menu">
                    <el-input
                      type="text"
                      v-model="formMenu.namaMenu"
                      placeholder="Masukan nama menu"
                      required
                    />
                  </el-form-item>
                  <el-form-item label="Harga (IDR)">
                    <el-input
                      type="number"
                      v-model="formMenu.harga"
                      placeholder="Masukan harga menu"
                      required
                    />
                  </el-form-item>
                </div>
                <div class="grid grid-cols-2 gap-5">
                  <el-form-item label="Kategori">
                    <el-select
                      v-model="formMenu.kategori"
                      placeholder="Pilih kategori"
                      required
                      disabled
                    >
                      <el-option
                        v-for="item in categories"
                        :key="item.idKategori"
                        :label="item.nama_kategori"
                        :value="item.idKategori"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Signature">
                    <el-select
                      v-model="formMenu.signature"
                      placeholder="Apakah ini signature menu?"
                      required
                    >
                      <el-option value="true" label="Iya" />
                      <el-option value="false" label="Tidak" />
                    </el-select>
                  </el-form-item>
                </div>
                <el-form-item label="Description">
                  <el-input
                    type="textarea"
                    v-model="formMenu.description"
                    placeholder="Masukan deskripsi menu"
                    required
                    :rows="3"
                  />
                </el-form-item>
                <input
                  id="picture"
                  type="file"
                  ref="fileInput"
                  class="hidden"
                  @change="onUploadFile"
                  required
                />
              </div>
            </div>
            <div class="flex justify-center">
              <el-button id="btn-save" class="w-full" @click="handleUpdate">
                Update
              </el-button>
            </div>
          </el-form>
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

#picture {
  box-shadow: 0 0 0 1px var(--color-blue, var(--color-blue)) inset;
}
</style>
