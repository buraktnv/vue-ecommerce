<template>
  <div class="header">
    <div class="header__main">
      <div class="header__logo">
        <img src="../../assets/images/Euphoria.svg" alt="logo" />
      </div>
      <div class="header__categories">
        <li class="category">Shop</li>
        <li class="category">Men</li>
        <li class="category">Women</li>
        <li class="category">Combos</li>
        <li class="category">Joggers</li>
      </div>

      <div class="header__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.6363 17.697C16.9292 17.9899 17.4041 17.9899 17.697 17.697C17.9899 17.4041 17.9899 16.9292 17.697 16.6363L16.6363 17.697ZM13.9167 8.83334C13.9167 11.6408 11.6408 13.9167 8.83334 13.9167V15.4167C12.4692 15.4167 15.4167 12.4692 15.4167 8.83334H13.9167ZM8.83334 13.9167C6.02589 13.9167 3.75 11.6408 3.75 8.83334H2.25C2.25 12.4692 5.19746 15.4167 8.83334 15.4167V13.9167ZM3.75 8.83334C3.75 6.02589 6.02589 3.75 8.83334 3.75V2.25C5.19746 2.25 2.25 5.19746 2.25 8.83334H3.75ZM8.83334 3.75C11.6408 3.75 13.9167 6.02589 13.9167 8.83334H15.4167C15.4167 5.19746 12.4692 2.25 8.83334 2.25V3.75ZM12.4697 13.5303L16.6363 17.697L17.697 16.6363L13.5303 12.4697L12.4697 13.5303Z"
            fill="#807D7E"
          />
        </svg>
        <input class="search" type="search" placeholder="Search" />
      </div>

      <div class="header__icons">
        <button class="icon">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="8" fill="#F6F6F6" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.9949 16.9301C20.4953 15.1826 17.9948 14.7125 16.116 16.3127C14.2372 17.9129 13.9727 20.5884 15.4481 22.481C16.6749 24.0545 20.3873 27.3732 21.6041 28.4474C21.7402 28.5675 21.8083 28.6276 21.8877 28.6512C21.957 28.6718 22.0328 28.6718 22.1021 28.6512C22.1815 28.6276 22.2495 28.5675 22.3857 28.4474C23.6024 27.3732 27.3149 24.0545 28.5416 22.481C30.017 20.5884 29.7848 17.8961 27.8737 16.3127C25.9626 14.7294 23.4944 15.1826 21.9949 16.9301Z"
              stroke="#807D7E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="icon">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="8" fill="#F6F6F6" />
            <path
              d="M21.9999 23.6667C24.3011 23.6667 26.1666 21.8012 26.1666 19.5C26.1666 17.1988 24.3011 15.3333 21.9999 15.3333C19.6987 15.3333 17.8333 17.1988 17.8333 19.5C17.8333 21.8012 19.6987 23.6667 21.9999 23.6667ZM21.9999 23.6667C18.318 23.6667 15.3333 25.9053 15.3333 28.6667M21.9999 23.6667C25.6818 23.6667 28.6666 25.9053 28.6666 28.6667"
              stroke="#807D7E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button class="icon">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="8" fill="#F6F6F6" />
            <path
              d="M14.5 15.3333H15.0053C15.8558 15.3333 16.5699 15.9738 16.6621 16.8193L17.3379 23.0141C17.4301 23.8596 18.1442 24.5 18.9947 24.5H26.205C26.9669 24.5 27.6317 23.9834 27.82 23.2452L28.9699 18.7359C29.2387 17.6821 28.4425 16.6574 27.355 16.6574H17.5M17.5206 27.5208H18.1456M17.5206 28.1458H18.1456M26.6873 27.5208H27.3123M26.6873 28.1458H27.3123M18.6667 27.8333C18.6667 28.2936 18.2936 28.6667 17.8333 28.6667C17.3731 28.6667 17 28.2936 17 27.8333C17 27.3731 17.3731 27 17.8333 27C18.2936 27 18.6667 27.3731 18.6667 27.8333ZM27.8333 27.8333C27.8333 28.2936 27.4602 28.6667 27 28.6667C26.5398 28.6667 26.1667 28.2936 26.1667 27.8333C26.1667 27.3731 26.5398 27 27 27C27.4602 27 27.8333 27.3731 27.8333 27.8333Z"
              stroke="#807D7E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 32px;

  &__main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  &__categories {
    display: flex;
    flex-direction: row;
    gap: 50px;

    .category {
      color: #807d7e;
      font-family: Causten;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    :first-child {
      color: #3c4242;
      font-family: Causten;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  &__search {
    display: flex;
    width: 267px;
    padding: 12px 20px;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    background: #f6f6f6;

    .search {
      background: #f6f6f6;
      border: none;
      outline: none;
      text-align: start;
      font-family: Causten;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  &__icons {
    display: flex;
    gap: 12px;

    .icon {
      border: none;
      border-radius: 8px;
      background: #f6f6f6;
    }
  }
}
</style>