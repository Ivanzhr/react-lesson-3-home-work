import React from 'react';
import allpic from './Allpic'

function App() {
  const styleForH = { textAlign: 'center' };

  return (
    <>
      <h1 style={styleForH}>Imagine Dragons</h1>
      <p>Imagine Dragons — американський попрок-гурт, утворений 2008 року в Лас-Вегасі, штат Невада. До складу колективу входять вокаліст Ден Рейнольдс, гітарист Вейн Сермон, басист і клавішник Бен МакКі та Ден Платцман на ударних. Перша хвиля успіху досягла Imagine Dragons після релізу синглу «It's Time», який передував виходу дебютної студійної платівки Night Visions. Американський журнал Billboard назвав їх найяскравішими новими зірками 2013 року, а журнал Rolling Stone назвали їх сингл «Radioactive» найбільшим рок-хітом року. Другий студійний альбом Smoke + Mirrors очолив чарти у США, Канаді та Великій Британії[1]. Після короткої перерви гурт представив третю платівку Evolve у 2017 році, два сингли із якої — «Believer» і «Thunder» — очолили чарти. Попри комерційний успіх усіх альбомів, гурт отримує змішані відгуки від критиків</p>
      <h3 style={styleForH}>Склад Гурту</h3>
      <ul>
        <li>Ден Рейнольдс — вокал, бас-барабан, малий барабан, акустична гітара</li>
        <li>Бен МакКі — бас-гітара, бек-вокал, клавішні, акустична бас-гітара, електрична мандоліна, бас-барабан</li>
        <li>Вейн Сермон — гітара, альт, бек-вокал, том-том, акустична гітара, електрична мандоліна, бас-барабан</li>
        <li>Ден Платцман — ударні, віолончель, бек-вокал, кахон, акустична гітара, малий барабан </li>
      </ul>
      <h3 style={styleForH}>Студійні альбоми</h3>
      <ul style= {{listStyleType: 'none'}}>
      {allpic.map((item) => (
          <li key={item.id}>
            <h4>{item.description}</h4>
            <img src={item.url} alt={item.description} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
