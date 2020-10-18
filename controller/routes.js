module.exports=(router, api)=>{

    router.get('/home', (req,res)=>{
        console.log("api working...")
        return res.sendFile(__dirname + "/views/fronted.html")
    })

    // router.get('/continents', (req,res)=>{
    //     console.log("server is listening this port")
    //     return res.sendFile(__dirname + "/views/test.html")
    // })



    // all country data
    router.get('/', (req,res)=>{
        async function countries(){
            try{
                var country_data=await api.countries()
                console.log(country_data)
                console.log("api is working ,,...")
                return res.render(__dirname+'/views/countries.ejs', {data: country_data})
            }
            catch(err){
                console.log(err)
            }
        }
        countries()
    })



     //                          Mobility Data (Apple)
    router.get('/states', (req,res)=>{
        async function country_name(){
            try{
                // var states_data=await api.gov()
                // console.log(states_data)
                var india_data=await api.gov('india')
                var states_data=JSON.parse(JSON.stringify(india_data.states))
                console.log(states_data)
                return res.render(__dirname+'/views/states.ejs', {data: states_data})
            }
            catch(err){
                console.log(err)
            }
        }
        country_name()
    })
}