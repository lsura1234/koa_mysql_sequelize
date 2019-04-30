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



 module.exports = router;

