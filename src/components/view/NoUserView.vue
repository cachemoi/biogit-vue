<template>
  <div class="text-center">
    <div class="flex-column">
      <img class="p-4" src="../../assets/logo.svg" width="300" height="300" alt="biogit logo">
      <h1 class="align-self-center display-4 p-4">Scientific publishing for the internet age</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-center align-content-center bg-light
    border border-primary">
      <h3 class="m-5" style="width: 50rem">
        The way we currently share scientific knowledge is broken. It is no longer suited for a
        world where millions of researchers need to collaborate and share information in real time.
      </h3>
      <h3 class="m-5" style="width: 50rem">
        We use content curation, collaboration, and sharing principles common across the modern
        internet to make browsing, sharing, and collaborating on research trivial.
      </h3>
    </div>
    <div class="d-flex justify-content-around flex-wrap m-4">
      <div class="card text-center text-white bg-primary" style="width: 18rem">
        <div class="card-header">
          No more gatekeepers
        </div>
        <div class="card-body">
          <p class="card-text">Everybody has the right to review and comment on someone's research, the crowd will curate opinions</p>
        </div>
      </div>
      <div class="card text-center text-white bg-info" style="max-width: 18rem;">
        <div class="card-header">Clear versioning</div>
        <div class="card-body">
          <p class="card-text">Easily track every iterations of an idea</p>
        </div>
      </div>
      <div class="card text-white bg-success" style="max-width: 18rem;">
        <div class="card-header">Fair (automatically calculated) contribution credits</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">
            Every contributors to a project is listed according to their activity in a project
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center align-content-center bg-light border border-primary">
      <h3 class="m-4" style="width: 50rem">There is nothing revolutionary about the ideas we are promoting,
      they are ubiquitous across the internet.</h3>
    <h3 class="m-5" style="width: 50rem">Here are some of the places which inspire us:</h3>
    </div>
    <div class="d-flex pt-4 flex-wrap justify-content-center align-content-center">
      <div>
        <img class="m-3" height="80" width="80" alt="Stack overflow" src="../../assets/icons/stack-overflow.svg"/>
        <h4>Stackoverflow</h4>
      </div>
      <div>
        <img class="m-3" height="80" width="80" alt="Reddit" src="../../assets/icons/reddit.svg"/>
        <h4>Reddit</h4>
      </div>
      <div>
        <img class="m-3" height="80" width="80" alt="Github" src="../../assets/icons/github.svg"/>
        <h4>Github</h4>
      </div>
      <div>
        <img class="m-3" height="80" width="80" alt="Twitter" src="../../assets/icons/twitter.svg"/>
        <h4>Twitter</h4>
      </div>
      <div>
        <img class="m-3" height="80" width="80" alt="Medium" src="../../assets/icons/medium.svg"/>
        <h4>Medium</h4>
      </div>
    </div>
    <h2 class="m-5">Team</h2>
    <div class="d-flex justify-content-center align-content-center flex-wrap">
      <div style="width: 18rem">
        <img class="rounded-circle m-3"
            src="../../assets/teamPics/maxPic.jpg"
            alt="maxPic" height="150" width="150">
          <h3 class="m-2">Max</h3>
          <h6 class="m-2" >One with the code</h6>
          <p class="text-muted m-2">m.bautzer@biogit.me</p>
      </div>
      <div style="width: 18rem">
        <img class="rounded-circle m-3"
            src="../../assets/teamPics/maxPic.jpg"
            alt="maxPic" height="150" width="150">
          <h3 class="m-2">Max</h3>
          <h6 class="m-2" >One with the code</h6>
          <p class="text-muted m-2">m.bautzer@biogit.me</p>
      </div>
      <div style="width: 18rem">
        <img class="rounded-circle m-3"
            src="../../assets/teamPics/maxPic.jpg"
            alt="maxPic" height="150" width="150">
          <h3 class="m-2">Max</h3>
          <h6 class="m-2" >One with the code</h6>
          <p class="text-muted m-2">m.bautzer@biogit.me</p>
      </div>
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
