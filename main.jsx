function App() {
  const itemData = [
    {
      id: 0,
      name: 'レンチ(wrench)',
      img: './img/wrench.png',
      info: '石の歯車1 + 鉄インゴット3'
    },
    {
      id: 1,
      name: '木の歯車(Wooden Gear)',
      img: './img/wooden_gear.png',
       info: '棒4'
    }
  ];
  
  const [items, setItems] = React.useState(itemData);

  return (
    <div>
      <Itemlist items={items}/>
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);