function App() {
  const itemDataTemplate = [{id: 0,name: '',img: '',info: ''}];
  const [items, setItems] = React.useState(itemDataTemplate);

  $.getJSON("./itemData.json", function(json){
    setItems(json);
  });

  return (
    <div>
      <Itemlist items={items}/>
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);