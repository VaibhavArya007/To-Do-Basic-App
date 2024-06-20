const zod= require("zod");

const create_todo=zod.object({
    title: zod.string(),
    desc: zod.string()
})

const update_todo=zod.object({
    id: zod.string(),
})


module.exports ={
    create_todo:create_todo,
    update_todo:update_todo
}
/*
{
title: string
desc:string
}

{
id:string
}
*/
