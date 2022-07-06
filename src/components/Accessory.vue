<template>
  <section class="main pt-16" data-v-7613c812="">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
      data-v-7613c812=""
    >
      <div class="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>액세서리</li>
        </ul>
      </div>
      <article
        class="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto"
      >
        <h2
          class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold"
          data-v-014aaa38=""
        >
          액세서리
        </h2>
        <Loader v-if="products == null" />
        <div
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="false"
          data-v-014aaa38=""
        >
          <router-link
            v-for="product in products"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            data-v-5b1d7036=""
            data-v-014aaa38=""
            ><figure
              class="flex h-80 bg-white overflow-hidden"
              data-v-5b1d7036=""
            >
              <img
                :src="product.image"
                alt="상품 이미지"
                class="transition-transform duration-300"
                data-v-5b1d7036=""
              />
            </figure>
            <div
              class="card-body bg-gray-100 dark:bg-gray-700"
              data-v-5b1d7036=""
            >
              <p class="card-title text-base" data-v-5b1d7036="">
                {{ product.title }}
              </p>
              <p class="text-base" data-v-5b1d7036="">
                ${{ Math.round(product.price).toLocaleString("en-US") }}
              </p>
            </div></router-link
          >
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import Loader from "./Loader.vue";

export default {
  data() {
    return {
      products: null,
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
  components: {
    Loader,
  },
};
</script>

<style></style>
