if(isNaN(a)||isNaN(b)){
        res.status(400).json({
            err:"Invalid parameters"