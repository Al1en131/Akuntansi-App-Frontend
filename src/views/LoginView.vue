<script setup>
import InputField from "../components/InputField.vue";
</script>
<template>
  <div class="h-screen w-full md:pl-36 relative">
    <div class="flex justify-center -z-50 items-center h-screen">
      <div class="w-9/12 max-lg:hidden block space-y-16">
        <img src="/assets/icon/logo.svg" class="" alt="" />
        <img src="/assets/img-auth.png" class="" alt="" />
      </div>
      <div class="w-3/12 max-lg:w-screen h-screen">
        <img src="/assets/topographic.png" class="h-full -z-50" alt="" />
      </div>
    </div>
    <div
      class="absolute px-6 py-5 max-lg:py-3 z-50 md:right-36 md:w-[600px] -translate-y-1/2 top-1/2"
    >
      <div
        class="bg-white border border-[#D0D0D3] p-10 max-lg:p-4 z-50 max-lg:space-y-4 space-y-10 rounded-3xl"
        style="
          box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
            0px 10px 32px -4px rgba(24, 39, 75, 0.1);
        "
      >
        <div class="space-y-4 max-lg:space-y-2">
          <div class="hidden py-5 max-lg:flex justify-center">
            <img src="/assets/img-auth.png" class="w-[152.88px]" alt="" />
          </div>
          <p class="text-xl max-lg:text-lg">
            Selamat Datang di <span class="text-[#F44336]">Core Jurnal</span>
          </p>
          <h1 class="text-6xl max-lg:text-3xl font-bold text-black">Log-In</h1>
          <p class="text-[#B9B8B8] text-base max-lg:text-sm">
            Login untuk mengakses akun Anda. Masukkan email dan kata sandi di
            bawah ini.
          </p>
        </div>
        <div>
          <form action="" class="space-y-10 max-lg:space-y-4">
            <div class="space-y-5 max-lg:space-y-2">
              <div class="flex flex-col space-y-2">
                <label
                  for="email"
                  class="text-lg max-lg:text-base font-semibold text-black"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  class="rounded-xl border border-primary max-lg:text-sm py-5 max-lg:py-3 px-6 text-base w-full"
                />
              </div>
              <div class="flex flex-col space-y-2">
                <label
                  for="password"
                  class="text-lg max-lg:text-base font-semibold text-black"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  class="rounded-xl border max-lg:text-sm border-primary py-5 max-lg:py-3 px-6 text-base w-full"
                />
              </div>
            </div>
            <div class="space-y-4 max-lg:space-y-2">
              <button
                type="submit"
                class="bg-secondary text-center w-full text-white text-2xl max-lg:text-lg py-3 rounded-xl"
              >
                Sign Up
              </button>
              <p class="text-center text-[#73727A]">OR</p>
              <a
                href=""
                class="bg-[#EDEFFF] text-center py-3 max-lg:text-lg justify-center rounded-xl text-xl text-primary flex gap-2 items-center"
                ><img src="/assets/google.svg" alt="" />Sign In With Google</a
              >
            </div>
          </form>
        </div>
        <p class="text-[#8D8D8] text-base">
          Belum punya akun ? <a href="/signup" class="text-[#F44336]">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>
