import classes from './MealItemForm.module.css'
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
    return <form className={classes.form}>
        <Input label={"Amount"} input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            mas: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm