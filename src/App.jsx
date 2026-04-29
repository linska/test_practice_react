import './App.scss'

import products from './api/products.json';
import categories from './api/categories.json';
import users from './api/users.json';

import {useState} from "react";
import {ProductList} from "./components/ProductList/index.js";
import {FilterByName} from "./components/FilterByName/index.js";

function App() {
  console.log('====================================================');
  console.log('==================== new render ====================');
  console.log('====================================================');
  console.log('product list: ', products);
  console.log('category list: ', categories);
  console.log('user list: ', users);

  const [nameFilter, setNameFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState([]);

  console.log('??????????? categoryFilter', categoryFilter)

  let productList = products.map((product) => {
    const categoryId = product.categoryId
    const category = categories.find((category) => category.id === categoryId);

    const userId = product.userId;
    const user = users.find((user) => user.id === userId);

    return {
      ...product,
      category,
      user,
    }
  })

  if (nameFilter !== null) {
    productList = productList.filter((product) => {
      return nameFilter === product.user.id
    })
  }

  if (searchFilter !== '') {
    productList = productList.filter((product) => {
      const name = product.name.toLowerCase();

      return name.includes(searchFilter);
    })
  }

  if (categoryFilter.length > 0) {
    productList = productList.filter((product) => {
      const categoryId = product.categoryId

      return categoryFilter.includes(categoryId);
    })
  }

  console.log('====================================================');
  console.log('productList', productList);

  function handleNameFilter(userId) {
    setNameFilter(userId)
  }

  function handleSearchFilter(value) {
    setSearchFilter(value.trim().toLowerCase());
  }

  function handleCategoryFilter(categoryId) {
    const filter = [...categoryFilter]

    if (filter.includes(categoryId)) {
      const index = filter.indexOf(categoryId);
      filter.splice(index, 1)
    } else {
      filter.push(categoryId);
    }

    setCategoryFilter(filter);
  }

  function handleResetFilter() {
    setNameFilter(null);
    setSearchFilter('');
    setCategoryFilter([]);
  }

  return (
    <div className="container">

      <h1>Demo</h1>

      <section className="filters">
        <h2>Filters</h2>

        <FilterByName users={users} handleNameFilter={handleNameFilter} />

        <div className="search_block">
          <input
            className="search"
            placeholder="Search"
            value={searchFilter}
            onChange={(event) => handleSearchFilter(event.target.value)}
          />
          <button onClick={() => handleSearchFilter('')}>clear</button>
        </div>

        <div className="filter_by_category">
          <button onClick={() => setCategoryFilter([])}>All</button>
          {categories.map((category) => (
            <button key={category.id} onClick={() => handleCategoryFilter(category.id)}>{category.title}</button>
          ))}
        </div>

        <button className="reset_filters" onClick={() => handleResetFilter()}>reset</button>

      </section>

      <ProductList list={productList}/>

    </div>

  )
}

export default App
