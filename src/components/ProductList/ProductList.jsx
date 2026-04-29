export const ProductList = ({list}) => {

  return (
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
        {list.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category.title}</td>
            <td className={product.user.sex === 'm' ? 'male' : 'female'}>{product.user.name}</td>
          </tr>
        ))}

        </tbody>

      </table>
    </section>
  )
}