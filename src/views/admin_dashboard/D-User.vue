<script setup>
import { onMounted } from "vue";
import useAuth from "@/composables/auth.js";
import Sidebar from "@/components/admin_dashboard/Sidebar.vue";

import UserData from "../../data/user.json";

const list_user = UserData;

const { user_info } = useAuth();

onMounted(() => {
  user_info();
  console.log(list_user);
});
</script>

<template>
  <div id="body" class="w-full min-h-screen bg-[#f0f0f0]">
    <Sidebar />
  </div>
</template>

<style scoped></style>
