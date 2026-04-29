import './App.scss'

import products from './api/products.json';
import categories from './api/categories.json';
import users from './api/users.json';

function App() {
  console.log('====================================================');
  console.log('==================== new render ====================');
  console.log('====================================================');
  console.log('product list: ', products);
  console.log('category list: ', categories);
  console.log('user list: ', users);

  return (
    <div className="container">

      <h1>Demo</h1>

      <section className="filters">
        <h2>Filters</h2>

        <div className="filter_by_name">
          <button>All</button>
          <button>some user</button>
          <button>some user</button>
        </div>

        <div className="search_block">
          <input className="search" placeholder="Search" />
          <button>clear</button>
        </div>

        <div className="filter_by_category">
          <button>All</button>
          <button>some category</button>
          <button>some category</button>
        </div>

        <button className="reset_filters">reset</button>

      </section>

      <section className="product__list">
        <table>

          <thead>
          <tr>
            <th>id</th>
            <th>product</th>
            <th>category</th>
            <th>user</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td>0</td>
              <td>some product name</td>
              <td>some category name</td>
              <td>some user name</td>
            </tr>
          </tbody>

        </table>
      </section>

    </div>

  )
}

export default App
