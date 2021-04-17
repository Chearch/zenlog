<template>
  <div class="bg-gray-100 text-black dark:bg-gray-800 dark:text-gray-100">
    <header class="masthead">
      <p class="masthead-intro">Hi, I'm</p>
      <hr class="intro_border" />
      <h1 class="masthead-heading">Zen du</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section id="about" class="about-section">
      <h1><span>About Me</span></h1>
      <div class="content">
        <img
          class="pic"
          src="@/assets/image/photo1.jpg"
        />
        <div class="int">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut erat vel metus dapibus molestie. In hac habitasse platea dictumst.
          Etiam sit amet eleifend arcu, at vehicula eros. Nulla vestibulum
          euismod sem, eget tempus odio condimentum non. Suspendisse nisi ante,
          luctus in egestas a, mollis id elit. Proin eget sodales erat, nec
          maximus orci. Vivamus tempus metus eget metus auctor ornare. Proin
          quis ultricies ante. Pellentesque dignissim nec eros at ullamcorper.
          Etiam ultrices ante in tempor hendrerit.
        </div>
      </div>
    </section>

    <section id="works" class="works-section">
      <h1>Works</h1>
      <div class="main-grid">
        <img id="item-1" class="grid_images" src="@/assets/image/coding1.jpg" />
        <img id="item-1" class="grid_images" src="@/assets/image/coding2.jpg" />
        <img id="item-1" class="grid_images" src="@/assets/image/coding3.jpg" />
        <img id="item-1" class="grid_images" src="@/assets/image/coding4.webp" />
      </div>
    </section>
    <section id="contact" class="contact-section">
      <h1>Contact</h1>
      <form action="index.html" method="post">
        <fieldset>
          <label for="name">Name</label>
          <input type="text" id="name" name="user_name" />
          <label for="mail">Email</label>
          <input type="email" id="mail" name="user_email" />
          <label for="message">Message</label>
          <textarea id="message" name="user_message"></textarea>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </section>
    <footer class="content-footer"></footer>
  </div>
</template>

<script>
export default {};
</script>
<style lang='scss' scoped>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css");

* {
  box-sizing: border-box;
}
h1 {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  border-bottom: solid black;
  padding: 1em 2rem;
  margin: 0 auto;
  text-align: center;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #ffffff;
}
p {
  /* Typography Declarations */
  font-weight: 300;
  letter-spacing: 0.05em;
  text-align: left;
}

/*--HEADING----------*/

.masthead-heading,
.masthead-intro,
.content-footer {
  text-align: center;
}

.masthead {
  padding: 17em 0;
  background-image: url("../../assets/image/aboutme1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 100vh;
  min-height: 900px;

  .masthead-intro {
    margin-bottom: 0.1em;
    font-family: "Raleway", sans-serif;
    font-size: 2em;
    color: #ffffff;
    text-align: center;
    padding: 1rem 4rem;
  }

  .intro_border {
    color: #fff;
    width: 180px;
    height: 3px;
    border-style: solid;
  }

  .masthead-heading {
    margin-top: 0.2em;
    padding-top: 0.1em;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 6em;
    color: #ffffff;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: none;
  }

  nav {
    text-align: center;
    top-margin: 4rem;
    li {
      display: inline-block;
      margin: 1em;
      border-style: solid;
      border-width: 0.2em;
      border-color: white;
      padding: 0.5em 1.5em;
      font-family: "Raleway", sans-serif;
      font-size: 1.2em;
      color: #ffffff;
      font-weight: bold;
    }
  }
}

.about-section,
.works-section,
.contact-section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  padding-top: 1em;
  padding-bottom: 5em;
  overflow: auto;
}

/* 关于我 */
.about-section {
  max-width: 68em;
  .content {
    display: flex;
    justify-content: space-around;
    padding: 2rem 0 0;

    .pic {
      width: 40%;
      height: auto;
    }
    .int {
      width: 40%;
      height: 100%;
      margin: auto 0;
    }
  }
}

/*----------WORKS SECTION ----------*/

.works-section {
  max-width: 68em;
  .main-grid {
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    .grid_images {
      width: 48%;
      padding: 1rem;
    }
    img{
      height: 20rem;
    }
  }
}

/*--------contact form--------------*/

.contact-section {
  max-width: 38em;
  form {
    fieldset {
      margin-bottom: 30px;
      border: none;
    }

    button {
      padding: 15px;
      text-align: center;
      width: 90%;
      font-family: "Raleway", sans-serif;
      text-color: white;
      text-transform: uppercase;
      background-color: rgb(0, 32, 53);
      color: white;
      margin-left: 20px; /* better way to center elements buttton? */
    }

    max-width: 900px;
    margin: 10px auto;
    padding: 10px 20px;
    input[type="text"],
    input[type="email"],
    textarea,
    select {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      height: auto;
      padding: 15px;
      width: 100%;
      background-color: #e8eeef;
      color: #8a97a0;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
      margin-bottom: 30px;
    }
  }
}

/*------footer-------*/

.content-footer {
  background-image: url("../../assets/image/aboutme1.jpg");
  height: 160px;
}

/* The animation code */
@keyframes icons {
  from {
    padding-bottom: 60px;
  }
  to {
    padding-bottom: 37px;
  }
}
</style>