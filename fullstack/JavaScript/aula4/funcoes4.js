function tempo(nome, horario) {

    if (0 < horario < 12) {
        console.log("Bom Dia,", nome, "ainda é ", horario, "horas");
    } else if (12 <= horario < 18) {
        console.log("Boa Tarde,", nome, "são ", horario, "horas");
    } else {
        console.log("Boa Noite,", nome);
    }

}
tempo('Marcus', 17)
    //deu errado