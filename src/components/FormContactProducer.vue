<template>
    <div class="mx-auto flex flex-col w-full lg:w-2/3 justify-center">
        <div class="container w-full px-4">
            <div class="flex flex-wrap justify-center pt-20">
                <div class="w-full lg:w-2/3 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                        <div class="flex-auto p-5 lg:p-10">
                            <h4 class="text-2xl mb-4 text-black font-semibold">Contact</h4>
                            <form id="contactForm" action="" method="">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="message">Contacter "nom du producteur"
                                    </label>
                                    <textarea maxlength="300" name="message" id="message" rows="4"
                                    cols="100"
                                    class="border-0 px-3 py-3 bg-gray-200 text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                    placeholder="Tapez votre message.." required>
                                    </textarea>
                                </div>
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="phone">Laissez votre numéros de téléphone (facultatif)
                                    </label>
                                    <input type="tel" name="phone" id="phone" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                                    bg-gray-200 text-gray-800 outline-none focus:bg-gray-300" placeholder="00 11 22 33 44 "
                                    style="transition: all 0.15s ease 0s;"
                                    />
                                </div>
                                <div class="text-center mt-6">
                                    <button id="feedbackBtn"
                                    class="bg-yellow-600 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="submit" style="transition: all 0.15s ease 0s;">Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>


</style>