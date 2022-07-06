<template>
  <section class="main pt-16" data-v-7613c812="">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
      data-v-7613c812=""
    >
      <div class="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>패션</li>
        </ul>
      </div>
      <article
        class="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto"
      >
        <h2
          class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold"
          data-v-014aaa38=""
        >
          패션
        </h2>
        <Loader v-if="(mens == null) | (womens == null)" />
        <div
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="false"
          data-v-014aaa38=""
        >
          <router-link
            v-for="men in mens"
            :key="men.id"
            :to="`/product/${men.id}`"
            class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            data-v-5b1d7036=""
            data-v-014aaa38=""
            ><figure
              class="flex h-80 bg-white overflow-hidden"
              data-v-5b1d7036=""
            >
              <img
                :src="men.image"
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
                {{ men.title }}
              </p>
              <p class="text-base" data-v-5b1d7036="">
                ${{ Math.round(men.price).toLocaleString("en-US") }}
              </p>
            </div></router-link
          >
          <router-link
            v-for="women in womens"
            :key="women.id"
            :to="`/product/${women.id}`"
            class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            data-v-5b1d7036=""
            data-v-014aaa38=""
            ><figure
              class="flex h-80 bg-white overflow-hidden"
              data-v-5b1d7036=""
            >
              <img
                :src="women.image"
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
                {{ women.title }}
              </p>
              <p class="text-base" data-v-5b1d7036="">
                ${{ Math.round(women.price).toLocaleString("en-US") }}
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
      mens: null,
      womens: null,
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => (this.mens = json));
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => (this.womens = json));
  },
  components: {
    Loader,
  },
};
</script>

<style></style>
