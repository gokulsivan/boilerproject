'use strict';


const express = require('express');
const router = express.Router();
const Redis = require("redis");

const RedisClient = Redis.createClient();
RedisClient.on('error', (err) => console.log('Redis Client Error', err));
RedisClient.connect();
router.get("/getdata", async(req,res) => {
    try {
        console.log(req.body.name);
        await RedisClient.set("name", "ryan");
        const result = await RedisClient.get("name");
        await client.disconnect();
        return result;
    }catch(err){
        res.json(err);
    }
    }
);

module.exports = router;