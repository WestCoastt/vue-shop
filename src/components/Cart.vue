<template>
  <section class="main pt-16" data-v-7613c812="">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
      data-v-7613c812=""
    >
      <div class="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div class="mt-6 md:mt-14 px-2 lg:px-0">
        <div v-if="(cart == null) | ((cart !== null) & (cart.length == 0))">
          <h1 class="text-2xl">장바구니에 물품이 없습니다.</h1>
          <router-link to="/" class="btn btn-primary mt-10"
            >담으러 가기</router-link
          >
        </div>
        <div class="lg:flex justify-between mb-20">
          <div>
            <div
              v-for="item in items"
              :key="item.id"
              class="lg:flex lg:items-center mt-4 px-2 lg:px-0"
            >
              <router-link :to="`/product/${item.id}`">
                <figure
                  class="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
                >
                  <img
                    class="object-contain w-full h-48"
                    :src="item.image"
                    :alt="item.title"
                  />
                </figure>
              </router-link>

              <div class="card-body px-1 lg:px-12">
                <h2 class="card-title">
                  <router-link
                    :to="`/product/${item.id}`"
                    class="link link-hover"
                    >{{ item.title }}</router-link
                  >
                </h2>
                <p class="mt-2 mb-4 text-3xl">
                  ${{
                    cart[findIdx(item.id)] != null &&
                    (
                      Math.round(item.price) * cart[findIdx(item.id)].count
                    ).toLocaleString("en-US")
                  }}
                </p>
                <div class="card-actions">
                  <button
                    class="btn btn-primary"
                    @click="removeToCart(item.id)"
                  >
                    -
                  </button>
                  <button class="btn btn-ghost no-animation">
                    {{
                      cart[findIdx(item.id)] != null &&
                      cart[findIdx(item.id)].count
                    }}
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="this.$store.commit('increment', item.id)"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full" v-if="(cart.length != 0) & (products == null)">
            <Loader />
          </div>
          <div
            class="self-start shrink-0 flex items-center mt-10 mb-20"
            v-if="cart.length != 0"
          >
            <span class="text-xl md:text-2xl"> 총 : ${{ totalPrice() }} </span>
            <label
              htmlFor="confirm-modal"
              class="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="confirm-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div class="modal-action">
            <label
              for="confirm-modal"
              class="btn btn-primary"
              @click="this.$store.commit('removeAll')"
              >네</label
            ><label for="confirm-modal" class="btn btn-outline">아니오</label>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Loader from "./Loader.vue";

export default {
  data() {
    return {
      products: null,
      items: null,
    };
  },
  components: {
    Loader,
  },
  created() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    findIdx(b) {
      return this.cart.findIndex((a) => {
        return a.id == b;
      });
    },
    totalPrice() {
      if (this.items != null) {
        const prices = this.items.map((item) => {
          return (
            Math.round(item.price) * this.cart[this.findIdx(item.id)].count
          );
        });
        const total = prices.reduce(function (a, b) {
          return a + b;
        }, 0);
        return total.toLocaleString("en-US");
      }
    },
    removeToCart(id) {
      if (this.cart[this.findIdx(id)].count == 1) {
        this.$store.commit("removeItem", id);
      } else {
        this.$store.commit("decrement", id);
      }
    },
  },
  beforeUpdate() {
    if (this.products != null) {
      const results = this.cart.map((a) => {
        const result = this.products.find((product) => {
          return a.id == product.id;
        });
        return result;
      });
      this.items = results;
    }
  },
  watch: {
    products() {
      if (this.products != null) {
        const results = this.cart.map((a) => {
          const result = this.products.find((product) => {
            return a.id == product.id;
          });
          return result;
        });
        return (this.items = results);
      }
    },
  },
};
</script>

<style></style>
