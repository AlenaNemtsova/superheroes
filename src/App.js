import './App.css';
import Superhero from './components/superhero';

function App() {
  return (
    <div className="App">
      <Superhero url="./assets/img/batman.jpg" name="Бэтмен" alter="Брюс Уэйн" power="интеллект, обширные познания, знания боевых искусств, ловкость"></Superhero>
      <Superhero url="./assets/img/superman.jpg" name="Супермен" alter="Кларк Кент" power="непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"></Superhero>
      <Superhero url="./assets/img/iron-man.jpg" name="Железный человек" alter="Тони Старк" power="высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"></Superhero>
      <Superhero url="./assets/img/spider-man.jpg" name="Человек-паук" alter="Питер Паркер" power="сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"></Superhero>
      <Superhero url="./assets/img/captain-america.jpg" name="Капитан Америка" alter="Стивен Роджерс" power="сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"></Superhero>
      <Superhero url="./assets/img/thor.jpg" name="Тор" alter="нет; полное имя — Тор Одинсон" power="все, что может бог, плюс молот Мьелнир"></Superhero>
      <Superhero url="./assets/img/halk.jpg" name="Халк" alter="Брюс Беннер" power="сверхчеловеческая сила искорость, выносливость, полет"></Superhero>
      <Superhero url="./assets/img/wonder-woman.jpg" name="Чудо-женщина" alter="Диана Принс" power="сверхчеловеческая сила искорость, выносливость, полет"></Superhero>
    </div>
  );
}

export default App;
