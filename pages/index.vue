<template>
  <section class="py-12">
    <UContainer>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="product in products"
          :to="{
            name: `product-id`,
            params: {
              id: product.id,
            },
          }"
          class="hover:shadow-md"
        >
          <UCard>
            <template #header>
              <NuxtImg
                class="w-96 aspect-1 object-contain hover:scale-90 duration-300"
                :src="product.image"
              />
            </template>
            <UPopover mode="hover">
              <h4 class="mb-2">{{ truncate(product.title) }}</h4>
              <template #panel>
                <div class="p-2">{{ product.title }}</div>
              </template>
            </UPopover>
            <div class="mb-2 flex justify-between">
              <Rating v-model="product.rating.rate" class="flex gap-1" />

              <div class="">
                <Icon name="heroicons:users" />
                {{ product.rating.count }}
              </div>
            </div>
            <div class="mb-2">${{ product.price }}</div>
            <div>
              <UBadge
                color="primary"
                variant="subtle"
                :ui="{ rounded: 'rounded' }"
                >{{ product.category }}</UBadge
              >
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import type { Product } from "~/types/productModel";
import { truncate } from "lodash-es";
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
</script>
<style>
div[data-p-active] svg {
  color: goldenrod;
}
</style>
