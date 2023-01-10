<template>
  <div class="btm-nav">
    <button class="text-warning">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </button>
    <button class="text-warning active">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    <div class="dropdown dropdown-top dropdown-end flex">
      <button class="text-warning active">
      <label tabindex="0" class="btn btn-ghost text-warning px-auto">
        <Icon name="ant-design:contacts-outlined" size="24" />
      </label>
      </button>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a><Icon name="logos:whatsapp-icon"/>WhatsApp</a></li>
        <li><a>profi.ru</a></li>

        <li><a href="https://t.me/hel8er" target="_blank"><Icon name="logos:telegram"/>Telegram</a></li>
      </ul>
    </div>
    <!-- <button class="text-warning">
  </button> -->
  </div>
</template>