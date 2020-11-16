<template>
  <div :class="$style.layer" @click="clickAwayListener($event)">
    <div :class="$style.blured"/>
    <form :class="$style.form" ref="form" @submit.prevent="submitHandler">
      <div :class="$style.bar">
        <h2 :class="$style.title">Add new vehicle</h2>
        <div :class="$style.close" @click.stop="closeForm">
          <img src="@/assets/images/close.png" alt="close"/>
        </div>
      </div>
      <label :class="$style.imageInput">

        <input type="file"/>
        <div :class="$style.image">
          <img src="@/assets/images/addImage.png" alt="add"/>
        </div>
      </label>
      <input
        :class="$style.name"
        placeholder="Name"
        type="text"
        v-model.trim="name"/>
      <input :class="$style.description" placeholder="Description" type="text" v-model.trim="description"/>
      <div :class="$style.price">
        <input placeholder="Rent price" type="number" v-model="rentPrice"/>
      </div>
      <button :disabled="!isValid" class="button" :class="isValid ?'':$style.buttonDisabled " type="submit">Complete
      </button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data: () => ({
    name: '',
    description: '',
    rentPrice: ''
  }),
  computed: {
    isValid() {
      return this.name.trim() && this.description.trim() && this.rentPrice
    }
  },
  methods: {
    ...mapMutations(['closeForm', 'addVehicle']),
    clickAwayListener(event) {
      if (!this.$refs.form.contains(event.target)) {
        this.closeForm()
      }
    },
    submitHandler() {
      const vehicle = {
        id: Date.now().toString(),
        name: this.name,
        description: this.description,
        rent: this.rentPrice,
        type: 'custom',
        preview: 'https://loremflickr.com/900/900/airship'
      }
      this.addVehicle(vehicle)

      this.name = ''
      this.description = ''
      this.rentPrice = ''
    }
  },


}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}


.form {
  position: fixed;
  left: 0;
  right: 0;
  height: auto;
  min-height: 70%;
  //top: 20%;
  bottom: 0;
  background: var(--background-main);
  border-radius: 1.5rem 1.5rem 0 0;
  flex-direction: column;
  padding: 1.75rem 1rem calc(1.75rem - 5%) 1rem;
  @include for-mobile-up {
    width: 50%;
    border-radius: 3rem;
    min-width: 500px;
    max-height: none;
    right: -5%;
    top: 0;
    max-width: 860px;
    margin-left: auto;
    min-height: 700px;
    height: 100%;
    padding: 4rem calc(5% + 2.5rem) 4rem 2.5rem;
    opacity: 1;
    display: flex;


  }

  button {
    margin-top: 2.5rem;
    width: 100%;
    @include for-mobile-only {
      margin-top: 1.5rem;
    }
  }

}

@media (min-width: 1300px) {
  .form {
    padding: 4rem calc(5% + 4.5rem) 4rem 4.5rem;
  }
}

.bar {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  @include for-tablet-landscape-up {
    margin-bottom: 2.5rem;
  }
}


.title {
  font-size: 40px;
  line-height: 48px;
  color:  var(--main-text);
  @include for-mobile-only {
    font-size: 24px;
    line-height: 29px;
  }
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 16px;
  background: var(--background-side);

  @include interactive(0.9, 1.1, 100ms);

  @include for-mobile-only {
    border-radius: 8px;
    width: 2rem;
    height: 2rem;
  }
}

.imageInput {
  width: 100%;
  height: 50%;
  min-height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-side);
  position: relative;

  @include for-mobile-only {
    max-height: 260px;
  }

  input {
    width: 100%;
    height: 100%;
    background: var(--background-side);
    border-radius: 26px;
    outline: none;
    transform: scale(0.9);
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--background-side);
    border-radius: 24px;

    img {
      background: var(--background-main);
      padding: 1rem;
      border-radius: 1rem;
    }
  }
}

.name {
  width: 100%;
  height: 3.5rem;
  border-radius: 12px;
  padding: 1.4rem 1.5rem;
  background:  var(--background-side);
  color: var(--side-text);
  font-size: 16px;
  line-height: 14px;
  margin-top: 1.5rem;
  @include for-mobile-only {
    margin-top: 1rem;
    height: 3.25rem;
    font-size: 14px;
    line-height: 12px;
  }
}

.description {
  width: 100%;
  height: 3.5rem;
  border-radius: 12px;
  padding: 1.4rem 1.5rem;
  background: var(--background-side);
  color: var(--side-text);;
  font-size: 16px;
  line-height: 14px;
  margin-top: 1.5rem;
  @include for-mobile-only {
    margin-top: 1rem;
    height: 3.25rem;
    font-size: 14px;
    line-height: 12px;
  }
}

.price {
  position: relative;

  input {
    width: 100%;
    height: 3.5rem;
    border-radius: 12px;
    padding: 1.4rem 1.5rem;
    background: var(--background-side);
    color: var(--side-text);;
    font-size: 16px;
    line-height: 14px;
    margin-top: 1.5rem;


    @include for-mobile-only {
      margin-top: 1rem;
      height: 3.25rem;
      font-size: 14px;
      line-height: 12px;
    }
  }

  &:after {
    content: '$/h';
    color: var(--disabled);
    position: absolute;
    top: 50%;
    transform: translateY(50%);
    right: 1rem;
  }
}

.buttonDisabled {
  cursor: not-allowed;
  background-color:  var(--disabled);

  &:hover {
    transform: scale(1);
    opacity: 1;
  }


}

.blured {
  width: 100%;
  height: 100%;
  background: rgba(52, 79, 106, 0.32);
  backdrop-filter: blur(8px);
  -webkit-filter: blur(32px);
  -ms-filter: blur(32px);
}
</style>
