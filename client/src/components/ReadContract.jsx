import { useState, useEffect } from "react";

const ReadContract = ({ state }) => {
    // console.log(state)
    const [dataStr, setData] = useState("No Data");
    const { web3, contract } = state; //Destructuring contract form state


    useEffect(() => {

        const readData = async () => {
            try {
                const data = await contract.methods.retrieve().call();
                const dataStr = data.toString();
                setData(dataStr);

                console.log(dataStr);


            } catch (error) {
                console.error('Error reading data:', error);
            }
        };
        contract && readData()
    }, [contract]);//Adding contract as a dependancy.

    return (
        <div> <p>ReadContract :{dataStr}</p>
        </div>
    );


}
export default ReadContract;