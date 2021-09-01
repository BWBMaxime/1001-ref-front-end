<template>
  <div class="w-full mb-20 flex border-smoke">
    <div class="carousel mr-28 ml-28 w-1/2">
      <div class="carousel-inner relative overflow-hidden">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div
          class="carousel-item absolute opacity-0 bg-center"
          style="
            height: 500px;
            background-image: url(https://cdn.bioalaune.com/img/article/thumb/900x500/35913-bienvenue-ferme-carte-interactive-acheter-directement-chez-producteur.webp);
          "
        ></div>

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0 bg-center"
          style="
            height: 500px;
            background-image: url(https://cdn.bioalaune.com/img/article/thumb/900x500/35913-bienvenue-ferme-carte-interactive-acheter-directement-chez-producteur.webp);
          "
        ></div>

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0"
          style="
            height: 500px;
            background-image: url(https://mdbootstrap.com/img/new/slides/054.jpg);
          "
        ></div>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-white
                hover:text-yellow-600
              "
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-white
                hover:text-yellow-600
              "
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-white
                hover:text-yellow-600
              "
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>
    <div class="w-1/2 mr-28 ml-28 text-center">
      <div class="text-center"><h1 class="shadow-md">C'est Quoi ?</h1></div>
      <p class="text-lg leading-relaxed mt-6 mb-4 text-900">
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at. I will be the leader of a company that ends up being worth billions
        of dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at. I will be the leader of a company that ends up being worth billions
        of dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section : [
        {
          "title": "C'est Quoi ?",
          "description" :" I will be the leader of a company that ends up being worth billions of ....."
        
        },

      ],
      imgcarousel : [
        {
          "first": "",
          "second":"",
          "third":""
        },
      ]
    }
  },
};
</script>
<style scoped>
.border-smoke {
  border: whitesmoke 1px solid;
  padding: 15px;
}
.carousel-indicators {
  position: absolute;
}

.margin {
  margin-top: 2em;
  width: 65%;
}

.shadow-md {
  color: #f2ba52;
  font-size: 50px;
  font-weight: bold;
}
.text-h2 {
  color: #000000;
  font-size: 40px;
  font-weight: bold;
}
h3 {
  color: #000000;
  font-size: 30px;
  font-weight: bold;
}
h4 {
  color: #f2ba52;
  font-size: 20px;
  font-weight: bold;
}
.btn {
  background: #f2ba52;
  color: #2c3e50;
}
.width-carousel {
  width: 70em;
}
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
