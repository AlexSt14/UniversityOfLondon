// TUTORIAL WATCHED FOR setting up React and creating components:
// https://www.youtube.com/watch?v=h3LpsM42s5o&ab_channel=WittCode
// https://www.youtube.com/watch?v=vZ9jcHQEVKw&ab_channel=WebDevWithArtisan


const React = window.React;
const ReactDOM = window.ReactDOM;
let scrolled = 500;
//Class based App component 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpuData: [],
      cardsToShow: 13,
      searchQuery: "", //Value to be searched
      selectedItems: [],
      filepath: "../db/cpu.json",
      cpu: "../db/cpu.json",
      monitor: "../db/monitor.json"
    };
  }
  //Handling user scroll of page
  handleScroll = () => {
    if (window.scrollY > scrolled) {
      this.loadMoreCards();
    }
  }

  //Handling the selection of items
  handleSelectedItem = (item) => {
    this.setState((prevState) => ({
      selectedItems: [...prevState.selectedItems, item],
    }));
  };

  //Handling removing items from the list
  handleRemoveItem = (item) => {
    this.setState((prevState) => ({
      selectedItems: prevState.selectedItems.filter((selectedItems) => selectedItems!==item)
    }));
  };

  //Loading more cards if user scrolls more
  loadMoreCards = () => {
    this.setState(prev => ({
      cardsToShow: prev.cardsToShow + 5,
    }));
    scrolled = scrolled+500
  }

  //Changing json data file
  changeDB = (path) => {
    this.setState ({
      filepath: path,
      searchQuery: ""      
    });
    let uInput = document.getElementById("searchInput");
    uInput.value = "";
  }

  //Getting the data and listening to scroll event
  componentDidMount() {
    this.fetchData(this.state.filepath);
    window.addEventListener('scroll', this.handleScroll);
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", this.handleSearch);
    
    const monitors = document.getElementById("monitor").addEventListener("click", () => this.changeDB(this.state.monitor));
    const cpus = document.getElementById("cpu").addEventListener("click", () => this.changeDB(this.state.cpu));
    console.log(monitors);
  }

  //Refetching data when filepath changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filepath !== this.state.filepath) {
      this.fetchData(this.state.filepath);
    }
  }

  //Fetching data from json files
  fetchData = (filepath) => {
    fetch(this.state.filepath)
      .then(res => res.json())
      .then(data => this.setState({ cpuData: data }));
  }

  //Cleaning up click event listener 
  componentWillUnmount() {
    const searchButton = document.getElementById("searchButton");
    searchButton.removeEventListener("click", this.handleSearch);
  }
  //This will handle getting the search input and setting the state
  handleSearch = (event) => {
    event.preventDefault();  //Preventing form submission

    //Getting the user input
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value;
    
    //Updating state with the search query
    this.setState({ searchQuery });
  }

  //Filtering the results
  filterCpuData = () => {
    const { cpuData, searchQuery } = this.state;
    return cpuData.filter((cpu) => 
      cpu.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  //Firstly slicing the data to only show the first bit, will then continue to add cards once scrolling, also searching for user input if needed
  render() {
    const filteredCards = this.filterCpuData();
    const cards = filteredCards.slice(0, this.state.cardsToShow);
    console.log(cards);
    return (
      <div className="row parent">
        <div className="col-sm-6">
          {cards.map(cpu => (
            <div key={cpu.name} className="col-sm-12">
              <Card
                key={cpu.name}
                name={cpu.name} 
                price={cpu.price} 
                coreCount={cpu.core_count}
                coreClock={cpu.core_clock}
                tdp={cpu.tdp}
                onSelectItem={this.handleSelectedItem}
              />
            </div>
          ))}
        </div>
        <div className="col-sm-6 rightListContainer" id="asd">
        <RightList 
        selectedItems={this.state.selectedItems}
        onRemoveItem={this.handleRemoveItem}
        />
        </div>
      </div>
    );
  }
}

//Bootstrap card component
function Card({name, price, coreCount, coreClock, tdp, onSelectItem}) {
  return (
 
      <div className="card" style={{width: "18rem;"}}>
    
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price for this {name} is £{price}</p>
        <p className="card-text">It has {coreCount} cores running at {coreClock} Ghz and has a TDP of W{tdp}</p>
        <a href="#" className="btn btn-primary" onClick={() => onSelectItem({name, price})}>Select Item</a>
      </div>
      </div>
   
  )
} 

//Right list of items selected for building a pc build
class RightList extends React.Component {
  calculateTotalPrice = () => {
    const {selectedItems} = this.props;
    let totalPrice = 0;
    selectedItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };
  render() {
    const {selectedItems, onRemoveItem} = this.props;
    return (
      <div>
        <h2>Selected Items</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.name}><span>{item.name}</span> <button onClick={() => onRemoveItem(item)} type="button" class="btn btn-outline-secondary btnRightList mx-3">X</button></li>
          ))}
        </ul>
        <p>Total Price: £{this.calculateTotalPrice()}</p>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//Search button click event
const button = document.getElementById("searchButton");
//Displaying the searched word next to the search button
const handleButtonClick = () => {
  const searchedInput = document.getElementById("searchInput").value;
  const searchedDiv = document.getElementById("searchedInput") //.innerHTML(<p>You have searched for: </p>+ searchedInput);
  const paragraph = document.createElement("p");
  paragraph.textContent = "You have searched for: "+ searchedInput;
  //Removing a paragraph if there exists one
  if(searchedDiv.firstChild) {
    searchedDiv.firstChild.remove();
  }
  searchedDiv.appendChild(paragraph);
}

button.addEventListener("click", handleButtonClick);
