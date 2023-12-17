
const WriteContract = ({ state }) => {
    const { contract, web3 } = state;//contract ko instance


    const WriteData = async (e) => {
        e.preventDefault()
        const data = document.querySelector("#data").value;
        const accounts = await web3.eth.getAccounts();
        await contract.methods.store(data).send({ from: accounts[0] })

        console.log("data updated");
        //await contract.methods.store(data).send({ form:})

    }
    return <><form onSubmit={WriteData}>
        <input id="data"></input>
        <button >Submit</button>
    </form>
    </>


};
export default WriteContract;