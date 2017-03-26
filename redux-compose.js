/*
* from right to left,For example ,compose(f,g,h) is identical to doing (...args) => f(g(h(...args)))
* */

export default function compse(...funcs){
    if(funcs.length === 0){
        return arg => arg;
    }
    if(funcs.length === 1){
        return funcs[0]
    }

    const last = funcs[funcs.length -1];
    const rest = funcs.slice(0,-1);
    return (...args) => rest.reduceRight((composed,f)=>f(composed),last(...args));
}

const demo = (composed,f)=>{
    f(composed);
    return last(...args);
}
compose(fn1,fn2,fn3)()



//redux 调用 compose：

//applyMiddleware.js
dispatch = compose(fn1,fn2,fn3,fn4)(store.dispatch);