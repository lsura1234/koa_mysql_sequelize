import Router from 'koa-router'
import user from '../database/models/user'

const router = new Router();


router.post('/', async(ctx, next) => {
    const {username,password,id} = ctx.request.body
     let data = await user.create({id,username,password});
    ctx.body = data
 });
 
 router.post('/select', async(ctx, next) => {
     let data = await user.findAll();
    ctx.body = data
 });
 router.post('/delete',async(ctx,next) =>{
     let {username} = ctx.request.body
     await user.destroy({where:{username}}).then((rowDelete) => {
         if(rowDelete === 1){
             ctx.body = 'Delete success'
         }
         else{
            ctx.body = 'username not fount'
         }
        })
    })
    router.post('/update',async(ctx,next) => {
         let {password,username,id} = ctx.request.body
       await user.update(
            {password,username},
            {where:{id}}
        ).then((rowUpdate) => {
          
            if(rowUpdate[0]===0)
             {
                console.log('aaaa') 
                ctx.body = 'fail'
            }
            else 
                ctx.body = 'success'
        }) 
    })



 module.exports = router;

