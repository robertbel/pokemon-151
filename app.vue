<template>
  <div class="color-page" :style="{ backgroundColor: currentColor }">
    <main>
      <section>
        <ColorBox color="#333333" />
        <div class="sub one">sub</div>
        <div class="sub two">sub</div>
      </section>
      <div class="spacer"></div>
      <section>
        <ColorBox color="#ff0000" />
        <div class="sub one">sub</div>
        <div class="sub two">sub</div>
      </section>
      <div class="spacer"></div>
      <section>
        <ColorBox color="#00ff00" />
        <div class="sub one">sub</div>
        <div class="sub two">sub</div>
      </section>
      <div class="spacer"></div>
      <section>
        <ColorBox color="#0000ff" />
        <div class="sub one">sub</div>
        <div class="sub two">sub</div>
      </section>
      <div class="spacer"></div>
      <section>
        <ColorBox color="#ffff00" />
        <div class="sub one">sub</div>
        <div class="sub two">sub</div>
      </section>
      <div class="spacer"></div>
    </main>
  </div>
</template>

<script setup>
const currentColor = useCurrentColor();
</script>

<style scoped>
.color-page {
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease;
  transition-delay: 0.2s;
}

main {
  max-width: 800px;
  margin-inline: auto;
}

section {
  padding-block: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 200px;
  gap: 1rem;
  grid-template-areas:
    "block block"
    "sub1 sub2";
}

.sub {
  background-color: #fff;
  border-radius: 2rem;
  padding: 3rem;
}

.sub.one {
  grid-area: sub1;
}

.sub.two {
  grid-area: sub2;
}

.spacer {
  height: 100vh;
}
</style>
