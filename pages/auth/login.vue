<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { definePageMeta } from "#imports";
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
const schema = object({
  username: string().required("Required"),
  password: string().required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: "mor_2314",
  password: "83r5^_",
});
const loading = ref(false);
const router = useRouter();
const token = useLocalStorage("token", "");
async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const { data } = await useFetch<{ token: string }>(
    "https://fakestoreapi.com/auth/login",
    {
      method: "POST",
      body: {
        username: event.data.username,
        password: event.data.password,
      },
    }
  );
  token.value = data.value.token;
  loading.value = false;
  await router.push({
    name: "index",
  });
}
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Username" name="username">
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit" :loading="loading"> Submit </UButton>
  </UForm>
</template>
