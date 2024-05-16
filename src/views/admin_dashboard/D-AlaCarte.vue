<script setup>
import Sidebar from "@/components/admin_dashboard/Sidebar.vue";
import TableMenu from "@/components/admin_dashboard/TableMenu.vue";
</script>

<template>
  <div id="main" class="w-full min-h-screen bg-[#f0f0f0]">
    <div id="sidebar">
      <Sidebar />
    </div>

    <div id="body" class="pl-[256px]">
      <TableMenu type="4" />
    </div>
  </div>
</template>
