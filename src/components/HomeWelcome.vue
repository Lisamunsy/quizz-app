<template>
  <div class="home-content">
    <h1>Let's take a quizz !</h1>
    Choose one of the following subject:
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.home-content ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
}
.home-content li {
  width: 150px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #c46f2b;
  color: #151547;
}
</style>
