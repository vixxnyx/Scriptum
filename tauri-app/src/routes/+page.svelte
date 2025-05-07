<script>
  import "../style.css";
  let videoElement;

  function onVideoEnd() {
    videoElement.currentTime = 0;
    videoElement.play();
  }
</script>

<slot />

<main class="page-container">
  <video 
    bind:this={videoElement} 
    autoplay 
    muted 
    playsinline 
    onended={onVideoEnd} 
    class="background-video"
  >
    <source src="/frontEndVideo.mp4" type="video/mp4" />
  </video>

  <section class="app-container">
    <img src="/logo.png" alt="Scriptura Logo" class="logo"/>
    <h1>Welcome to <span class="highlight">Scriptum</span></h1>
    <p>Start reading, annotating, and creating.</p>
    <div class="buttons">
      <button class="primary">Open PDF</button>
      <button class="secondary">New Note</button>
    </div>
  </section>
</main>


