<script setup lang="ts">
import type {Product} from "~/types/productModel";
import{ useRoute} from "vue-router";

const route = useRoute()
const { data: product} = await useFetch<Product>(`https://fakestoreapi.com/products/${route.params.id}`)
</script>

<template>
  <section class="py-12" v-if="product">
    <UContainer class="grid md:grid-cols-[max-content,1fr] gap-4">
  <NuxtImg class="w-96 aspect-1 object-contain" :src="product.image"  />
      <div>
        <h3 class="text-4xl font-medium  text-gray-700">{{product.title}}</h3>
        <UDivider class="my-4" />
        <p class="text-base font-normal text-gray-500 leading-7">
          {{product.description}}
        </p>
        <UDivider class="my-4" />
        <div class="text-base font-normal text-gray-500 leading-7">
          <div>Price: ${{product.price}}</div>
        </div>
      </div>
    </UContainer>
  </section>
<div>
</div>
</template>

<style scoped>

</style>