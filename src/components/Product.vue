<template>
  <section class="main pt-16">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
    >
      <Loader v-if="product == null" />
      <div v-else>
        <div class="text-sm breadcrumbs">
          <ul>
            <li v-if="product.category == 'electronics'">디지털</li>
            <li v-else-if="product.category == 'jewelery'">액세서리</li>
            <li v-else>패션</li>
            <li>{{ product.title }}</li>
          </ul>
        </div>
        <div class="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure
            data-v-73581b5a
            class="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image"
          >
            <img
              :src="product.image"
              :alt="product.image"
              class="object-contain w-full h-72"
            />
          </figure>
          <div class="card-body px-1 lg:px-12">
            <h2 class="card-title">
              {{ product.title }}
              <span class="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{{ product.description }}</p>
            <div class="flex items-center mt-3">
              <div class="rating rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                  disabled
                  :checked="checked[0]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                  disabled
                  :checked="checked[1]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                  disabled
                  :checked="checked[2]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                  disabled
                  :checked="checked[3]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                  disabled
                  :checked="checked[4]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                  disabled
                  :checked="checked[5]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                  disabled
                  :checked="checked[6]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                  disabled
                  :checked="checked[7]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                  disabled
                  :checked="checked[8]"
                />
                <input
                  type="radio"
                  name="rating-10"
                  class="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                  disabled
                  :checked="checked[9]"
                />
              </div>
              <div class="ml-2">
                {{
                  product.rating.rate + " / " + product.rating.count + " 참여"
                }}
              </div>
            </div>
            <p class="mt-2 mb-4 text-3xl">
              ${{ Math.round(product.price).toLocaleString("en-US") }}
            </p>
            <div class="card-actions">
              <button class="btn btn-primary" @click="addToCart()">
                장바구니에 담기
              </button>
              <router-link to="/cart" class="btn btn-outline ml-1">
                장바구니로 이동
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  data() {
    return {
      itemCount: 0,
      id: this.$route.params.id,
      product: null,
      checked: null,
    };
  },
  created() {
    fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((json) => (this.product = json));
  },
  components: {
    Loader,
  },
  methods: {
    addToCart() {
      const result = this.$store.state.cart.find((item) => {
        return item.id == this.id;
      });
      if (result == null) {
        this.$store.commit("addItem", { id: Number(this.id), count: 1 });
      } else {
        this.$store.commit("increment", this.id);
      }
    },
  },
  watch: {
    product() {
      if (this.product != null) {
        this.checked = new Array(
          Math.floor(this.product.rating.rate / 0.5)
        ).fill(true);
      }
    },
    $route(to, from) {
      if ((this.$route.params.id != null) & (to.params.id != from.params.id)) {
        fetch(`https://fakestoreapi.com/products/${to.params.id}`)
          .then((res) => res.json())
          .then((json) => (this.product = json));
        this.id = to.params.id;
      }
    },
  },
};
</script>

<style></style>
