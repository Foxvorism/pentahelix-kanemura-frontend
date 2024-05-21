<script setup></script>

<template>
  <div class="flex justify-center items-center">
    <div class="w-3/4">
      <el-carousel :interval="5000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item"></el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
