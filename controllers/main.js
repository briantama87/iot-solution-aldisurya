const { json} = require('body-parser');

// Import the JSON File
const fileSalary = require('../public/JSON Files/salary_data.json').array;
const fileSensor = require('../public/JSON Files/sensor_data.json').array;

// Module to helping manipulate array
const _ = require('lodash');

// Module to fetching API
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const https = require('https');

module.exports = {
    async getSalary(req, res) {
        try {

            // GET Currency USD to IDR (Live Data) from resource with async function
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e4840cfd7emshae844cc01ee35ccp1367e0jsnf9d20ea5569c',
                    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
                }
            };

            const dollar = await fetch('https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=IDR&q=1.0', options);

            // Respond USD to IDR and convert to json to easily read
            const jsondollar = await dollar.json();

            // Add one field with Salary in USD value according to previous currency
            const idrtoUSD =  fileSalary.map(t1 => ({
                ...t1,
                salaryinUSD : t1.salaryInIDR / jsondollar
            }))


            // GET JSON file from instructions requirements
            const url = 'http://jsonplaceholder.typicode.com/users';

            const salary = await fetch(url);
            const fetchjson = await salary.json();
            
            // JOIN 2 Json file by Id with help of array map
            const result = fetchjson.map(a => ({...a, ...idrtoUSD.find(b => b.id === a.id)}));

            // Send the json data and render html source with ejs engine
            res.render('tabel/salarytable', {
                data: result
            });
            

            

        } catch {
            res.send('error');

        }
    },
    async sensorData(req, res) {
        try {

            // Convert the timestamps to day
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dateSensor = fileSensor.map(x => {
                
                const d = days[new Date(x.timestamp).getDay()];
                return {
                    ...x,
                    day: d
                }
            });


            // Group sensor data by day and roomArea
            const output = _.map(_.groupBy(dateSensor, 'roomArea'), (x, y) => {
                var temp = {};
                temp[y] = _.groupBy(x, 'day')
                return temp;
            });


            // Send the data through API to provide the data have correctly grouped
            res.json(output);

        } catch(err){
            res.json(err)
        }
    },

    async getsensor(req, res) {
        try {

            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dateSensor = fileSensor.map(x => {
                
                const d = days[new Date(x.timestamp).getDay()];
                return {
                    ...x,
                    day: d
                }
            });

            const output = _.map(_.groupBy(dateSensor, 'roomArea'), (x, y) => {
                var temp = {};
                temp[y] = _.groupBy(x, 'day')
                return temp;
            });


            // Make empty array to store the requirements data
            const temp1 = [];
            const maxTemroom1 = [];
            const minTemroom1 = [];
            const medTemroom1 = [];
            const avgTemroom1 = [];

            const hum1 = [];
            const maxHumroom1 = [];
            const minHumroom1 = [];
            const medHumroom1 = [];
            const avgHumroom1 = [];

            const temp2 = [];
            const maxTemroom2 = [];
            const minTemroom2 = [];
            const avgTemroom2 = [];
            const medTemroom2 = [];

            const hum2 = [];
            const maxHumroom2 = [];
            const minHumroom2 = [];
            const avgHumroom2 = [];
            const medHumroom2 = [];

            const temp3 = [];
            const maxTemroom3 = [];
            const minTemroom3 = [];
            const avgTemroom3 = [];
            const medTemroom3 = [];

            const hum3 = [];
            const maxHumroom3 = [];
            const minHumroom3 = [];
            const avgHumroom3 = [];
            const medHumroom3 = [];

            // Make a array of output data 
            const cobaku = [output[0].roomArea1.Sun, output[0].roomArea1.Mon, output[0].roomArea1.Tue, output[0].roomArea1.Wed, output[0].roomArea1.Thu, output[0].roomArea1.Fri, output[0].roomArea1.Sat];
            const cobaku1 = [output[1].roomArea2.Sun, output[1].roomArea2.Mon, output[1].roomArea2.Tue, output[1].roomArea2.Wed, output[1].roomArea2.Thu, output[1].roomArea2.Fri, output[1].roomArea2.Sat];
            const cobaku2 = [output[2].roomArea3.Sun, output[2].roomArea3.Mon, output[2].roomArea3.Tue, output[2].roomArea3.Wed, output[2].roomArea3.Thu, output[2].roomArea3.Fri, output[2].roomArea3.Sat];
            
            

            // Iterating the array to get data per roomArea
            for(var i=0; i < cobaku.length; i++){
                const tem1 = cobaku[i].map(x => {
                    return x.temperature
                });

                const hum1 = cobaku[i].map(x => {
                    return x.humidity
                })
                temp1.push(...tem1);
                hum1.push(...hum1);
                const sum1 = temp1.reduce((acc, val) => {return acc + val;}, 0);
                const sum2 = hum1.reduce((acc, val) => {return acc + val;}, 0);
                const jumlah1 = temp1.length;
                const jumlah2 = hum1.length;
                avgTemroom1.push(sum1/jumlah1);
                avgHumroom1.push(sum2/jumlah2);
                maxTemroom1.push(Math.max(...tem1));
                minTemroom1.push(Math.min(...tem1));
                maxHumroom1.push(Math.max(...hum1));
                minHumroom1.push(Math.min(...hum1));

            };
            for(var i=0; i < cobaku1.length; i++){
                const tem2= cobaku1[i].map(x => {
                    return x.temperature
                });

                const hum2 = cobaku1[i].map(x => {
                    return x.humidity
                })
                temp2.push(...tem2);
                hum2.push(...hum2);
                const sum1 = temp2.reduce((acc, val) => {return acc + val;}, 0);
                const sum2 = hum2.reduce((acc, val) => {return acc + val;}, 0);
                const jumlah1 = temp2.length;
                const jumlah2 = hum2.length;
                avgTemroom2.push(sum1/jumlah1);
                avgHumroom2.push(sum2/jumlah2);
                maxTemroom2.push(Math.max(...tem2));
                minTemroom2.push(Math.min(...tem2));
                maxHumroom2.push(Math.max(...hum2));
                minHumroom2.push(Math.min(...hum2));
            };
            for(var i=0; i < cobaku2.length; i++){
                const tem3= cobaku2[i].map(x => {
                    return x.temperature
                });
    
                const hum3 = cobaku2[i].map(x => {
                    return x.humidity
                })
                temp3.push(...tem3);
                hum3.push(...hum3);
                const sum1 = temp3.reduce((acc, val) => {return acc + val;}, 0);
                const sum2 = hum3.reduce((acc, val) => {return acc + val;}, 0);
                const jumlah1 = temp3.length;
                const jumlah2 = hum3.length;
                avgTemroom3.push(sum1/jumlah1);
                avgHumroom3.push(sum2/jumlah2);
                maxTemroom3.push(Math.max(...tem3));
                maxHumroom3.push(Math.max(...hum3));
                minTemroom3.push(Math.min(...tem3));
                minHumroom3.push(Math.min(...hum3))};


            
            // Send the data to view engine
            res.render('sensor/chart', {
                datatempmax1 : maxTemroom1,
                datatempmin1 : minTemroom1,
                datatempavg1 : avgTemroom1,

                datahummax1: maxHumroom1,
                datahummin1: minHumroom1,
                datahumavg1 : avgHumroom1,

                datatempmax2: maxTemroom2,
                datatempmin2: minTemroom2,
                datatempavg2: avgTemroom2,


                datahummax2 : maxHumroom2,
                datahummin2 : minHumroom2,
                datahumavg2 : avgHumroom2,

                datatempmax3: maxTemroom3,
                datatempmin3: minTemroom3,
                datatempavg3 : avgTemroom3,


                datahummax3 : maxHumroom3,
                datahummin3 : minHumroom3,
                datahumavg3 : avgHumroom3,


            });
        } catch(err) {
            res.send(err);
        }
    }

}