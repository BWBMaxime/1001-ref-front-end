<template>
<div class="carousel grid ml-28 mr-28 ">
        <div class="carousel-inner relative overflow-hidden col-5 ">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-11" name="carousele" aria-hidden="true" hidden=""
            checked="checked">
          <div class="carousel-item absolute opacity-0 bg-center" style="height:500px; background-image: url(https://mdbootstrap.com/img/new/slides/052.jpg)">
          
          </div>
          <label for="carousel-3"
            class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-22"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-22" name="carousele" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0 bg-center" style="height:500px; background-image: url(https://mdbootstrap.com/img/new/slides/043.jpg)">
          </div>
          <label for="carousel-11"
            class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-33"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!--Slide 3-->
          <input class="carousel-open" type="radio" id="carousel-33" name="carousele" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:500px; background-image: url(https://mdbootstrap.com/img/new/slides/054.jpg)">
          </div>
          <label for="carousel-22"
            class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-11"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-11"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-22"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-33"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol>
      
        </div>
      </div>

   <div class="grid grid-cols-4 gap-4">
       <div class=" margin style-div-title text-center col-start-2 col-end-8">
          <div class=" text-center"><h1 class="shadow-md">For Who ?</h1></div>
          
          <p class="text-lg leading-relaxed mt-6 mb-4 text-900 ">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
              I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.  I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </div>
      </div>
        
</template>

<script>
export default {

}
</script>

<style scoped>

.margin{
  margin-top: 2em;
  width:65%;
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
.width-carousel{
  width:70em;
}
.carousel-open:checked+.carousel-item {
          position: static;
          opacity: 100;
        }
      
        .carousel-item {
          -webkit-transition: opacity 0.6s ease-out;
          transition: opacity 0.6s ease-out;
        }
      
        #carousel-11:checked~.control-1,
        #carousel-22:checked~.control-2,
        #carousel-33:checked~.control-3 {
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
      
        #carousel-11:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
        #carousel-22:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
        #carousel-33:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
          color: #2b6cb0;
          /*Set to match the Tailwind colour you want the active one to be */
        }
</style>