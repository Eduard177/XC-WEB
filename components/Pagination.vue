<template>
  <div>
    <ul>
      <li
        class="inline-block text-white px-2 rounded-lg shadow-md bg-green-700 hover:bg-yellow-600 text-xs"
      >
        <button
          class="p-1 outline-none"
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          aria-label="Go to first page"
        >
          <svg
            class="h-2 w-2 fill-current text-white"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="511.633px"
            height="511.634px"
            viewBox="0 0 511.633 511.634"
            style="enable-background:new 0 0 511.633 511.634;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M507.917,36.552c-2.479-1.143-5.523,0.094-9.135,3.709L296.079,242.965c-1.718,1.524-2.957,3.333-3.717,5.424V45.681
		c0-4.948-1.239-7.994-3.716-9.137c-2.475-1.141-5.518,0.096-9.138,3.711L76.807,242.965c-1.718,1.524-2.954,3.333-3.715,5.424
		V54.816c0-4.952-1.809-9.235-5.424-12.851c-3.617-3.617-7.898-5.426-12.847-5.426H18.274c-4.952,0-9.233,1.809-12.851,5.426
		C1.809,45.585,0,49.868,0,54.816v401.992c0,4.948,1.809,9.229,5.424,12.847c3.621,3.61,7.904,5.425,12.851,5.425h36.543
		c4.948,0,9.229-1.814,12.847-5.425c3.616-3.617,5.424-7.898,5.424-12.847V263.234c0.765,1.902,2.002,3.713,3.714,5.424
		l202.712,202.709c3.613,3.62,6.656,4.862,9.131,3.72c2.477-1.144,3.716-4.189,3.716-9.138V263.237
		c0.767,1.903,1.999,3.717,3.717,5.425l202.708,202.711c3.613,3.617,6.659,4.86,9.137,3.717c2.472-1.143,3.71-4.188,3.71-9.137
		V45.688C511.63,40.739,510.388,37.693,507.917,36.552z"
              ></path>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </button>
      </li>

      <li
        class="inline-block text-white px-2 rounded-lg shadow-md bg-green-700 hover:bg-yellow-600 text-xs"
      >
        <button
          class="p-1 outline-none"
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Go to previous page"
        >
          <svg
            class="h-2 w-2 fill-current text-white"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 221 440.3"
            style="enable-background:new 0 0 221 440.3;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M221,10c0-4.9-1.2-8-3.7-9.1c-2.5-1.1-5.5,0.1-9.1,3.7L5.4,207.3c-3.6,3.6-5.4,7.9-5.4,12.8s1.8,9.2,5.4,12.8l202.7,202.7
		c3.6,3.6,6.7,4.9,9.1,3.7c2.5-1.1,3.7-4.2,3.7-9.1V227.5v-14.8V10z"
              ></path>
            </g>
          </svg>
        </button>
      </li>

      <li v-for="(page, index) in pages" :key="index" class="inline-block">
        <button
          class="ml-1 px-2 text-white rounded-full shadow-md bg-green-700 hover:bg-yellow-600 text-xs"
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          :aria-label="`Go to page number ${page.name}`"
        >{{ page.name }}</button>
      </li>

      <li
        class="inline-block text-white px-2 rounded-lg shadow-md bg-green-700 hover:bg-yellow-600 text-xs"
      >
        <button
          class="p-1 outline-none"
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          aria-label="Go to next page"
        >
          <svg
            class="h-2 w-2 fill-current text-white"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 221 440.3"
            style="enable-background:new 0 0 221 440.3;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M0,430.3c0,4.9,1.2,8,3.7,9.1c2.5,1.1,5.5-0.1,9.1-3.7L215.6,233c3.6-3.6,5.4-7.9,5.4-12.8s-1.8-9.2-5.4-12.8L12.8,4.6
		C9.2,1,6.2-0.3,3.7,0.9C1.2,2,0,5,0,10v202.7v14.8V430.3z"
              ></path>
            </g>
          </svg>
        </button>
      </li>

      <li
        class="inline-block text-white px-2 rounded-lg shadow-md bg-green-700 hover:bg-yellow-600 text-xs"
      >
        <button
          class="p-1 outline-none"
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          aria-label="Go to last page"
        >
          <svg
            class="h-2 w-2 fill-current text-white"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 511.6 511.6"
            style="enable-background:new 0 0 511.6 511.6;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M3.7,475.1c2.5,1.1,5.5-0.1,9.1-3.7l202.7-202.7c1.7-1.5,3-3.3,3.7-5.4V466c0,4.9,1.2,8,3.7,9.1c2.5,1.1,5.5-0.1,9.1-3.7
		l202.7-202.7c1.7-1.5,3-3.3,3.7-5.4v193.6c0,5,1.8,9.2,5.4,12.9c3.6,3.6,7.9,5.4,12.8,5.4h36.5c5,0,9.2-1.8,12.9-5.4
		c3.6-3.6,5.4-7.9,5.4-12.9v-402c0-4.9-1.8-9.2-5.4-12.8c-3.6-3.6-7.9-5.4-12.9-5.4h-36.5c-4.9,0-9.2,1.8-12.8,5.4
		c-3.6,3.6-5.4,7.9-5.4,12.8v193.6c-0.8-1.9-2-3.7-3.7-5.4L232.1,40.3c-3.6-3.6-6.7-4.9-9.1-3.7c-2.5,1.1-3.7,4.2-3.7,9.1v202.7
		c-0.8-1.9-2-3.7-3.7-5.4L12.8,40.3c-3.6-3.6-6.7-4.9-9.1-3.7C1.2,37.7,0,40.7,0,45.7v420.3C0,470.9,1.2,473.9,3.7,475.1z"
              ></path>
            </g>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pagination",
  template: "#pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
};
</script>
