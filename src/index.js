import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js";
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoDumbledore = new Mago('Dumbledore', 'Fogo', 9, 8)
const arqueiroOliver = new Arqueiro('Oliver', 15)
const arqueiroMagoAloy = new ArqueiroMago('Aloy', 8, 'Gelo', 6, 7)
const guerreiroKratos = new Guerreiro('Kratos', 8)

const personagens = [magoDumbledore, arqueiroOliver, arqueiroMagoAloy, guerreiroKratos];

new PersonagemView(personagens).render();
