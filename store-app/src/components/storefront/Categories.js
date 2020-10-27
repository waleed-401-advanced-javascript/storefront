import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {swapActive} from '../../store/categories'
import {getProducts} from '../../store/products'


const Categories = props => {

  useEffect(() => {
    props.getProducts();
  }, [])

  return (

      <section className="category">
        {console.log('Props:', props)}
        <h3>Browse our Categories </h3><br/>
          <p>{props.category.activeCategory.displayName}</p>
      
        
      </section>

    )
}

const mapStateToProps = state => ({
  category: state.categories,
})

const mapDispatchToProps = {swapActive,getProducts}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);