const TOKEN = "6235379673:AAF-TjGqKIvp6M-SJeSk9Co9KsWFlRfhQDM";

const bot = new Bot(TOKEN, 1317467730);
/*
bot.getUpdates()
    .then(res => {
        console.log(res.result);
    })
*/
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("nameInput");
    const number = document.getElementById("numberInput");
    const comment = document.getElementById("commentInput");

    const text = "Имя: " +
                name.value +
                "%0A" +
                "Номер или ссылка: " +
                number.value +
                "%0A" +
                "Комментарий: " +
                comment.value;

    bot.sendMessage(text)
        .then(console.log('message sent'));

    name.value = '';
    number.value = '';
    comment.value = '';
})
