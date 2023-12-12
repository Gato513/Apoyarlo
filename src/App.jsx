import PersonCard from "./components/PersonCard";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <PersonCard
                lastName={"Doe"}
                firstName={"Jane"}
                age={45}
                hairColor={"Black"}
            />
            <PersonCard
                lastName={"Smith"}
                firstName={"John"}
                age={88}
                hairColor={"Brown"}
            />
            <PersonCard
                lastName={"Fillmore"}
                firstName={"Millard"}
                age={50}
                hairColor={"Brown"}
            />
            <PersonCard
                lastName={"Smith"}
                firstName={"Maria"}
                age={62}
                hairColor={"Brown"}
            />
        </React.Fragment>
    );
}

export default App;
