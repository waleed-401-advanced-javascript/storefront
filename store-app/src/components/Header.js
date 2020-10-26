import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux';
import {swapActive} from "../store/categories";


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

    return (
        <header>
                    <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                  {Object.keys(props.category.categories).map(category => {
            return <Tab label={`${category}`} 
            onClick={() => props.swapActive(category)} ></Tab>
          })}        
                </Tabs>
                
            </Paper>
        </header>
    )
}
const mapStateToProps = state => ({
    category: state.categories,
  })
  
  const mapDispatchToProps = {swapActive}
  
  export default connect(mapStateToProps, mapDispatchToProps)(CenteredTabs);