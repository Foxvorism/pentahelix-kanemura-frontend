<script setup>
import { onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import useAuth from "@/composables/auth.js";
import Sidebar from "@/components/admin_dashboard/Sidebar.vue";
</script>

<template>
  <div id="main" class="w-full min-h-screen bg-[#f0f0f0]">
    <div id="sidebar">
      <Sidebar />
    </div>

    <div id="body" class="pl-[256px]">
      <div class="px-20 py-10">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item>Admin Dasboard</el-breadcrumb-item>
          <el-breadcrumb-item>Menu</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/ad-donburi' }">
            Donburi
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>
