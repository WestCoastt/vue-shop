<template>
  <section class="main pt-16">
    <carousel
      class="carousel-container"
      :pauseAutoplayOnHover="false"
      :autoplay="5000"
      :wrap-around="true"
    >
      <slide v-for="slide in slides" :key="slide.alt">
        <div
          class="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10"
          data-v-76821640=""
        >
          <h2
            class="text-2xl lg:text-4xl font-bold text-white"
            data-v-76821640=""
          >
            {{ slide.title }}
          </h2>
          <p class="my-2 text-white" data-v-76821640="">
            {{ slide.desc }}
          </p>
          <router-link
            :to="`/${slide.alt}`"
            class="btn btn-sm lg:btn-md mt-3"
            data-v-76821640=""
          >
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-v-76821640=""
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
                data-v-76821640=""
              ></path></svg
          ></router-link>
        </div>
        <img :src="slide.url" :alt="slide.alt" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>

    <section
      class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto"
    >
      <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        패션
      </h2>
      <Loader v-if="products == null" />
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        <router-link
          v-for="product in products.slice(0, 4)"
          :to="`/product/${product.id}`"
          :key="product.id"
          class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
        >
          <figure class="flex h-80 bg-white overflow-hidden">
            <img
              class="transition-transform duration-300"
              :src="product.image"
              alt="상품 이미지"
            />
          </figure>
          <div class="card-body bg-gray-100 dark:bg-gray-700">
            <p class="card-title text-base">{{ product.title }}</p>
            <p>${{ Math.round(product.price) }}</p>
          </div>
        </router-link>
      </div>
    </section>
    <section
      class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
    >
      <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        액세서리
      </h2>
      <Loader v-if="products == null" />
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        <router-link
          v-for="product in products.slice(4, 8)"
          :to="`/product/${product.id}`"
          :key="product.id"
          class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
        >
          <figure class="flex h-80 bg-white overflow-hidden">
            <img
              class="transition-transform duration-300"
              :src="product.image"
              alt="상품 이미지"
            />
          </figure>
          <div class="card-body bg-gray-100 dark:bg-gray-700">
            <p class="card-title text-base">{{ product.title }}</p>
            <p>${{ Math.round(product.price) }}</p>
          </div>
        </router-link>
      </div>
    </section>
    <section
      class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto"
    >
      <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        디지털
      </h2>
      <Loader v-if="products == null" />
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        <router-link
          v-for="product in products.slice(8, 12)"
          :to="`/product/${product.id}`"
          :key="product.id"
          class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
        >
          <figure class="flex h-80 bg-white overflow-hidden">
            <img
              class="transition-transform duration-300"
              :src="product.image"
              alt="상품 이미지"
            />
          </figure>
          <div class="card-body bg-gray-100 dark:bg-gray-700">
            <p class="card-title text-base">{{ product.title }}</p>
            <p>${{ Math.round(product.price) }}</p>
          </div>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script>
import Loader from "./Loader.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  data() {
    return {
      products: null,
      slides: [
        {
          title: "물빠진 청바지!",
          desc: "이제 막 도착한 패션 청바지를 구경해 보세요.",
          alt: "fashion",
          url: "/assets/fashion.jpeg",
        },
        {
          title: "신속한 업무처리!",
          desc: "다양한 디지털 상품을 둘러보세요.",
          alt: "digital",
          url: "/assets/digital.jpeg",
        },
        {
          title: "신선한 식품!",
          desc: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
          alt: "grocery",
          url: "/assets/grocery.jpeg",
        },
      ],
    };
  },
  created() {
    fetch(`https://fakestoreapi.com/products?limit=12`)
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
  components: {
    Loader,
    Carousel,
    Slide,
    Pagination,
  },
};
</script>

<style></style>
