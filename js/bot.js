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

    const text = "Имя: " +
                document.getElementById("nameInput").value +
                "%0A" +
                "Номер или ссылка: " +
                document.getElementById("numberInput").value +
                "%0A" +
                "Комментарий: " +
                document.getElementById("commentInput").value;

    bot.sendMessage(text);
})