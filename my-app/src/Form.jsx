import { useState } from 'react'

function Form() {
    const [inputOne, setInputOne] = useState(0)
    const [inputTwo, setInputTwo] = useState(0)
    const [total, setTotal] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        setTotal(Number(inputOne) + Number(inputTwo))
    }
    

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    data-testid="inputOne"
                    type="number" 
                    value={inputOne}
                    onChange={(e) => setInputOne(e.target.value)}>
                </input>
                <input 
                    data-testid="inputTwo"
                    type="number" 
                    value={inputTwo}
                    onChange={(e) => setInputTwo(e.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>
            <span data-testid="total">Total:{total}</span>
        </section>
    )
}

export default Form