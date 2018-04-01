async function sendToServer(data) {
    console.log('Отправка данных на сервер: ', data);

    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Овет от сервера получен');

            resolve(data);
        }, 100);
    })
}

async function test() {
    const data = await sendToServer('mydata');

    console.log(`event got ${data}`);
}

export default sendToServer;