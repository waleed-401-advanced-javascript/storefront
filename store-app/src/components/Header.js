import React,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux';
import {getCategories} from "../store/categories"
import { swapActive } from '../store/categories'
import { AddCart } from '../store/cart'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
      flexGrow: 1,
  },
});
function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(props)
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  useEffect(() => {
      props.getCategories();
  }, [])
  return (

      <header>
          {console.log('category ------> ', props.category.categories)}

          <Paper className={classes.root}>

              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
              >
                  {Object.values(props.category.categories).map(category => {
                      console.log('category : ', category)
                      return <Tab  component={Link} 
                      to={'./'} label={`${category.name}`}
                          onClick={() => props.swapActive(category.name)} ></Tab>
                  })}
                  <Tab component={Link} 
                          to={'./cart'} label={`Cart (${ 0 || props.basket.length})`}  ></Tab>
              </Tabs>
              {/* <Button  style={{marginTop:'-45px', float:'right'}}></Button> */}

          </Paper>

      </header>
  )
}
const mapStateToProps = state => ({
  category: state.categories,
  basket: state.cart.basket,


})
const mapDispatchToProps = { AddCart, swapActive, getCategories }
export default connect(mapStateToProps, mapDispatchToProps)(CenteredTabs);