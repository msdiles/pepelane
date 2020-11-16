<template>
  <div :class="$style.navbar">
    <div :class="$style.navbarLeft">
      <NuxtLink tag="div" to="/" :class="$style.logo" class="us-none">
        <img src="@/assets/images/Logo.svg" alt="logo">
      </NuxtLink>
      <div :class="$style.logoTitle"><p>Pepelane</p></div>
      <div :class="$style.promotion">
        <p class="hide show-on-tablet-landscape-up">
          World's first affordable airsharing
        </p>
      </div>
    </div>

    <div :class="$style.navbarRight">
      <div :class="$style.nightMod" class="us-none" @click="changeTheme">
        <img src="@/assets/images/night.png" alt="night-mod">
        <p class="hide show-on-desktop-up">Night mod</p>
      </div>
      <div :class="$style.message" class="us-none">
        <img src="@/assets/images/message.png" alt="message">

      </div>
      <div :class="$style.notification" class="us-none">
        <div :class="$style.notificationActive">
          <img src="@/assets/images/notification.png" alt="notification">
        </div>
      </div>

      <div :class="$style.username" class="hide show-on-phone-or-tablet-portrait-up">Bessie Copper</div>
      <div :class="$style.avatar" class="us-none">
        <img
          src="@/assets/images/avatar.png"
          alt="avatar"/>

      </div>
    </div>
  </div>


</template>

<script>
export default {
  methods: {
    async changeTheme() {
      console.log('ASDas')
      const theme = await localStorage.getItem('theme')
      if (theme === 'light-theme') {
        await localStorage.setItem('theme', 'dark-theme')
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
      } else {
        await localStorage.setItem('theme', 'light-theme')
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
      }
    }
  }
}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 108px;
  width: calc(100% - 2rem);
  max-width: 1730px;
  margin: 0 1rem;
  background-color: var(--background-main);
  @include for-mobile-up {
    margin: 0 auto;
    width: 90%;
    height: 144px;
  }

  .navbarLeft {
    float: left;
    display: flex;
    align-items: center;
    width: 85%;
    @include for-mobile-only {
      width: 95%;
    }
    @include for-tablet-landscape-up {
      width: 110%;
    }
  }

  .navbarRight {
    float: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    @include for-mobile-only {
      width: 85%;
    }
    @include for-tablet-landscape-up {
      width: 90%;
    }
  }
}

.logo {
  width: 3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;

  &:hover {
    img {
      transform: rotate(-360deg);
      transition: transform 1000ms;
    }
  }

  &:active {
    img {
      transform: scale(0.8);
      transition: transform 200ms;
    }
  }

  @include for-mobile-only {
    width: 2rem;
    height: 2rem;
  }

  img {
    width: 100%;
    transition: transform 200ms;
  }
}


.logoTitle {
  margin-left: 5%;
  color: var(--main-text);
  font-weight: 700;
  font-size: 24px;

  @include for-mobile-only {
    font-size: 20px;
  }
}

.promotion {
  margin-left: 10%;
  color: var(--side-text);
  font-weight: 300;
  font-size: 16px;

}

.nightMod {
  margin-right: 5%;
  display: flex;
  align-items: center;
  height: 18px;
  @include for-mobile-only {
    img {
      width: 80%;
    }
  }

  @include interactive(1.05, 0.95, 100ms);

  @include for-desktop-up {
    margin-right: 16%;
  }

  p {
    margin-left: 16px;
    color: var(--side-text);
    font-weight: 300;
    font-size: 16px;
  }
}

.message {
  margin-right: 5%;
  height: 18px;
  display: flex;
  align-items: center;

  @include interactive(1.1, 0.9, 100ms);

  @include for-mobile-only {
    img {
      width: 80%;
    }
  }
}

.notification {
  position: relative;
  margin-right: 8%;
  height: 18px;

  @include interactive(1.1, 0.9, 100ms);

  @include for-mobile-only {
    img {
      width: 80%;
    }
  }

  .notificationActive::before {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 12.5px;
    width: 14px;
    height: 14px;

    @include for-mobile-only {
      left: 7px;
      width: 13px;
      height: 13px;
    }
  }

  .notificationActive::after {
    content: "";
    position: absolute;
    left: 80%;
    bottom: 80%;
    background: var(--secondary-side);
    width: 6px;
    height: 6px;
    border-radius: 50%;

    @include for-mobile-only {
      left: 57%;
      width: 5px;
      height: 5px;
    }
  }
}


.username {
  margin-right: 2.5%;
  color: var(--main-text);
  font-weight: 700;
  font-size: 16px;
}

.avatar {
  width: 3.5rem;
  height: 3.5rem;

  @include for-mobile-only {
    width: 2rem;
    height: 2rem;
  }

  img {
    width: 100%;
    border-radius: 50%;

    @include interactive(1.05, 0.95, 100ms);
  }
}


</style>
