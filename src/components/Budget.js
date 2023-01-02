import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
	const { budget,dispatch,expenses } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
             <span>Budget:£</span>            
			<input 
            type="number"
            value={budget}
            defaultValue={budget}
            step="10"     
            style={{ marginRight: '2rem' , size: 8}}   
            onInput={(event)=>changeBudget(event.target.value)}
            >
            </input>
		</div>
	);
};

export default Budget;
