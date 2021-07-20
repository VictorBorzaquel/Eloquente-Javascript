{
    // Métodos
    let coelho = {};
    coelho.diz = linha => console.log(`O coelho diz "${linha}"`);

    coelho.diz("Estou vivo.");

    function speak(line) {
        console.log(`The ${this.type} rabbit says "${line}"`)
    }

    let whiteRabbit = { type: "white", speak };
    let fatRabbit = { type: "fat", speak };

    whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
    fatRabbit.speak("I could sure use a carrot right now.");

    speak.apply(fatRabbit, ["Burp!"]);
    // → The fat rabbit says 'Burp!'
    speak.call({ type: "old" }, "Oh my.");
    // → The old rabbit says 'Oh my.'
}
{
    // Prototypes
    
}