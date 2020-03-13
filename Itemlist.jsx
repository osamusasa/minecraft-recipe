function Itemlist(props){
    const itemList = props.items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          img={item.img}
          info={item.info}
        />
    ));

    return <div className="itemlist">{itemList}</div>;
}