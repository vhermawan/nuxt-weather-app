<script setup lang="ts">
  import { onMounted } from 'vue'
  
  let location = reactive({
    lat: null,
    long: null
  })

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  const showPosition = (position: any) => {
    location = {
      lat : position.coords.latitude,
      long : position.coords.longitude 
    }
  }

  const params = {
    lat: '',
    long: '',
    appid: '2d904571bd8cb0c63854351e9e1f9b64'
  }

  watch(location, async () => {
    if (location.lat !== '') {
      const { data, pending, error, refresh } = await useFetch('https://api.openweathermap.org/data/2.5/weather', {
        query: params,
      })

      console.log('data', data, pending)
    }
  })
  


  onMounted(() => {
    getLocation();
    console.log(`the component is now mounted.`)
  })

</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <div>
      <Icon name="ph:wind" color="black" />
    </div>
  </div>
</template>
