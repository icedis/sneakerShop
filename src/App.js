import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from  './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            currentItems:[],
            items: [
                {
                    id: 1,
                    title:'Kobe 8 Protro Court Purple',
                    img: 'kobe8.jpg',
                    desc: 'lorem',
                    category: 'in-door',
                    price: '69.99'
                },
                {
                    id: 2,
                    title:'Travis Scott х Air Jordan 1 Low Reverse Mocha',
                    img: 'travisj.jpg',
                    desc: 'lorem',
                    category: 'collab',
                    price: '189.99'
                },
                {
                    id: 3,
                    title:'LeBron 21 Violet Dust',
                    img: 'lebron.jpg',
                    desc: 'lorem',
                    category: 'in-door',
                    price: '99.99'
                },
                {
                    id: 4,
                    title:'Precision 6',
                    img: 'prec.jpg',
                    desc: 'lorem',
                    category: 'out-door',
                    price: '39.99'
                },
                {
                    id: 5,
                    title:'P. LaMelo Ball MB 02 Rick and Morty',
                    img: 'lamelo.jpg',
                    desc: 'lorem',
                    category: 'in-door',
                    price: '120.99'
                },
                {
                    id: 6,
                    title:'AJ 36 Black Infrared',
                    img: 'aj.jpg',
                    desc: 'lorem',
                    category: 'out-door',
                    price: '58.99'
                },
                {
                    id: 7,
                    title:'LeBron 19 “Leopard”',
                    img: 'lebronewhite.jpg',
                    desc: 'lorem',
                    category: 'in-door',
                    price: '76.99'
                },
                {
                    id: 8,
                    title:'P. LaMelo Ball MB.01 Rick And Morty',
                    img: 'rickmorty.jpg',
                    desc: 'lorem',
                    category: 'collab',
                    price: '65.99'
                },
                {
                    id: 9,
                    title:'Kyrie 8 Infinity',
                    img: 'ping.jpg',
                    desc: 'lorem',
                    category: 'in-door',
                    price: '89.99'
                },
                {
                    id: 10,
                    title:'Kobe Prelude 6',
                    img: 'kobepeg.jpeg',
                    desc: 'lorem',
                    category: 'collab',
                    price: '78.99'
                },
                {
                    id: 11,
                    title:'Zoom Freak 4 «Unbelievable»',
                    img: 'zoom.jpeg',
                    desc: 'lorem',
                    category: 'in-door',
                    price: '28.99'
                },
                {
                    id: 12,
                    title:'AJ 4 "Industrial Blue"',
                    img: 'AJ4.jpeg',
                    desc: 'lorem',
                    category: 'out-door',
                    price: '45.55'
                },
            ],
            ShowFullItem: false,
            fullItem:{}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render(){
        return (
         <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem = {this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}/>

          {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem = {this.onShowItem} item={this.state.fullItem}/>}
          <Footer/>
         </div>
        )
    }

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({ShowFullItem: !this.state.ShowFullItem})
    }

    chooseCategory(category){
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }
    
    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el =>{
            if(el.id === item.id)
              isInArray = true
        })
        if(!isInArray)
        this.setState({orders:[...this.state.orders, item]})
    }
}
export default App;