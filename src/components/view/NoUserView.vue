<template>
  <div class="text-center">
    <div class="flex-column">
      <img class="p-4" src="../../assets/logo.svg" width="300" height="300" alt="biogit logo">
      <h1 class="align-self-center display-4 p-4">Scientific publishing for the internet age</h1>
    </div>
    <div class="p-4">
      <blockquote class="blockquote text-center">
        <p class="mb-0">
          The way we currently share scientific knowledge is broken. It is no longer suited for a
          world where millions of researchers need to collaborate and share information in real time.
        </p>
      </blockquote>
      <blockquote class="blockquote text-center">
        <p class="mb-0">
          We use content curation, collaboration, and sharing principles common across the modern
          internet to make browsing, sharing, and collaborating on research trivial.
        </p>
      </blockquote>
    </div>
    <div class="d-flex justify-content-around">
      <div class="card text-center  text-white bg-primary" style="width: 20rem;">
        <div class="card-header">
          No mor gatekeepers
        </div>
        <div class="card-body">
          <p class="card-text">Everybody has the right to review and comment on someone's research, the crowd will curate opinions</p>
        </div>
      </div>
      <div class="card text-center text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Clear versioning</div>
        <div class="card-body">
          <p class="card-text">Easily track every iterations of an idea</p>
        </div>
      </div>
      <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Fair (automatically calculated) contribution credits</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">
            Every contributors to a project is listed according to their activity in a project
          </p>
        </div>
      </div>
    </div>
    <div>
      <h3>There is nothing revolutionary about the ideas we are promoting,
      they are ubiquitous across the internet.</h3>
      <h3>Here's some of the places we were inspired by:</h3>
      Stackoverflow /github reddit twitter ect...
    </div>
    <div>
      Support
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoUserView'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mini-div{
    width: 200px;
    height: 200px;
  }
</style>
