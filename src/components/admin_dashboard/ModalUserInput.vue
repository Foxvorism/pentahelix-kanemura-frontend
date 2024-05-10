<script lang="ts" setup>
import { ref, toRefs, reactive } from "vue";
import useUser from "@/composables/user.js";

const { storeUser } = useUser();

const open = ref(false);

const formUser = reactive({
  name: "",
  username: "",
  password: "",
});

const { name, username, password } = toRefs(formUser);

const handleStore = () => {
  storeUser(formUser);
  name.value = "";
  username.value = "";
  password.value = "";
};
</script>

<template>
  <el-button id="btn-add" @click="open = true">
    <i class="ph ph-plus"></i>
  </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div id="modal-card" class="w-[35vw] h-auto bg-white p-8 rounded-lg">
        <div id="modal-header" class="grid grid-cols-2">
          <div
            id="formTitle"
            class="text-xl text-[var(--color-red)] font-semibold tracking-wider"
          >
            Input User Baru
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
            @keyup.enter="handleStore"
          >
            <el-form-item label="Nama">
              <el-input type="text" v-model="formUser.name" />
            </el-form-item>
            <el-form-item label="Username">
              <el-input type="text" v-model="formUser.username" />
            </el-form-item>
            <el-form-item label="Password">
              <el-input
                type="password"
                show-password
                v-model="formUser.password"
              />
            </el-form-item>
            <div class="flex justify-center">
              <el-button id="btn-save" @click="handleStore"> Add </el-button>
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
