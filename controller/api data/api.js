module.exports=(router, api)=>{
    //which you need any function you can take from uncomments 
    //api all endpoint

    //                          summary
    // this prints a summary of global data
    async function summary(){
        try{
            var all_data=await api.all()
            console.log(all_data)
            return all_data
        }
        catch(err){
            console.log(err)
        }
    }
    // summary()


    // this prints a summary of global data with yesterdays data
    async function summary_yesterday(){
        try{
            var yes_rept=await api.yesterday.all()
            console.log(yes_rept)
        }
        catch(err){
            console.log(err)
        }
    }
    // summary_yesterday()



    //                                  country
    // all country data
    async function countries(){
        try{
            var country_data=await api.countries()
            for (var i in country_data){
                console.log(i, country_data[i])
                // break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // countries()


    // this prints an array of call infected countries sorted by cases
    async function countries_data(){
        try{
            var countries_data=await api.countries({sort:'cases'})
            for (var i in countries_data){
                console.log(countries_data[i])
                // break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // countries_data()


    // this prints a specified country you can also only one country({country: india})
    router.get('/countrieswise', (req,res)=>{
        api.countries({country:["india", "china"]})
        .then((data)=>{
            console.log(data)
            return res.send(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    


    //                   yesterday country
    // this prints an array of all infected countries with yesterdays data
    async function countries_yes(){
        try{
            var country_data=await api.yesterday.countries()
            for (var i in country_data){
                console.log(i, country_data[i])
                break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // countries_yes()


    // this prints an array of all infected countries with yesterdays data sorted by todays cases
    async function countries_yes_case(){
        try{
            var country_data=await api.yesterday.countries({sort:'cases'})
            for (var i in country_data){
                console.log(i, country_data[i])
                break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // countries_yes_case()


    // this prints a specified country with yesterdays data like ({courny: india})
    async function country_yes_case(){
        try{
            var country_data=await api.yesterday.countries({country:['india','china']})
            console.log(country_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // country_yes_case()



    //                      continents 
    // this prints an array of all infected continents
    router.get('/continents', (req,res)=>{
         async function continents(){
        try{
            var country_data=await api.continents()
            for (var i of country_data){
               var continents=i.continent
               console.log(continents)
               if(continents=="Asia"){
                   
               }
            }
            // console.log(continents)
            // return res.send(continents)
            // if(continents=="Asia"){
            //     console.log(asia_data)
            //     return res.send(asia_data)
            // }
        }
        catch(err){
            console.log(err)
        }
    }
    // continents()
    })
   


    // this prints an array of all infected continents sorted by cases
    async function continent_case(){
        try{
            var country_data=await api.continents({sort:'cases'})
            for (var j of country_data){
                console.log(country_data)
                break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // continent_case()


    // this prints a specified continent

    router.get('/asia', (req,body)=>{
        async function specific_continent(){
            try{
                var country_data=await api.continents({continent:'North America'})
                console.log(country_data)
            }
            catch(err){
                console.log(err)
            }
        }
        // specific_continent()
    })
    



    //                       Yesterday (Continents)
    // this prints an array of all infected continents with yesterdays data
    async function continent_yes(){
        try{
            var continent_data=await api.yesterday.continents()
            for (var i in continent_data){
                console.log(continent_data[i])   
                break   
            }   
        }
        catch(err){
            console.log(err)
        }
    }
    // continent_yes()


    // this prints an array of all infected continents with yesterdays data sorted by todays cases
    async function continent_today_case(){
        try{
            var continent_data=await api.yesterday.continents({sort:'cases'})
            for (var i in continent_data){
                console.log(continent_data[i])   
                break   
            }   
        }
        catch(err){
            console.log(err)
        }
    }
    // continent_today_case()


    // this prints a specified continent with yesterdays data
    // async function specific_continent(){
    //     try{
    //         var continent_data=await api.yesterday.continents({continent:'asia'})//userinput take
    //         console.log(continent_data)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    // specific_continent()



    //                   only USA States
    // this prints an array of US states and their data
    async function states_reports(){
        try{
            var states_data=await api.states()
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // states_reports()


    // this prints an array of US states and their data sorted by cases
    async function states_cases(){
        try{
            var states_data=await api.states({sort:'cases'})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // states_cases()


    // this prints an array of specified states and their data
    async function specific_states(){
        try{
            var states_data=await api.states({state:['michigan','new york']})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // specific_states()



    //                   Yesterday (States)
    // this prints an array of US states with yesterdays data
    async function states_reports_yes(){
        try{
            var states_data=await api.yesterday.states()
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // states_reports_yes()


    // this prints an array of US states with yesterdays data sorted by cases
    async function states_cases_yes(){
        try{
            var states_data=await api.yesterday.states({sort:'cases'})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // states_cases_yes()


    // this prints a specified state with yesterdays data
    async function specific_states_yes(){
        try{
            var states_data=await api.yesterday.states({state:['michigan','new york']})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // specific_states_yes()

    

    //                   JHUCSSE
    // this prints an array of infected countries
    async function jhucs_data(){
        try{
            var states_data=await api.jhucsse.all()
            for (var i in states_data){
                console.log(states_data[i])
                break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // jhucs_data()


    // this prints an array of infected US counties 
    async function jhucs_country(){
        try{
            var states_data=await api.jhucsse.counties()
            for (var i in states_data){
                console.log(states_data[i])
                break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // jhucs_country()


    // this prints an object with the counties provinces as arrays
    async function counties_provinces(){
        try{
            var states_data=await api.jhucsse.counties({county:['abbeville','acadia']})
            for (var i in states_data){
                console.log(states_data[i])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // counties_provinces()



    // Historical
    // this prints the global timeline
    async function historical_report(){
        try{
            var states_data=await api.historical.all()
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // historical_report()


    // this prints an array of infected countries and their timeline
    async function infected_countries(){
        try{
            var states_data=await api.historical.countries()
            for (var j in states_data){
                console.log(states_data[j])
                break
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // infected_countries()


    // this prints a specified country and its timeline for the last 10 days (use -1 to get all data)
    async function specified_country(){
        try{
            var states_data=await api.historical.countries({country:'china', days:10})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // specified_country()



    // this prints a specified province of a specified country and its timeline
    async function specified_province(){
        try{
            var states_data=await api.historical.countries({country:'china', province:['hubei','anhui']})
            for (var index in states_data){
                console.log(states_data[index])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // specified_province()



    //                        New York Times Data (USA)
    // this prints a timeline of data from the US
    async function us_data(){
        try{
            var states_data=await api.nyt.usa()
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // us_data()


    // this prints an array of timelines of all infected US states
    async function us_state(){
        try{
            var states_data=await api.nyt.states()
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // us_state()


    // this prints a timeline of a specified US state
    async function specific_us_state(){
        try{
            var states_data=await api.nyt.states({state:'illinois'})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // specific_us_state()


    async function infected_US_counties(){
        try{
            var states_data=await api.nyt.counties({county:'cook'})
            console.log(states_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // infected_US_counties()



    //                          Mobility Data (Apple)
    async function apple_data(){
        try{
            var states_data=await api.apple.countries()
            // console.log(states_data)
            var all_data=await api.apple.mobilityData({country:'india', subregion:'all'})
            console.log(all_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // apple_data()



    //                      Official Government Data all data imporant
    // this prints a list of available country names
    async function country_name(){
        try{
            var states_data=await api.gov()
            console.log(states_data)
            var india_data=await api.gov('India')
            console.log(india_data)
        }
        catch(err){
            console.log(err)
        }
    }
    // country_name()
}