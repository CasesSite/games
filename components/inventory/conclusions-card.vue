<template>
  <div class="card">
    <div class="card-wrapper_image">
      <img :src="imageSrc" alt="Item image" class="card-image" />
      <div class="card-info">
        <h4>{{ title }}</h4>
        <p>{{ subtitle }}</p>
      </div>
    </div>

    <div class="card-price">
      <span>{{ price }}</span>
    </div>
    <div class="card-status">
      <img :src="imageIcon" alt="Item icon" class="card-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageIcon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      validator: (value) => ["success", "pending", "failed"].includes(value),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @include flex-space;
  border-radius: 20px;
  background-color: #161953;
  padding: 20px;
  color: white;
  max-width: 440px;
  width: 100%;
  height: 100%;
}

.card-image {
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 113px;
  height: 109px;
  background-image: url("assets/img/inventory/eclipse-blu.svg");
}
.card-icon {
  width: 35px;
  height: 35px;
}
.card-wrapper_image {
  @include flex-space;
  gap: 15px;
}

.card-info {
  flex: 1;
  margin-left: 1rem;
}

.card-price {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-status {
}
</style>
