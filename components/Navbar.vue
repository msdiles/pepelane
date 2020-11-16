<template>

  <div :class="$style.navbar">
    <div :class="$style.navbarLeft">
      <div :class="$style.logo">
        <img src="@/assets/images/Logo.svg" alt="logo">
      </div>
      <div :class="$style.logoTitle"><p>Pepelane</p></div>
      <div :class="$style.promotion"><p>World's first affordable airsharing</p></div>
    </div>

    <div :class="$style.navbarRight">
      <div :class="$style.nightMod">
        <img src="@/assets/images/night.png" alt="night-mod">
        <p>Night mod</p>
      </div>
      <div :class="$style.message">
        <img src="@/assets/images/message.png" alt="message">

      </div>
      <div :class="$style.notification">
        <div :class="$style.notificationActive">
          <img src="@/assets/images/notification.png" alt="notification">
        </div>
      </div>

      <div :class="$style.username">Bessie Copper</div>
      <div :class="$style.avatar">
        <img
          src="@/assets/images/avatar.png"
          alt="avatar"/>

      </div>
    </div>
  </div>


</template>

<script>
export default {}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 144px;

  .navbarLeft {
    float: left;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .navbarRight {
    float: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
}

.logo {
  width: 48px;
  height: 48px;
  position: relative;

}


.logoTitle {
  margin-left: 5%;
  color: $base500;
  font-weight: 700;
  font-size: 24px;
}

.promotion {
  margin-left: 10%;
  color: $base300;
  font-weight: 300;
  font-size: 16px;

}

.nightMod {
  margin-right: 16%;
  display: flex;
  align-items: center;

  p {
    margin-left: 16px;
    color: $base300;
    font-weight: 300;
    font-size: 16px;
  }
}

.message {
  margin-right: 5%;
}

.notification {
  position: relative;
  margin-right: 8%;

  .notificationActive::before {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 12.5px;
    width: 14px;
    height: 14px;
  }

  .notificationActive::after {
    content: "";
    position: absolute;
    left: 80%;
    bottom: 80%;
    background: $secondary500;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}


.username {
  margin-right: 2.5%;
  color: $base500;
  font-weight: 700;
  font-size: 16px;
}

.avatar {
  img {
    border-radius: 50%;
  }
}
</style>
