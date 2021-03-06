import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {swapActive} from '../../store/categories'
import {getCategories} from '../../store/categories'


const Categories = props => {

  useEffect(() => {
    props.getCategories();
  },[])
   console.log(props)
  return (

      <section className="category">
        {console.log('Props:', props)}
        <h3>Browse our Categories </h3><br/>
          <p>{props.category.activeCategory.name}</p>
      
        
      </section>

    )
}

const mapStateToProps = state => ({
  category: state.categories,
})

const mapDispatchToProps = {swapActive,getCategories}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);