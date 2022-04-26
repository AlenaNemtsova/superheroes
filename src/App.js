import './App.css';
import Superhero from './components/superhero';

const superheroes = [
  { url: "./assets/img/batman.jpg", name: "Бэтмен", alter: "Брюс Уэйн", power: "интеллект, обширные познания, знания боевых искусств, ловкость" },
  { url: "./assets/img/superman.jpg", name: "Супермен", alter: "Кларк Кент", power: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм" },
  { url: "./assets/img/iron-man.jpg", name: "Железный человек", alter: "Тони Старк", power: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы" },
  { url: "./assets/img/spider-man.jpg", name: "Человек-паук", alter: "Питер Паркер", power: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины" },
  { url: "./assets/img/captain-america.jpg", name: "Капитан Америка", alter: "Стивен Роджерс", power: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя" },
  { url: "./assets/img/thor.jpg", name: "Тор", alter: "нет; полное имя — Тор Одинсон", power: "все, что может бог, плюс молот Мьелнир" },
  { url: "./assets/img/halk.jpg", name: "Халк", alter: "Брюс Беннер", power: "сверхчеловеческая сила искорость, выносливость, полет" },
  { url: "./assets/img/wonder-woman.jpg", name: "Чудо-женщина", alter: "Диана Принс", power: "сверхчеловеческая сила искорость, выносливость, полет" }
];


function App() {
  return (
    <div className="App">
      {
        superheroes.map((superhero) => <Superhero url={superhero.url} name={superhero.name} alter={superhero.alter} power={superhero.power}></Superhero>
        )
      }
    </div>
  );
}

export default App;
