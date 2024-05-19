<script setup>
import { ref, toRefs, reactive } from "vue";
import useUser from "@/composables/user.js";

const { updateUser } = useUser();

const open = ref(false);
const user = defineProps(["name"]);

const formUser = reactive({
  name: user.name,
  password: "",
});

const { name, password } = toRefs(formUser);

const handleUpdate = () => {
  updateUser(formUser);
  name.value = "";
  password.value = "";
};
</script>

<template>
  <el-button id="btn-edit" @click="open = true">
    <i class="ph ph-pen"></i>
  </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div id="modal-card" class="w-[35vw] h-auto bg-white p-8 rounded-lg">
        <div id="modal-header" class="grid grid-cols-2">
          <div
            id="formTitle"
            class="text-xl text-[var(--color-red)] font-semibold tracking-wider"
          >
            Update User
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
            :model="formUser"
            label-width="auto"
            label-position="top"
            @keyup.enter="handleUpdate"
          >
            <el-form-item label="Nama">
              <el-input type="text" v-model="formUser.name" />
            </el-form-item>
            <el-form-item label="New Password">
              <el-input
                type="password"
                show-password
                v-model="formUser.password"
                class="mb-2"
              />
              <el-alert
                title="Apabila tidak ingin mengganti password, maka input filed 'New Password' tidak perlu di isi"
                type="info"
                show-icon
                :closable="false"
              />
            </el-form-item>
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
</style>
