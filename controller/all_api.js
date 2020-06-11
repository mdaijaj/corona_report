module.exports=(router, api)=>{

    // this prints a specified country you can also only one country({country: india})
    router.get('/all_data', (req,res)=>{
        api.countries({country:["india", "china", "japan", "pakistan", "singapore","dubai"]})
        .then((data)=>{
            console.log(data)
            return res.send(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })



   // this prints a specified continent of seven
   router.get('/asia_continent', (req,res)=>{
        async function specific_continent(){
            try{
                var country_data=await api.continents({continent:'Asia'})
                var result=JSON.stringify(country_data)
                return res.render(__dirname+'/views/index.ejs', {data: result})
            }
            catch(err){
                console.log(err)
            }
        }
        specific_continent()
    })

    //north_america
    router.get('/north_america', (req,res)=>{
        async function north_america_continent(){
            try{
                var country_data=await api.continents({continent:'North America'})
                var json_data=JSON.stringify(country_data)
                return res.render(__dirname+'/views/index.ejs', {data: json_data})
            }
            catch(err){
                console.log(err)
            }
        }
        north_america_continent()
    })

    //Africa
    router.get('/africa_continent', (req,res)=>{
    async function africa_continent(){
        try{
            var country_data=await api.continents({continent:'Africa'})
            var json_data=JSON.stringify(country_data)
            return res.render(__dirname+'/views/index.ejs', {data: json_data})
        }
        catch(err){
            console.log(err)
        }
    }
    africa_continent()
})

    //south america
    router.get('/south_america', (req,res)=>{
    async function south_america(){
        try{
            var country_data=await api.continents({continent:'South America'})
            var json_data=JSON.stringify(country_data)
            return res.render(__dirname+'/views/index.ejs', {data: json_data})
        }
        catch(err){
            console.log(err)
        }
    }
    south_america()
})

 //south america
    router.get('/australia', (req,res)=>{
        async function australia_continents(){
            try{
                var country_data=await api.continents({continent:'Australia/Oceania'})
                // console.log(country_data)
                var json_data=JSON.parse(country_data)
                console.log(json_data)
                // console.log(JSON.parse(country_data))
                // return res.render(__dirname+'/views/index.ejs', {data: country_data})
            }
            catch(err){
                console.log(err)
            }
        }
        australia_continents()
    })

    //south america
    router.get('/europe', (req,res)=>{
        async function europe_continent(){
            try{
                var country_data=await api.continents({continent:'Europe'})
                var json_data=JSON.stringify(country_data)
                return res.render(__dirname+'/views/index.ejs', {data: json_data})
            }
            catch(err){
                console.log(err)
            }
        }
        europe_continent()
    })

}
