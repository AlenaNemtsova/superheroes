import '../../style/App.css';
import Superhero from '../superhero/superhero';

const superheroes = [
  { "id": "1", "url": "./assets/img/batman.jpg", "name": "Бэтмен", "alter": "Брюс Уэйн", "power": "интеллект, обширные познания, знания боевых искусств, ловкость" },
  { "id": "2", "url": "./assets/img/superman.jpg", "name": "Супермен", "alter": "Кларк Кент", "power": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм" },
  { "id": "3", "url": "./assets/img/iron-man.jpg", "name": "Железный человек", "alter": "Тони Старк", power: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы" },
  { "id": "4", "url": "./assets/img/spider-man.jpg", "name": "Человек-паук", "alter": "Питер Паркер", "power": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины" },
  { "id": "5", "url": "./assets/img/captain-america.jpg", "name": "Капитан Америка", "alter": "Стивен Роджерс", "power": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя" },
  { "id": "6", "url": "./assets/img/thor.jpg", "name": "Тор", "alter": "нет; полное имя — Тор Одинсон", "power": "все, что может бог, плюс молот Мьелнир" },
  { "id": "7", "url": "./assets/img/halk.jpg", "name": "Халк", "alter": "Брюс Беннер", "power": "сверхчеловеческая сила искорость, выносливость, полет" },
  { "id": "8", "url": "./assets/img/wonder-woman.jpg", "name": "Чудо-женщина", "alter": "Диана Принс", "power": "сверхчеловеческая сила искорость, выносливость, полет" }
];


function App() {
  return (
    <div className="App">
      {
        superheroes.map((superhero) => <Superhero key={superhero.id} url={superhero.url} name={superhero.name} alter={superhero.alter} power={superhero.power}></Superhero>
        )
      }
    </div>
  );
}

export default App;
