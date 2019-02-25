<template>
  <v-container fluid grid-list-md >


<transition mode="out-in"
appear
enter-active-class="animated bounceIn"
leave-active-class="animated bounceOut" 
:duration="500">

    <v-layout row wrap justify-center v-if="show" key="info">
      <v-flex d-flex xs12 sm6 md5 >
        <v-card color="purple" dark height="249px" >
          <v-card-title primary class="">Author: {{ paginatedData[0].data.author }}</v-card-title>
          <v-img
             :src="paginatedData[0].data.thumbnail "
             height="100px"
             contain
          ></v-img>
          <v-card-text>{{ paginatedData[0].data.title.slice(0,90)  }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark height="121px" width="320px">
             <v-card-title primary class="">Author: {{ paginatedData[1].data.author }}</v-card-title>
              <v-card-text>{{ paginatedData[1].data.title.slice(0,90)  }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 >
                <v-card color="#757575" dark height="121px" width="320px">
                 <v-card-title primary class="">Author: {{ paginatedData[2].data.author }}</v-card-title>
                  <v-card-text>{{ paginatedData[2].data.title.slice(0,90)  }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark height="249px">
         <v-card-title primary class="">Author: {{ paginatedData[3].data.author }}</v-card-title>
         <v-img
             :src="paginatedData[3].data.thumbnail "
             height="100px"
             contain
          ></v-img>
          <v-card-text>{{ paginatedData[3].data.title.slice(0,90) }}...</v-card-text>
        </v-card>
      </v-flex>
    </v-layout> 
    </transition>


<transition mode="out-in"
appear
enter-active-class="animated bounceIn"
leave-active-class="animated bounceOut" 
:duration="500">

     <v-layout row wrap justify-center v-if="show" key="info">
       <v-flex d-flex xs12 sm6 md3 child-flex>
        <v-card color="green lighten-2" dark justify-center height="250px">
         <v-card-title primary class="">Author: {{ paginatedData[4].data.author }}</v-card-title>
         <v-img
             :src="paginatedData[4].data.thumbnail"
             height="100px"
             contain
          ></v-img>
          <v-card-text>{{ paginatedData[4].data.title.slice(0,90) }}...</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="blue" dark>
          <v-card-title primary class="">Author: {{ paginatedData[5].data.author }}</v-card-title>
          <v-img
             :src="paginatedData[5].data.thumbnail"
             height="100px"
             contain
          ></v-img>
          <v-card-text>{{ paginatedData[5].data.title.slice(0,90) }}...</v-card-text>
        </v-card>
      </v-flex>
            <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark height="121px" width="320px">
             <v-card-title primary class="">Author: {{ paginatedData[6].data.author }} </v-card-title>
              <v-card-text>{{ paginatedData[6].data.title }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex  xs12>
                <v-card color="#757575"  dark height="121px" width="320px">
                 <v-card-title primary class="">Author: {{ paginatedData[8].data.author }}</v-card-title>
                  <v-card-text>{{ paginatedData[7].data.title }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
   </transition>

<transition mode="out-in"
appear
enter-active-class="animated bounceIn"
leave-active-class="animated bounceOut" 
:duration="500">
    <v-layout row wrap justify-center v-if="show" key="info">
         <v-flex d-flex xs12 sm6 md6>
        <v-card color="purple" dark height="200px">
          <v-card-title  class="">Author: {{ paginatedData[8].data.author }}</v-card-title>
          <v-img
             :src="paginatedData[8].data.thumbnail "
             height="100px"
             contain
          ></v-img>
          <v-card-text>{{ paginatedData[8].data.title.slice(0,90)  }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark height="200px">
          <v-card-title class="">Author: {{ paginatedData[9].data.author }}</v-card-title>
          <v-img
             :src="paginatedData[9].data.thumbnail"
             height="80px"
             contain
          ></v-img>
          <v-card-text>{{ paginatedData[9].data.title.slice(0,90) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </transition>
  


    <div class="pagination">
     <v-layout align-center justify-space-between row fill-height mb-5>
        <v-btn 
        color="error" 
        fab
        dark 
        v-if="this.GET_POSTS !== null" 
        :disabled="pageNumber === 1" 
        @click="prevPage">
        <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-btn  
        color="error" 
        fab 
        dark 
        v-if="this.GET_POSTS !== null" 
        :disabled="pageNumber === 5" 
        @click="nextPage">
        <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
    </div> 
  </v-container>
</template>

<script>
import axios from 'axios' 

import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex';

export default {
  name: 'posts',
    data() {
      return {
         posts: null,
         pageNumber: 1,
         showLeft: false,
         showRight: false,
         show: true
         
  }

},
 props:{
  
    size:{
      type:Number,
      required:false,
      default: 10
    }
},

 methods: {
...mapMutations(['SET_POSTS']),
...mapActions(['API_POSTS']),      

          callFunction: function () {
            setTimeout(function () {
             this.show = true
            }, 100);  

        },

  nextPage(){
           this.show = !this.show;
           this.pageNumber++;

  },
    
  prevPage(){
           this.show = !this.show;
           this.pageNumber--; 

                
  }
      
}, // methods
 created() {
            this.API_POSTS();


  
},  // created
 computed:{
  ...mapGetters(['GET_POSTS']),

      pageCount(){

          if (this.GET_POSTS !== null || undefined) {
                 let l = this.GET_POSTS.length,
                     s = this.size;
              return Math.ceil(l/s);  
          }           
      },
  
paginatedData(){

     const start = (this.pageNumber-1) * this.size; 
     const   end = start + this.size; 
     if (this.GET_POSTS !== null || undefined) {
        return this.GET_POSTS.slice(start, end);     
     }
    }  
} //computed 
}

</script>

<style>

 .pagination {
  margin-top: -430px;
}

</style>



