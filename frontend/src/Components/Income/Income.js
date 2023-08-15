import React from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import { useGlobalContext } from "../../Context/globalContext";

function Income() {
    const {addIncome} = useGlobalContext()
    
    const IncomeStyled = styled.div`
    
    `;

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container"></div>
                    <div className="incomes">

                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}


export default Income