export async function setAsyncInterval(callback, ms) {
    while (true) {
        await new Promise(async resolve => {
            setTimeout(async () => {
                const cb_result = await callback();
                resolve(cb_result)
            }, ms)
        })
    }
} 