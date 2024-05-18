<script setup>
import { ref, toRefs, reactive, onMounted } from "vue";
import useMenu from "@/composables/menu.js";
import useCategory from "@/composables/category.js";

const { storeMenu } = useMenu();
const { categories, getCategories } = useCategory();

const open = ref(false);
const preview_img = ref(null);

const formMenu = reactive({
  namaMenu: "",
  description: "",
  harga: null,
  kategori: null,
  signature: null,
  image: null,
});

const { namaMenu, description, harga, kategori, signature, image } =
  toRefs(formMenu);

const onUploadFile = (event) => {
  formMenu.image = event.target.files[0];
  preview_img.value = URL.createObjectURL(formMenu.image);
};

const resetImage = () => {
  formMenu.image.value = null;
};

const handleStore = () => {
  const fd = new FormData();
  fd.append("namaMenu", namaMenu.value);
  fd.append("description", description.value);
  fd.append("harga", harga.value);
  fd.append("idkategori", kategori.value);
  fd.append("signature", signature.value);
  fd.append("image", image.value);

  storeMenu(fd);
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
  <el-button id="btn-add" class="ml-12" @click="open = true">
    <i class="ph ph-plus"></i>
  </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div id="modal-card" class="w-[50vw] h-auto bg-white p-8 rounded-lg">
        <div id="modal-header" class="grid grid-cols-2">
          <div
            id="formTitle"
            class="text-xl text-[var(--color-red)] font-semibold tracking-wider"
          >
            Input Menu Baru
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
            @keyup.enter="handleStore"
          >
            <div class="grid grid-cols-3 mb-3">
              <div
                id="img-container"
                class="mr-5 flex items-center justify-center bg-[var(--color-cream)] rounded-xl p-3"
              >
                <div class="w-full">
                  <div v-if="image != null">
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
                        class="w-1/2"
                        @click="resetImage"
                      >
                        Reset Image
                      </el-button>
                    </div>
                  </div>
                  <div v-if="image == null">
                    <h1 class="text-center mb-2 opacity-50">
                      The image will appear here
                    </h1>
                    <div class="flex items-center justify-center">
                      <el-button
                        id="btn-upimg"
                        class="w-1/2"
                        @click="$refs.fileInput.click()"
                      >
                        Upload Image
                      </el-button>
                    </div>
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
              <el-button id="btn-save" class="w-full" @click="handleStore">
                Add
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
