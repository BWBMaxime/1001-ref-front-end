<template>
<div id="wrapper" class=" px-4 py-4 mx-auto">
            <div class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                <div id="jh-stats-positive" class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded" 
                :class="{'text-green-500': percentage>=0, 'text-red-500':percentage<0}">
                    <div>
                        <div>
                            <div class="flex items-center justify-center text-md">
                                <span class="font-bold">{{percentage}}%</span>
                                <div v-html="icon"></div>
                            </div>
                        </div>
                        <p class="text-3xl font-semibold text-center text-gray-800">{{datas.viewsCurrent}}</p>
                        <p class="text-lg text-center text-gray-500">Visite cette semaine</p>
                    </div>
                </div>
    
                <div id="jh-stats-negative" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        <div>

                        </div>
                        <p class="text-3xl font-semibold text-center text-gray-800">{{datas.favoriteTotal}}</p>
                        <p class="text-lg text-center text-gray-500">Favoris</p>
                        <p class="flex items-center justify-end text-grey-800 text-md">
                            <span class="font-bold">{{datas.favoritesCurrent}} cette semaine</span>
                        </p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        <div>
                            <p class="flex items-center text-center text-gray-500 text-md">
                                <span class ="text-center">Produit populaire</span>
                                
                            </p>
                        </div>
                        <p class="text-3xl font-semibold text-center text-yellow-600">{{datas.bestProduct.name}}</p>
                        <p class="text-lg text-center text-gray-800 font-bold">{{datas.bestProduct.clicks}} vues</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    data() {

        let datas = this.getDatas();
        let percentage = this.getPercentage(datas);
        let icon = this.getIcon(percentage);
        let color = this.getColor(percentage);

            return {
            datas,
            percentage,
            icon,
            color
        }

    },

    methods: {
        getDatas(){
            let datas =  
            
            {
                "viewsCurrent" : 500,
                "viewsLast" : 600,
                "favoritesCurrent": 79,
                "favoriteTotal":420,
                "bestProduct":
                    {
                        "name":"La Zigounette",
                        "clicks":666
                    }
                
            }
            

            return datas;
        },

        getPercentage(datas){
            let percentage = (datas.viewsCurrent-datas.viewsLast)/datas.viewsCurrent*100;
            
            if(percentage>=0) return "+"+percentage;
            else return percentage;
        },

        getIcon(percentage){
            if(percentage>0) return '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path class="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/></svg>';
            else return '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path class="heroicon-ui" d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z"/></svg>';
        },

        getColor(percentage){
            if(percentage>=0) return 'text-green-500';
            else 'text-red-500';
        }

    },

}
</script>

<style>

</style>